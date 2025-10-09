// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Video Modal
const playButton = document.getElementById('playButton');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const modalVideo = document.getElementById('modalVideo');
const heroVideo = document.getElementById('heroVideo');

playButton.addEventListener('click', function() {
    videoModal.classList.add('active');
    modalVideo.src = 'https://i.top4top.io/m_3568oncss1.mp4';
    document.querySelector('.video-modal-title').textContent = 'Nime - Assistent Demo';
    
    // Pause hero video when modal is opened
    heroVideo.pause();
});

closeModal.addEventListener('click', function() {
    videoModal.classList.remove('active');
    modalVideo.pause();
    modalVideo.currentTime = 0;
    heroVideo.play();
});

videoModal.addEventListener('click', function(e) {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        modalVideo.pause();
        modalVideo.currentTime = 0;
        heroVideo.play();
    }
});

// Upload Video Modal
const uploadVideoBtn = document.getElementById('uploadVideoBtn');
const uploadModal = document.getElementById('uploadVideoBtn');
const closeUploadModal = document.getElementById('closeUploadModal');
const uploadVideoForm = document.getElementById('uploadVideoForm');

uploadVideoBtn.addEventListener('click', function() {
    uploadModal.classList.add('active');
});

closeUploadModal.addEventListener('click', function() {
    uploadModal.classList.remove('active');
});

uploadModal.addEventListener('click', function(e) {
    if (e.target === uploadModal) {
        uploadModal.classList.remove('active');
    }
});

uploadVideoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const title = document.getElementById('videoTitle').value;
    const description = document.getElementById('videoDescription').value;
    const category = document.getElementById('videoCategory').value;
    const url = document.getElementById('videoUrl').value;
    const thumbnail = document.getElementById('videoThumbnail').value;
    const duration = document.getElementById('videoDuration').value;
    
    // Add new video
    const newVideo = videoDB.addVideo({
        title,
        description,
        category,
        url,
        thumbnail,
        duration
    });
    
    // Show success notification
    showNotification('Video Berhasil Diupload', `Video "${title}" telah berhasil ditambahkan`, 'success');
    
    // Reset form and close modal
    uploadVideoForm.reset();
    uploadModal.classList.remove('active');
});

// Video Database and Management
class VideoDatabase {
    constructor() {
        this.videos = this.loadVideos();
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.renderVideos();
        this.setupEventListeners();
    }

    loadVideos() {
        // Load videos from localStorage or use default videos
        const savedVideos = localStorage.getItem('nimeVideos');
        if (savedVideos) {
            return JSON.parse(savedVideos);
        } else {
            // Default videos
            const defaultVideos = [
                {
                    id: 1,
                    title: "Nime - Assistent Demo",
                    url: "https://i.top4top.io/m_3568oncss1.mp4",
                    thumbnail: "https://i.top4top.io/m_3568oncss1.mp4",
                    description: "Demo lengkap bot Nime - Assisten dengan berbagai fitur menarik",
                    category: "demo",
                    duration: "0:30",
                    views: 0,
                    date: new Date().toISOString()
                }
            ];
            this.saveVideos(defaultVideos);
            return defaultVideos;
        }
    }

    saveVideos(videos) {
        localStorage.setItem('nimeVideos', JSON.stringify(videos));
    }

    addVideo(video) {
        const newVideo = {
            id: Date.now(),
            ...video,
            views: 0,
            date: new Date().toISOString()
        };
        this.videos.push(newVideo);
        this.saveVideos(this.videos);
        this.renderVideos();
        return newVideo;
    }

    deleteVideo(id) {
        this.videos = this.videos.filter(video => video.id !== id);
        this.saveVideos(this.videos);
        this.renderVideos();
    }

    getVideoById(id) {
        return this.videos.find(video => video.id === id);
    }

    filterVideos(category) {
        this.currentFilter = category;
        this.renderVideos();
    }

