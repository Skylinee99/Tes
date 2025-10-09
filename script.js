// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Preloader
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.preloader').classList.add('fade-out');
    }, 1000);
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
    modalVideo.play();
});

closeModal.addEventListener('click', function() {
    videoModal.classList.remove('active');
    modalVideo.pause();
    modalVideo.currentTime = 0;
});

videoModal.addEventListener('click', function(e) {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        modalVideo.pause();
        modalVideo.currentTime = 0;
    }
});

// Pause hero video when modal is opened
playButton.addEventListener('click', function() {
    heroVideo.pause();
});

// Resume hero video when modal is closed
closeModal.addEventListener('click', function() {
    heroVideo.play();
});

videoModal.addEventListener('click', function(e) {
    if (e.target === videoModal) {
        heroVideo.play();
    }
});

// Real-time Visitor Counter
class VisitorCounter {
    constructor() {
        this.count = 1;
        this.onlineUsers = Math.floor(Math.random() * 50) + 100; // Start with random number between 100-150
        this.init();
    }

    init() {
        this.updateDisplay();
        this.simulateUserActivity();
        this.trackPageViews();
    }

    updateDisplay() {
        document.getElementById('visitorCount').textContent = this.onlineUsers;
    }

    simulateUserActivity() {
        // Simulate users joining and leaving
        setInterval(() => {
            const change = Math.random() > 0.5 ? 1 : -1;
            this.onlineUsers = Math.max(1, this.onlineUsers + change);
            this.updateDisplay();
            
            // Occasionally show activity notification
            if (Math.random() > 0.7) {
                this.showActivityNotification();
            }
        }, 3000 + Math.random() * 5000); // Random interval between 3-8 seconds
    }

    trackPageViews() {
        // Increment page views when page is loaded
        let pageViews = parseInt(localStorage.getItem('pageViews') || 0);
        pageViews++;
        localStorage.setItem('pageViews', pageViews);
        
        // Update total users stat
        const totalUsersElement = document.getElementById('totalUsers');
        if (totalUsersElement) {
            const totalUsers = parseInt(localStorage.getItem('totalUsers')) || 10000;
            const newUsers = Math.floor(Math.random() * 5) + 1;
            const updatedUsers = totalUsers + newUsers;
            localStorage.setItem('totalUsers', updatedUsers);
            
            // Animate the number change
            this.animateNumber(totalUsersElement, totalUsers, updatedUsers);
        }
    }

    animateNumber(element, start, end) {
        const duration = 1000;
        const startTime = performance.now();
        
        const updateNumber = () => {
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentValue = Math.floor(start + (end - start) * progress);
            element.textContent = currentValue.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        };
        
        requestAnimationFrame(updateNumber);
    }

    showActivityNotification() {
        const activities = [
            { icon: 'fa-user', title: 'Pengguna baru', message: 'Seseorang baru mengunjungi website' },
            { icon: 'fa-video', title: 'Video ditonton', message: 'Seseorang menonton video demo' },
            { icon: 'fa-download', title: 'Unduhan baru', message: 'Seseorang mengunduh konten' },
            { icon: 'fa-share', title: 'Konten dibagikan', message: 'Seseorang membagikan konten' }
        ];
        
        const activity = activities[Math.floor(Math.random() * activities.length)];
        this.addNotification(activity.title, activity.message, activity.icon);
    }

