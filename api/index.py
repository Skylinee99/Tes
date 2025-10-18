import os
import json
import uuid
from datetime import datetime
from flask import Flask, render_template, request, redirect, url_for, flash, send_from_directory
from werkzeug.utils import secure_filename
from vercel_wsgi import VercelWSGI

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'
app.config['UPLOAD_FOLDER'] = '/tmp/videos'
app.config['MAX_CONTENT_LENGTH'] = 100 * 1024 * 1024  # 100MB max file size
app.config['DATABASE_FILE'] = '/tmp/database.json'

# Pastikan folder upload ada
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Fungsi untuk memuat database JSON
def load_database():
    if os.path.exists(app.config['DATABASE_FILE']):
        with open(app.config['DATABASE_FILE'], 'r', encoding='utf-8') as f:
            return json.load(f)
    return []

# Fungsi untuk menyimpan database JSON
def save_database(data):
    with open(app.config['DATABASE_FILE'], 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

# Inisialisasi database jika belum ada
def init_db():
    if not os.path.exists(app.config['DATABASE_FILE']):
        save_database([])
        print("Database JSON berhasil dibuat!")
    else:
        print("Database JSON sudah ada, siap digunakan!")

# Route untuk serve video
@app.route('/videos/<filename>')
def serve_video(filename):
    try:
        return send_from_directory(app.config['UPLOAD_FOLDER'], filename)
    except FileNotFoundError:
        return "File not found", 404

@app.route('/')
def index():
    videos = load_database()
    # Urutkan berdasarkan upload_date terbaru
    videos_sorted = sorted(videos, key=lambda x: x['upload_date'], reverse=True)
    return render_template('index.html', videos=videos_sorted)

@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        title = request.form['title']
        description = request.form['description']
        
        if 'video' not in request.files:
            flash('Tidak ada file video yang dipilih', 'error')
            return redirect(request.url)
        
        video = request.files['video']
        
        if video.filename == '':
            flash('Tidak ada file video yang dipilih', 'error')
            return redirect(request.url)
        
        if video:
            try:
                # Generate unique filename dengan timestamp
                timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                safe_filename = secure_filename(video.filename)
                filename = f"{timestamp}_{uuid.uuid4().hex[:8]}_{safe_filename}"
                filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                
                # Simpan file
                video.save(filepath)
                
                # Get file size
                file_size = os.path.getsize(filepath)
                
                # Buat data video baru
                new_video = {
                    'id': str(uuid.uuid4()),
                    'title': title,
                    'filename': filename,
                    'description': description,
                    'upload_date': datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                    'file_size': file_size
                }
                
                # Load database saat ini
                videos = load_database()
                
                # Tambahkan video baru
                videos.append(new_video)
                
                # Simpan kembali ke database
                save_database(videos)
                
                flash('Video berhasil diupload!', 'success')
                return redirect(url_for('index'))
                
            except Exception as e:
                flash(f'Error: {str(e)}', 'error')
                return redirect(request.url)
    
    return render_template('upload.html')

@app.route('/video/<video_id>')
def video_detail(video_id):
    videos = load_database()
    
    # Cari video berdasarkan ID
    video = next((v for v in videos if v['id'] == video_id), None)
    
    if video is None:
        flash('Video tidak ditemukan', 'error')
        return redirect(url_for('index'))
    
    return render_template('video_detail.html', video=video)

# Route untuk melihat database (opsional, untuk debugging)
@app.route('/admin/db')
def view_db():
    videos = load_database()
    
    db_info = {
        'database_file': app.config['DATABASE_FILE'],
        'database_exists': os.path.exists(app.config['DATABASE_FILE']),
        'video_folder': app.config['UPLOAD_FOLDER'],
        'video_folder_exists': os.path.exists(app.config['UPLOAD_FOLDER']),
        'total_videos': len(videos),
        'videos': videos
    }
    
    return db_info

# Inisialisasi database
init_db()

# Export untuk Vercel
handler = VercelWSGI(app)