    renderVideos() {
        const videoGrid = document.getElementById('videoGrid');
        if (!videoGrid) return;
        
        videoGrid.innerHTML = '';

        let filteredVideos = this.videos;
        if (this.currentFilter !== 'all') {
            filteredVideos = this.videos.filter(video => video.category === this.currentFilter);
        }

        filteredVideos.forEach((video, index) => {
            const videoCard = this.createVideoCard(video);
            videoCard.setAttribute('data-aos', 'fade-up');
            videoCard.setAttribute('data-aos-delay', index * 100);
            videoGrid.appendChild(videoCard);
        });

        // Reinitialize AOS for new elements
        AOS.refresh();
    }

    createVideoCard(video) {
        const card = document.createElement('div');
        card.className = 'video-card';
        
        // Generate thumbnail URL if not provided
        let thumbnailUrl = video.thumbnail;
        if (!thumbnailUrl && video.url.includes('youtube.com')) {
            const videoId = this.extractYouTubeId(video.url);
            thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        } else if (!thumbnailUrl) {
            thumbnailUrl = 'https://picsum.photos/seed/nime-video/640/360.jpg';
        }

        card.innerHTML = `
            <div class="video-thumbnail-container">
                <img src="${thumbnailUrl}" alt="${video.title}" class="video-thumbnail">
                    <div class="video-duration">${video.duration}</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <p class="video-description">${video.description}</p>
                <div class="video-meta">
                    <div class="video-date">
                        <i class="far fa-calendar"></i> ${this.formatDate(video.date)}
                    </div>
                    <div class="video-views">
                        <i class="far fa-eye"></i> ${this.formatViews(video.views)}
                    </div>
                </div>
            </div>
            <div class="video-actions">
                <button class="video-action-btn play-video" data-id="${video.id}">
                    <i class="fas fa-play"></i>
                </button>
                <button class="video-action-btn edit-video" data-id="${video.id}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="video-action-btn delete-video" data-id="${video.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        // Add event listeners
        const playBtn = card.querySelector('.play-video');
        const editBtn = card.querySelector('.edit-video');
        const deleteBtn = card.querySelector('.delete-video');

        playBtn.addEventListener('click', () => this.playVideo(video));
        
        // Add edit and delete buttons only for developer
        if (isDeveloper()) {
            const editBtn = card.querySelector('.edit-video');
            const deleteBtn = card.querySelector('.delete-video');
            
            if (editBtn) {
                editBtn.addEventListener('click', () => this.editVideo(video));
            }
            
            if (deleteBtn) {
                deleteBtn.addEventListener('click', () => {
                    this.confirmDeleteVideo(video.id);
                });
            }
        }

        return card;
    }

    extractYouTubeId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    }

    formatViews(views) {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(1) + 'M';
        } else if (views >= 1000) {
            return (views / 1000).toFixed(1) + 'K';
        } else {
            return views.toString();
        }
    }

    confirmDeleteVideo(id) {
        if (confirm('Apakah Anda yakin ingin menghapus video ini?')) {
            this.deleteVideo(id);
            return true;
        }
        return false;
    }

    playVideo(video) {
        // Update modal video source
        modalVideo.src = video.url;
        document.querySelector('.video-modal-title').textContent = video.title;
        
        // Show modal
        videoModal.classList.add('active');
        modalVideo.play();
        
        // Increment view count
        video.views++;
        this.saveVideos(this.videos);
    }

    editVideo(video) {
        // This would open an edit modal in a real application
        // For now, we'll just show a notification
        showNotification('Edit Video', `Anda mengedit video "${video.title}"`, 'info');
    }

    setupEventListeners() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterVideos(btn.getAttribute('data-filter'));
            });
        });
    }
}

// Notification System
function showNotification(title, message, type = 'info') {
    // Create notification container if it doesn't exist
    let notificationContainer = document.getElementById('notificationContainer');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.id = 'notificationContainer';
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        </div>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
            <div class="notification-time">${this.formatTime(new Date())}</div>
        </div>
        `;
    
    // Add to container
    notificationContainer.appendChild(notification);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notificationContainer.contains(notification)) {
                notificationContainer.removeChild(notification);
            }
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notificationContainer.contains(notification)) {
                notificationContainer.removeChild(notification);
            }
        }, 5000);
    }, 5000);
}