    addNotification(title, message, icon) {
        const notificationContainer = document.getElementById('notificationContainer');
        const notification = document.createElement('div');
        notification.className = 'notification';
        
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas ${icon}"></i>
            </div>
            <div class="notification-content">
                <div class="notification-title">${title}</div>
                <div class="notification-message">${message}</div>
                <div class="notification-time">${this.formatTime(new Date())}</div>
            </div>
        `;
        
        notificationContainer.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notificationContainer.removeChild(notification);
            }, 300);
        }, 5000);
    }

    formatTime(date) {
        return date.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

// Real-time Activity Feed
class ActivityFeed {
    constructor() {
        this.activities = [];
        this.init();
    }

    init() {
        this.addInitialActivities();
        this.simulateActivities();
    }

    addInitialActivities() {
        const initialActivities = [
            {
                icon: 'fa-user',
                title: 'Pengunjung baru',
                message: 'Seseorang baru mengunjungi website',
                time: new Date(Date.now() - 60000).toISOString()
            },
            {
                icon: 'fa-video',
                title: 'Video ditonton',
                message: 'Seseorang menonton video demo',
                time: new Date(Date.now() - 120000).toISOString()
            },
            {
                icon: 'fa-download',
                title: 'Unduhan baru',
                message: 'Seseorang mengunduh konten',
                time: new Date(Date.now() - 180000).toISOString()
            }
        ];
        
        initialActivities.forEach(activity => {
            this.addActivity(activity);
        });
    }

    addActivity(activity) {
        this.activities.unshift(activity);
        if (this.activities.length > 10) {
            this.activities.pop();
        }
        this.renderActivities();
    }

    renderActivities() {
        const activityList = document.getElementById('activityList');
        activityList.innerHTML = '';
        
        this.activities.forEach((activity, index) => {
            const activityItem = document.createElement('div');
            activityItem.className = 'activity-item';
            activityItem.setAttribute('data-aos', 'fade-up');
            activityItem.setAttribute('data-aos-delay', index * 100);
            
            const iconClass = activity.icon === 'fa-user' ? 'user' : 
                             activity.icon === 'fa-video' ? 'video' : 
                             activity.icon === 'fa-download' ? 'download' : '';
            
            activityItem.innerHTML = `
                <div class="activity-icon ${iconClass}">
                    <i class="fas ${activity.icon}"></i>
                </div>
                <div class="activity-content">
                    <div class="activity-header">
                        <div class="activity-title">${activity.title}</div>
                        <div class="activity-time">${this.formatTime(new Date(activity.time))}</div>
                    </div>
                    <div class="activity-description">${activity.message}</div>
                </div>
            `;
            
            activityList.appendChild(activityItem);
        });
        
        // Reinitialize AOS for new elements
        AOS.refresh();
    }

    simulateActivities() {
        // Add new activities periodically
        setInterval(() => {
            const activities = [
                { icon: 'fa-user', title: 'Pengunjung baru', message: 'Seseorang baru mengunjungi website' },
                { icon: 'fa-video', title: 'Video ditonton', message: 'Seseorang menonton video demo' },
                { icon: 'fa-download', title: 'Unduhan baru', message: 'Seseorang mengunduh konten' },
                { icon: 'fa-share', title: 'Konten dibagikan', message: 'Seseorang membagikan konten' }
            ];
            
            const activity = activities[Math.floor(Math.random() * activities.length)];
            activity.time = new Date().toISOString();
            this.addActivity(activity);
        }, 10000 + Math.random() * 20000); // Random interval between 10-30 seconds
    }

    formatTime(date) {
        const now = new Date();
        const diff = Math.floor((now - new Date(date)) / 1000);
        
        if (diff < 60) {
            return `${diff} detik yang lalu`;
        } else if (diff < 3600) {
            return `${Math.floor(diff / 60)} menit yang lalu`;
        } else {
            return `${Math.floor(diff / 3600)} jam yang lalu`;
        }
    }
}

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
                    title: "Nime - Assisten Demo",
                    url: "https://i.top4top.io/m_3568oncss1.mp4",
                    thumbnail: "https://i.top4top.io/m_3568oncss1.mp4",
                    description: "Demo lengkap bot Nime - Assisten dengan berbagai fitur menarik",
                    category: "demo",
                    duration: "0:30",
                    views: 1250,
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
        videoGrid.innerHTML = '';

        let filteredVideos = this.videos;
        if (this.currentFilter !== 'all') {
            filteredVideos = this.videos.filter(video => video.category === this.currentFilter);
        }

        filteredVideos.forEach(video => {
            const videoCard = this.createVideoCard(video);
            videoGrid.appendChild(videoCard);
        });

        // Reinitialize AOS for new elements
        AOS.refresh();
    }

    createVideoCard(video) {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.setAttribute('data-aos', 'fade-up');
        
        // Generate thumbnail URL if not provided
        let thumbnailUrl = video.thumbnail;
        if (!thumbnailUrl && video.url.includes('youtube.com')) {
            const videoId = this.extractYouTubeId(video.url);
            thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        } else if (!thumbnailUrl) {
            // Use a default thumbnail if none provided
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
            </div>
        `;

        // Add event listeners
        const playBtn = card.querySelector('.play-video');
        const editBtn = card.querySelector('.edit-video');
        const deleteBtn = card.querySelector('.delete-video');

        playBtn.addEventListener('click', () => this.playVideo(video));
        editBtn.addEventListener('click', () => this.editVideo(video));
        deleteBtn.addEventListener('click', () => this.confirmDeleteVideo(video.id));

        return card;
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
        
        // Show activity notification
        activityFeed.addActivity({
            icon: 'fa-video',
            title: 'Video ditonton',
            message: `Seseorang menonton video "${video.title}"`
        });
    }

    editVideo(video) {
        // This would open an edit modal in a real application
        // For now, we'll just show a notification
        activityFeed.addActivity({
            icon: 'fa-edit',
            title: 'Edit video',
            message: `Admin mengedit video "${video.title}"`
        });
    }

    confirmDeleteVideo(id) {
        if (confirm('Apakah Anda yakin ingin menghapus video ini?')) {
            this.deleteVideo(id);
            activityFeed.addActivity({
                icon: 'fa-trash',
                title: 'Video dihapus',
                message: `Video "${this.getVideoById(id).title}" telah dihapus`
            });
        }
    }

    extractYouTubeId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
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

// Initialize components
const visitorCounter = new VisitorCounter();
const activityFeed = new ActivityFeed();
const videoDB = new VideoDatabase();

// Show notification when page is loaded
window.addEventListener('load', () => {
    visitorCounter.addNotification('Selamat datang!', 'Terima kasih telah mengunjungi website Nime - Assisten', 'fa-heart');
});