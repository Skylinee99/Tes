// Script untuk halaman upload
document.addEventListener('DOMContentLoaded', function() {
    // Jika kita di halaman upload
    const videoInput = document.getElementById('video');
    if (videoInput) {
        const preview = document.getElementById('preview');
        const videoPreview = document.getElementById('videoPreview');
        
        videoInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            
            if (file) {
                // Validasi tipe file
                if (!file.type.startsWith('video/')) {
                    alert('Harap pilih file video!');
                    e.target.value = '';
                    return;
                }
                
                // Validasi ukuran file
                if (file.size > 100 * 1024 * 1024) {
                    alert('File terlalu besar! Maksimal 100MB');
                    e.target.value = '';
                    return;
                }
                
                // Tampilkan preview
                const url = URL.createObjectURL(file);
                videoPreview.src = url;
                preview.style.display = 'block';
                
                // Cleanup URL saat tidak dibutuhkan
                videoPreview.addEventListener('load', function() {
                    URL.revokeObjectURL(url);
                });
            } else {
                preview.style.display = 'none';
            }
        });
        
        // Drag and drop functionality
        const uploadArea = document.querySelector('.upload-area');
        if (uploadArea) {
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                uploadArea.addEventListener(eventName, preventDefaults, false);
            });
            
            function preventDefaults(e) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            ['dragenter', 'dragover'].forEach(eventName => {
                uploadArea.addEventListener(eventName, highlight, false);
            });
            
            ['dragleave', 'drop'].forEach(eventName => {
                uploadArea.addEventListener(eventName, unhighlight, false);
            });
            
            function highlight(e) {
                uploadArea.classList.add('dragover');
            }
            
            function unhighlight(e) {
                uploadArea.classList.remove('dragover');
            }
            
            uploadArea.addEventListener('drop', handleDrop, false);
            
            function handleDrop(e) {
                const dt = e.dataTransfer;
                const files = dt.files;
                
                if (files.length > 0) {
                    videoInput.files = files;
                    const event = new Event('change', { bubbles: true });
                    videoInput.dispatchEvent(event);
                }
            }
        }
    }
    
    // Auto-hide alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(function(alert) {
        setTimeout(function() {
            alert.classList.remove('show');
            setTimeout(function() {
                alert.remove();
            }, 150);
        }, 5000);
    });
});

// Script untuk halaman index
document.addEventListener('DOMContentLoaded', function() {
    // Play video on hover
    const videoThumbnails = document.querySelectorAll('.video-thumbnail video');
    
    videoThumbnails.forEach(function(video) {
        video.addEventListener('mouseenter', function() {
            this.play();
        });
        
        video.addEventListener('mouseleave', function() {
            this.pause();
            this.currentTime = 0;
        });
    });
    
    // Lazy loading for videos (if needed)
    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    video.src = video.dataset.src;
                    videoObserver.unobserve(video);
                }
            });
        });
        
        document.querySelectorAll('video[data-src]').forEach(video => {
            videoObserver.observe(video);
        });
    }
});
