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
    modalVideo.src = 'https://i.top4top.io/m_3568oncss1.mp4';
    document.querySelector('.video-modal-title').textContent = 'Nime - Assistent Demo';
    
    // Show notification
    activityFeed.addNotification('Video Demo', 'Seseorang menonton video demo', 'fa-play');
    
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

// Advanced Visitor Tracker
class VisitorTracker {
    constructor() {
        this.currentVisitors = [];
        this.totalVisitors = 0;
        this.pageViews = 0;
        this.visitorHistory = [];
        this.currentVisitorId = null;
        this.init();
    }

    init() {
        // Load data from localStorage
        this.loadData();
        
        // Generate or retrieve visitor ID
        this.currentVisitorId = this.getOrCreateVisitorId();
        
        // Track current visitor
        this.trackCurrentVisitor();
        
        // Update displays
        this.updateVisitorCount();
        this.updatePageViews();
        
        // Start real-time simulation
        this.startRealTimeSimulation();
        
        // Track page visibility changes
        this.trackPageVisibility();
        
        // Track page unload
        this.trackPageUnload();
        
        // Update connection status
        this.updateConnectionStatus();
    }

    loadData() {
        const savedData = localStorage.getItem('nimeVisitorData');
        if (savedData) {
            const data = JSON.parse(savedData);
            this.currentVisitors = data.currentVisitors || [];
            this.totalVisitors = data.totalVisitors || 0;
            this.pageViews = data.pageViews || 0;
            this.visitorHistory = data.visitorHistory || [];
        }
    }

    saveData() {
        const data = {
            currentVisitors: this.currentVisitors,
            totalVisitors: this.totalVisitors,
            pageViews: this.pageViews,
            visitorHistory: this.visitorHistory
        };
        localStorage.setItem('nimeVisitorData', JSON.stringify(data));
    }

    getOrCreateVisitorId() {
        let visitorId = sessionStorage.getItem('nimeVisitorId');
        if (!visitorId) {
            visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            sessionStorage.setItem('nimeVisitorId', visitorId);
        }
        return visitorId;
    }

    trackCurrentVisitor() {
        // Check if this visitor is already tracked
        const existingVisitor = this.currentVisitors.find(v => v.id === this.currentVisitorId);
        
        if (!existingVisitor) {
            // New visitor
            const newVisitor = {
                id: this.currentVisitorId,
                entryTime: new Date().toISOString(),
                lastActivity: new Date().toISOString(),
                pageViews: 1,
                duration: 0,
                location: this.getRandomLocation(),
                device: this.getRandomDevice(),
                browser: this.getBrowserInfo(),
                referrer: document.referrer || 'Direct',
                isNew: true,
                ipAddress: this.generateRandomIP(),
                sessionId: this.generateSessionId()
            };
            
            this.currentVisitors.push(newVisitor);
            this.totalVisitors++;
            this.visitorHistory.push({...newVisitor});
            
            // Show notification for new visitor
            activityFeed.addNotification('Pengunjung Baru', `Pengunjung dari ${newVisitor.location} (${newVisitor.ipAddress}) telah masuk`, 'fa-user');
            
            // Add to activity feed
            activityFeed.addActivity({
                icon: 'fa-user',
                title: 'Pengunjung baru',
                message: `Pengunjung dari ${newVisitor.location} (${newVisitor.ipAddress}) telah masuk`,
                time: new Date().toISOString()
            });
        } else {
            // Returning visitor
            existingVisitor.lastActivity = new Date().toISOString();
            existingVisitor.pageViews++;
            existingVisitor.isNew = false;
            
            // Show notification for returning visitor
            activityFeed.addNotification('Pengunjung Kembali', `Pengunjung dari ${existingVisitor.location} (${existingVisitor.ipAddress}) kembali`, 'fa-user');
            
            // Add to activity feed
            activityFeed.addActivity({
                icon: 'fa-user',
                title: 'Pengunjung kembali',
                message: `Pengunjung dari ${existingVisitor.location} (${existingVisitor.ipAddress}) telah kembali`,
                time: new Date().toISOString()
            });
        }
        
        this.pageViews++;
        this.saveData();
    }

    getRandomLocation() {
        const locations = [
            'Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang', 
            'Makassar', 'Palembang', 'Tangerang', 'Depok', 'Bekasi',
            'Batam', 'Pekanbaru', 'Bandar Lampung', 'Malang', 'Yogyakarta',
            'New York', 'London', 'Tokyo', 'Paris', 'Singapore'
        ];
        return locations[Math.floor(Math.random() * locations.length)];
    }