// Animate stats on scroll
function animateStats() {
    const statsSection = document.querySelector('.stats');
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    let animated = false;

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function animateNumber(element, start, end) {
        const duration = 1000;
        const startTime = performance.now();
        
        const updateCount = () => {
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentValue = Math.floor(start + (end - start) * progress);
            element.innerText = currentValue.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                element.innerText = end.toLocaleString();
            }
        };
        
        requestAnimationFrame(updateCount);
    }

    function checkAndAnimate() {
        if (!animated && isInViewport(statsSection)) {
            animated = true;
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                animateNumber(stat, 0, target);
            });
        }
    }

    function checkAndAnimate() {
        window.addEventListener('scroll', checkAndAnimate);
        checkAndAnimate(); // Check on initial load
    }

    // Initialize components
document.addEventListener('DOMContentLoaded', function() {
        const videoDB = new VideoDatabase();
        
        // Animate stats on scroll
        animateStats();
        
        // Show welcome notification
        setTimeout(() => {
            showNotification('Selamat Datang', 'Terima kasih telah mengunjungi website Nime - Assisten', 'success');
        }, 1000);
        
        // Track page views
        window.addEventListener('load', () => {
            videoDB.trackPageViews();
        });
        
        // Animate stats on scroll
        window.addEventListener('scroll', animateStats);
        
        // Simulate user activity
        setInterval(() => {
            const activities = [
                { icon: 'fa-user', title: 'Pengunjung baru', message: 'Seseorang baru mengunjungi website' },
                { icon: 'fa-video', title: 'Video ditonton', message: 'Seseorang menonton video demo' },
                { icon: 'fa-download', title: 'Unduhan baru', message: 'Seseorang mengunduh konten konten' }
            ];
            
            const activity = activities[Math.floor(Math.random() * activities.length)];
            this.addActivity(activity);
        }, 8000 + Math.random() * 20000); // Random interval between 8-28 seconds
    }, 5000 + Math.random() * 20000); // Random interval between 20-40 seconds
}

// Initialize components
document.addEventListener('DOMContentLoaded', function() {
    const videoDB = new VideoDatabase();
    
    // Animate stats on scroll
    animateStats();
    
    // Show welcome notification
    setTimeout(() => {
        showNotification('Selamat Datang', 'Terima kasih telah mengunjungi website Nime - Assisten', 'success');
    }, 1000);
    
    // Track page views
    window.addEventListener('load', () => {
        videoDB.trackPageViews();
    });
    
    // Simulate user activity
    setInterval(() => {
        const activities = [
            { icon: 'fa-user', title: 'Pengunjung baru', message: 'Seseorang baru mengunjungi website' },
            { icon: 'fa-video', title: 'Video ditonton', message: 'Seseorang menonton video demo' },
            { icon: 'fa-download', title: 'Unduhan baru', message: 'Seseorang mengunduh konten konten' }
        ];
        
        const activity = activities[Math.floor(Math.random() * activities.length)];
        this.addActivity(activity);
    }, 5000 + Math.random() * 20000); // Random interval between 5-15 seconds
});

// Initialize components
document.addEventListener('DOMContentLoaded', function() {
    const videoDB = new VideoDB();
    
    // Animate stats on scroll
    animateStats();
    
    // Show welcome notification
    setTimeout(() => {
        showNotification('Selamat Datang', 'Terima kasih telah mengunjungi website Nime - Assisten', 'success');
    }, 1000);
    
    // Track page views
    window.addEventListener('load', () => {
        videoDB.trackPageViews();
    });
    
    // Animate stats on scroll
    window.addEventListener('scroll', animateStats);
    
    // Simulate user activity
    setInterval(() => {
        const activities = [
            { icon: 'fa-user', title: 'Pengunjung baru', message: 'Seseorang baru mengunjungi website' },
            { icon: 'fa-video', title: 'Video ditonton', message: 'Seseorang menonton video demo' },
            { icon: 'fa-download', title: 'Unduhan baru', message: 'Seseorang mengunduh konten konten' }
        ];
        
        const activity = activities[Math.floor(Math.random() * activities.length)];
        this.addActivity(activity);
    }, 5000 + Math.random() * 20000); // Random interval between 5-15 seconds
});