    getRandomDevice() {
        const devices = [
            'Desktop (Windows)', 'Desktop (Mac)', 'Desktop (Linux)',
            'Mobile (Android)', 'Mobile (iOS)', 'Tablet (iPad)', 'Tablet (Android)'
        ];
        return devices[Math.floor(Math.random() * devices.length)];
    }

    getBrowserInfo() {
        const userAgent = navigator.userAgent;
        let browser = "Unknown";
        
        if (userAgent.indexOf("Firefox") > -1) {
            browser = "Mozilla Firefox";
        } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
            browser = "Opera";
        } else if (userAgent.indexOf("Trident") > -1) {
            browser = "Internet Explorer";
        } else if (userAgent.indexOf("Edge") > -1) {
            browser = "Microsoft Edge";
        } else if (userAgent.indexOf("Chrome") > -1) {
            browser = "Google Chrome";
        } else if (userAgent.indexOf("Safari") > -1) {
            browser = "Safari";
        }
        
        return browser;
    }

    generateRandomIP() {
        return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
    }

    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    updateVisitorCount() {
        const visitorCountElement = document.getElementById('visitorCount');
        if (visitorCountElement) {
            visitorCountElement.textContent = this.currentVisitors.length;
        }
        
        const totalUsersElement = document.getElementById('totalUsers');
        if (totalUsersElement) {
            totalUsersElement.textContent = this.totalVisitors;
        }
    }

    updatePageViews() {
        const pageViewsElement = document.getElementById('pageViews');
        if (pageViewsElement) {
            pageViewsElement.textContent = this.pageViews;
        }
    }

    updateConnectionStatus() {
        const statusIndicator = document.getElementById('statusIndicator');
        const statusText = document.getElementById('statusText');
        
        if (navigator.onLine) {
            statusIndicator.classList.remove('offline');
            statusText.textContent = 'Terhubung';
        } else {
            statusIndicator.classList.add('offline');
            statusText.textContent = 'Tidak Terhubung';
        }
        
        window.addEventListener('online', () => {
            statusIndicator.classList.remove('offline');
            statusText.textContent = 'Terhubung';
        });
        
        window.addEventListener('offline', () => {
            statusIndicator.classList.add('offline');
            statusText.textContent = 'Tidak Terhubung';
        });
    }

    startRealTimeSimulation() {
        // Simulate visitors leaving
        setInterval(() => {
            if (this.currentVisitors.length > 1) {
                const randomIndex = Math.floor(Math.random() * this.currentVisitors.length);
                const leavingVisitor = this.currentVisitors[randomIndex];
                
                // Don't remove the current visitor
                if (leavingVisitor.id !== this.currentVisitorId) {
                    this.currentVisitors.splice(randomIndex, 1);
                    
                    // Calculate duration
                    const entryTime = new Date(leavingVisitor.entryTime);
                    const leaveTime = new Date();
                    const duration = Math.floor((leaveTime - entryTime) / 1000); // in seconds
                    
                    // Update visitor history
                    const historyIndex = this.visitorHistory.findIndex(v => v.id === leavingVisitor.id);
                    if (historyIndex !== -1) {
                        this.visitorHistory[historyIndex].duration = duration;
                        this.visitorHistory[historyIndex].exitTime = leaveTime.toISOString();
                    }
                    
                    // Show notification
                    activityFeed.addActivity({
                        icon: 'fa-user-slash',
                        title: 'Pengunjung keluar',
                        message: `Pengunjung dari ${leavingVisitor.location} (${leavingVisitor.ipAddress}) telah keluar`,
                        time: new Date().toISOString()
                    });
                    
                    this.saveData();
                    this.updateVisitorCount();
                }
            }
        }, 15000 + Math.random() * 15000); // Random interval between 15-30 seconds
        
        // Simulate new visitors
        setInterval(() => {
            if (Math.random() > 0.3) { // 70% chance of a new visitor
                const newVisitor = {
                    id: 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
                    entryTime: new Date().toISOString(),
                    lastActivity: new Date().toISOString(),
                    pageViews: 1,
                    duration: 0,
                    location: this.getRandomLocation(),
                    device: this.getRandomDevice(),
                    browser: this.getBrowserInfo(),
                    referrer: 'Direct',
                    isNew: true,
                    ipAddress: this.generateRandomIP(),
                    sessionId: this.generateSessionId()
                };
                
                this.currentVisitors.push(newVisitor);
                this.totalVisitors++;
                this.visitorHistory.push({...newVisitor});
                
                // Show notification
                activityFeed.addNotification('Pengunjung Baru', `Pengunjung dari ${newVisitor.location} (${newVisitor.ipAddress}) telah masuk`, 'fa-user');
                
                // Add to activity feed
                activityFeed.addActivity({
                    icon: 'fa-user',
                    title: 'Pengunjung baru',
                    message: `Pengunjung dari ${newVisitor.location} (${newVisitor.ipAddress}) telah masuk`,
                    time: new Date().toISOString()
                });
                
                this.saveData();
                this.updateVisitorCount();
            }
        }, 20000 + Math.random() * 20000); // Random interval between 20-40 seconds
        
        // Update current visitor activity
        setInterval(() => {
            const currentVisitor = this.currentVisitors.find(v => v.id === this.currentVisitorId);
            if (currentVisitor) {
                currentVisitor.lastActivity = new Date().toISOString();
                this.saveData();
            }
        }, 30000); // Update every 30 seconds
    }

    trackPageVisibility() {
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                // Page is visible again
                const currentVisitor = this.currentVisitors.find(v => v.id === this.currentVisitorId);
                if (currentVisitor) {
                    currentVisitor.lastActivity = new Date().toISOString();
                    this.saveData();
                }
            }
        });
    }

    trackPageUnload() {
        window.addEventListener('beforeunload', () => {
            const currentVisitor = this.currentVisitors.find(v => v.id === this.currentVisitorId);
            if (currentVisitor) {
                // Calculate duration
                const entryTime = new Date(currentVisitor.entryTime);
                const leaveTime = new Date();
                const duration = Math.floor((leaveTime - entryTime) / 1000); // in seconds
                
                // Update visitor history
                const historyIndex = this.visitorHistory.findIndex(v => v.id === currentVisitor.id);
                if (historyIndex !== -1) {
                    this.visitorHistory[historyIndex].duration = duration;
                    this.visitorHistory[historyIndex].exitTime = leaveTime.toISOString();
                }
                
                this.saveData();
            }
        });
    }

    getVisitorAnalytics() {
        const analytics = {
            totalVisitors: this.totalVisitors,
            currentVisitors: this.currentVisitors.length,
            pageViews: this.pageViews,
            averagePageViews: this.visitorHistory.length > 0 ? 
                Math.round(this.visitorHistory.reduce((sum, visitor) => sum + visitor.pageViews, 0) / this.visitorHistory.length) : 0,
            averageDuration: this.visitorHistory.length > 0 ? 
                Math.round(this.visitorHistory.reduce((sum, visitor) => sum + (visitor.duration || 0), 0) / this.visitorHistory.length) : 0,
            topLocations: this.getTopLocations(),
            topDevices: this.getTopDevices(),
            topBrowsers: this.getTopBrowsers(),
            newVsReturning: this.getNewVsReturning(),
            recentVisitors: this.getRecentVisitors()
        };
        
        return analytics;
    }

    getTopLocations() {
        const locationCounts = {};
        this.visitorHistory.forEach(visitor => {
            locationCounts[visitor.location] = (locationCounts[visitor.location] || 0) + 1;
        });
        
        return Object.entries(locationCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([location, count]) => ({ location, count }));
    }

    getTopDevices() {
        const deviceCounts = {};
        this.visitorHistory.forEach(visitor => {
            deviceCounts[visitor.device] = (deviceCounts[visitor.device] || 0) + 1;
        });
        
        return Object.entries(deviceCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([device, count]) => ({ device, count }));
    }

    getTopBrowsers() {
        const browserCounts = {};
        this.visitorHistory.forEach(visitor => {
            browserCounts[visitor.browser] = (browserCounts[visitor.browser] || 0) + 1;
        });
        
        return Object.entries(browserCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([browser, count]) => ({ browser, count }));
    }

    getNewVsReturning() {
        const newVisitors = this.visitorHistory.filter(v => v.isNew).length;
        const returningVisitors = this.visitorHistory.filter(v => !v.isNew).length;
        
        return {
            new: newVisitors,
            returning: returningVisitors,
            total: this.visitorHistory.length
        };
    }

    getRecentVisitors() {
        return this.currentVisitors
            .sort((a, b) => new Date(b.lastActivity) - new Date(a.lastActivity))
            .slice(0, 10)
            .map(visitor => ({
                id: visitor.id,
                location: visitor.location,
                device: visitor.device,
                browser: visitor.browser,
                ipAddress: visitor.ipAddress,
                entryTime: visitor.entryTime,
                lastActivity: visitor.lastActivity,
                pageViews: visitor.pageViews,
                duration: visitor.duration,
                isNew: visitor.isNew
            }));
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
                    title: "Nime - Assistent Demo",
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
        editBtn.addEventListener('click', () => this.editVideo(video));
        deleteBtn.addEventListener('click', () => this.confirmDeleteVideo(video.id));

        return card;
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
        
        // Show activity notification
        activityFeed.addActivity({
            icon: 'fa-video',
            title: 'Video ditonton',
            message: `Seseorang menonton video "${video.title}"`,
            time: new Date().toISOString()
        });
    }

    editVideo(video) {
        // This would open an edit modal in a real application
        // For now, we'll just show a notification
        activityFeed.addActivity({
            icon: 'fa-edit',
            title: 'Edit video',
            message: `Admin mengedit video "${video.title}"`,
            time: new Date().toISOString()
        });
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
                time: new Date().toISOString()
            },
            {
                icon: 'fa-video',
                title: 'Video ditonton',
                message: 'Seseorang menonton video demo',
                time: new Date().toISOString()
            },
            {
                icon: 'fa-download',
                title: 'Unduhan baru',
                message: 'Seseorang mengunduh konten',
                time: new Date().toISOString()
            }
        ];
        
        initialActivities.forEach(activity => {
            this.addActivity(activity);
        });
    }

    addActivity(activity) {
        // Ensure activity has a timestamp
        if (!activity.time) {
            activity.time = new Date().toISOString();
        }
        
        this.activities.unshift(activity);
        if (this.activities.length > 10) {
            this.activities.pop();
        }
        this.renderActivities();
    }

    renderActivities() {
        const activityList = document.getElementById('activityList');
        if (!activityList) return;
        
        activityList.innerHTML = '';
        
        this.activities.forEach((activity, index) => {
            const activityItem = document.createElement('div');
            activityItem.className = 'activity-item';
            activityItem.setAttribute('data-aos', 'fade-up');
            activityItem.setAttribute('data-aos-delay', index * 100);
            
            const iconClass = activity.icon === 'fa-user' ? 'user' : 
                             activity.icon === 'fa-video' ? 'video' : 
                             activity.icon === 'fa-download' ? 'download' : 'tools';
            
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
                { icon: 'fa-mouse-pointer', title: 'Klik tombol', message: 'Seseorang mengklik tombol fitur' },
                { icon: 'fa-share', title: 'Bagikan konten', message: 'Seseorang membagikan konten' }
            ];
            
            const activity = activities[Math.floor(Math.random() * activities.length)];
            this.addActivity(activity);
        }, 8000 + Math.random() * 20000); // Random interval between 8-28 seconds
    }

    formatTime(date) {
        const now = new Date();
        const diff = Math.floor((now - date) / 1000);
        
        if (diff < 60) {
            return 'Baru saja';
        } else if (diff < 3600) {
            return `${Math.floor(diff / 60)} menit yang lalu`;
        } else {
            return `${Math.floor(diff / 3600)} jam yang lalu`;
        }
    }

    addNotification(title, message, icon) {
        const notificationContainer = document.getElementById('notificationContainer');
        if (!notificationContainer) return;
        
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
                if (notificationContainer.contains(notification)) {
                    notificationContainer.removeChild(notification);
                }
            }, 500);
        }, 5000);
    }
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

    window.addEventListener('scroll', checkAndAnimate);
    checkAndAnimate(); // Check on initial load
}

// Initialize components
document.addEventListener('DOMContentLoaded', function() {
    const visitorTracker = new VisitorTracker();
    const activityFeed = new ActivityFeed();
    const videoDB = new VideoDatabase();
    
    // Show notification when page is loaded
    window.addEventListener('load', () => {
        activityFeed.addNotification('Selamat datang!', 'Terima kasih telah mengunjungi website Nime - Assisten', 'fa-heart');
    });
    
    // Animate stats on scroll
    animateStats();
    
    // Create visitor analytics dashboard
    createVisitorAnalytics(visitorTracker);
});

// Create visitor analytics dashboard
function createVisitorAnalytics(visitorTracker) {
    // Check if analytics dashboard already exists
    if (document.getElementById('visitorAnalytics')) return;
    
    // Create analytics dashboard button
    const analyticsButton = document.createElement('button');
    analyticsButton.id = 'analyticsButton';
    analyticsButton.className = 'analytics-button';
    analyticsButton.innerHTML = '<i class="fas fa-chart-line"></i>';
    analyticsButton.title = 'Analytics Dashboard';
    
    // Add button to body
    document.body.appendChild(analyticsButton);
    
    // Create analytics dashboard modal
    const analyticsModal = document.createElement('div');
    analyticsModal.id = 'visitorAnalytics';
    analyticsModal.className = 'analytics-modal';
    
    analyticsModal.innerHTML = `
        <div class="analytics-content">
            <div class="analytics-header">
                <h2>Visitor Analytics</h2>
                <button class="analytics-close"><i class="fas fa-times"></i></button>
            </div>
            <div class="analytics-body">
                <div class="analytics-summary">
                    <div class="analytics-card">
                        <div class="analytics-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="analytics-info">
                            <div class="analytics-number" id="totalVisitorsCount">0</div>
                            <div class="analytics-label">Total Visitors</div>
                        </div>
                    </div>
                    <div class="analytics-card">
                        <div class="analytics-icon">
                            <i class="fas fa-user-clock"></i>
                        </div>
                        <div class="analytics-info">
                            <div class="analytics-number" id="currentVisitorsCount">0</div>
                            <div class="analytics-label">Current Visitors</div>
                        </div>
                    </div>
                    <div class="analytics-card">
                        <div class="analytics-icon">
                            <i class="fas fa-eye"></i>
                        </div>
                        <div class="analytics-info">
                            <div class="analytics-number" id="totalPageViewsCount">0</div>
                            <div class="analytics-label">Page Views</div>
                        </div>
                    </div>
                    <div class="analytics-card">
                        <div class="analytics-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="analytics-info">
                            <div class="analytics-number" id="avgDurationCount">0</div>
                            <div class="analytics-label">Avg. Duration (s)</div>
                        </div>
                    </div>
                </div>
                <div class="analytics-details">
                    <div class="analytics-section">
                        <h3>Top Locations</h3>
                        <div class="analytics-list" id="topLocationsList"></div>
                    </div>
                    <div class="analytics-section">
                        <h3>Top Devices</h3>
                        <div class="analytics-list" id="topDevicesList"></div>
                    </div>
                    <div class="analytics-section">
                        <h3>Top Browsers</h3>
                        <div class="analytics-list" id="topBrowsersList"></div>
                    </div>
                    <div class="analytics-section">
                        <h3>New vs Returning</h3>
                        <div class="analytics-chart" id="newVsReturningChart"></div>
                    </div>
                </div>
                <div class="analytics-section full-width">
                    <h3>Recent Visitors</h3>
                    <div class="visitors-table-container">
                        <table class="visitors-table">
                            <thead>
                                <tr>
                                    <th>IP Address</th>
                                    <th>Location</th>
                                    <th>Device</th>
                                    <th>Browser</th>
                                    <th>Entry Time</th>
                                    <th>Duration</th>
                                    <th>Page Views</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody id="recentVisitorsTable">
                                <!-- Visitor rows will be added here -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(analyticsModal);
    
    // Add event listeners
    analyticsButton.addEventListener('click', () => {
        analyticsModal.classList.add('active');
        updateAnalyticsDashboard(visitorTracker);
    });
    
    analyticsModal.querySelector('.analytics-close').addEventListener('click', () => {
        analyticsModal.classList.remove('active');
    });
    
    analyticsModal.addEventListener('click', (e) => {
        if (e.target === analyticsModal) {
            analyticsModal.classList.remove('active');
        }
    });
    
    // Update analytics dashboard periodically
    setInterval(() => {
        if (analyticsModal.classList.contains('active')) {
            updateAnalyticsDashboard(visitorTracker);
        }
    }, 5000);
}

// Update analytics dashboard
function updateAnalyticsDashboard(visitorTracker) {
    const analytics = visitorTracker.getVisitorAnalytics();
    
    // Update summary cards
    document.getElementById('totalVisitorsCount').textContent = analytics.totalVisitors;
    document.getElementById('currentVisitorsCount').textContent = analytics.currentVisitors;
    document.getElementById('totalPageViewsCount').textContent = analytics.pageViews;
    document.getElementById('avgDurationCount').textContent = analytics.averageDuration;
    
    // Update top locations
    const topLocationsList = document.getElementById('topLocationsList');
    topLocationsList.innerHTML = '';
    analytics.topLocations.forEach(item => {
        const locationItem = document.createElement('div');
        locationItem.className = 'analytics-list-item';
        locationItem.innerHTML = `
            <div class="analytics-list-name">${item.location}</div>
            <div class="analytics-list-value">${item.count}</div>
        `;
        topLocationsList.appendChild(locationItem);
    });
    
    // Update top devices
    const topDevicesList = document.getElementById('topDevicesList');
    topDevicesList.innerHTML = '';
    analytics.topDevices.forEach(item => {
        const deviceItem = document.createElement('div');
        deviceItem.className = 'analytics-list-item';
        deviceItem.innerHTML = `
            <div class="analytics-list-name">${item.device}</div>
            <div class="analytics-list-value">${item.count}</div>
        `;
        topDevicesList.appendChild(deviceItem);
    });
    
    // Update top browsers
    const topBrowsersList = document.getElementById('topBrowsersList');
    topBrowsersList.innerHTML = '';
    analytics.topBrowsers.forEach(item => {
        const browserItem = document.createElement('div');
        browserItem.className = 'analytics-list-item';
        browserItem.innerHTML = `
            <div class="analytics-list-name">${item.browser}</div>
            <div class="analytics-list-value">${item.count}</div>
        `;
        topBrowsersList.appendChild(browserItem);
    });
    
    // Update new vs returning chart
    const newVsReturningChart = document.getElementById('newVsReturningChart');
    const newPercentage = analytics.newVsReturning.total > 0 ? 
        Math.round((analytics.newVsReturning.new / analytics.newVsReturning.total) * 100) : 0;
    const returningPercentage = 100 - newPercentage;
    
    newVsReturningChart.innerHTML = `
        <div class="chart-container">
            <div class="chart-bar">
                <div class="chart-segment new" style="width: ${newPercentage}%"></div>
                <div class="chart-segment returning" style="width: ${returningPercentage}%"></div>
            </div>
            <div class="chart-legend">
                <div class="legend-item">
                    <div class="legend-color new"></div>
                    <div class="legend-label">New: ${analytics.newVsReturning.new} (${newPercentage}%)</div>
                </div>
                <div class="legend-item">
                    <div class="legend-color returning"></div>
                    <div class="legend-label">Returning: ${analytics.newVsReturning.returning} (${returningPercentage}%)</div>
                </div>
            </div>
        </div>
    `;
    
    // Update recent visitors table
    const recentVisitorsTable = document.getElementById('recentVisitorsTable');
    recentVisitorsTable.innerHTML = '';
    
    analytics.recentVisitors.forEach(visitor => {
        const row = document.createElement('tr');
        
        // Calculate duration
        const entryTime = new Date(visitor.entryTime);
        const now = new Date();
        const duration = Math.floor((now - entryTime) / 1000); // in seconds
        
        // Format duration
        let formattedDuration = '';
        if (duration < 60) {
            formattedDuration = `${duration}s`;
        } else if (duration < 3600) {
            formattedDuration = `${Math.floor(duration / 60)}m ${duration % 60}s`;
        } else {
            formattedDuration = `${Math.floor(duration / 3600)}h ${Math.floor((duration % 3600) / 60)}m`;
        }
        
        // Format entry time
        const entryTimeFormatted = new Date(visitor.entryTime).toLocaleString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // Determine status
        const isActive = (now - new Date(visitor.lastActivity)) < 60000; // Active in last minute
        const statusClass = isActive ? 'active' : 'idle';
        const statusText = isActive ? 'Active' : 'Idle';
        
        row.innerHTML = `
            <td>${visitor.ipAddress}</td>
            <td>${visitor.location}</td>
            <td>${visitor.device}</td>
            <td>${visitor.browser}</td>
            <td>${entryTimeFormatted}</td>
            <td>${formattedDuration}</td>
            <td>${visitor.pageViews}</td>
            <td><span class="visitor-status ${statusClass}">${statusText}</span></td>
        `;
        
        recentVisitorsTable.appendChild(row);
    });
}