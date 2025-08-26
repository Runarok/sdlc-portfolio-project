// Main application initialization and event handling
document.addEventListener('DOMContentLoaded', init);

function init() {
    cacheElements();
    ThemeManager.initialize();
    setupEventListeners();
    handleUrlParams();
    APIManager.loadUserData();
    APIManager.loadRepositories();
    setupScrollEffects();
}

function cacheElements() {
    const ids = [
        'themeToggle', 'themeDropdown', 'userAvatar', 'repoCount', 'followerCount', 
        'followingCount', 'searchInput', 'clearSearch', 'languageFilter', 'sortFilter', 
        'orderFilter', 'repoGrid', 'loading', 'pagination', 'paginationInfo', 
        'pageNumbers', 'prevBtn', 'nextBtn', 'scrollTop'
    ];
    
    ids.forEach(id => {
        elements[id] = document.getElementById(id);
    });
    
    elements.viewBtns = document.querySelectorAll('.view-btn');
    elements.themeOptions = document.querySelectorAll('.theme-option');
}

function handleUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    
    if (page === 'about') {
        setTimeout(() => UIManager.scrollToSection('about-section'), 100);
    } else if (page === 'repo') {
        setTimeout(() => UIManager.scrollToSection('repo-section'), 100);
    }
}

function setupEventListeners() {
    // Theme toggle
    elements.themeToggle.addEventListener('click', (e) => {
        if (e.shiftKey) {
            e.preventDefault();
            ThemeManager.showDropdown();
        } else {
            ThemeManager.toggle();
        }
    });
    
    // Theme dropdown
    elements.themeDropdown.addEventListener('click', (e) => {
        const option = e.target.closest('.theme-option');
        if (option) ThemeManager.select(option.dataset.theme);
    });
    
    // Search
    let searchTimeout;
    elements.searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            state.currentPage = 1;
            UIManager.applyFilters();
        }, 300);
    });
    
    // Clear search
    elements.clearSearch.addEventListener('click', () => UIManager.clearSearch());
    
    // Filters
    [elements.languageFilter, elements.sortFilter, elements.orderFilter].forEach(filter => {
        filter.addEventListener('change', () => {
            state.currentPage = 1;
            UIManager.applyFilters();
        });
    });
    
    // View toggles
    elements.viewBtns.forEach(btn => {
        btn.addEventListener('click', () => UIManager.setView(btn.dataset.view));
    });
    
    // Pagination
    elements.prevBtn.addEventListener('click', () => {
        if (state.currentPage > 1) UIManager.goToPage(state.currentPage - 1);
    });
    
    elements.nextBtn.addEventListener('click', () => {
        if (state.currentPage < state.totalPages) UIManager.goToPage(state.currentPage + 1);
    });
    
    // Scroll to top
    elements.scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.target.matches('input, textarea, select')) return;
        
        switch (e.key.toLowerCase()) {
            case 'k':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    elements.searchInput.focus();
                }
                break;
            case 't':
                if (e.shiftKey) {
                    ThemeManager.showDropdown();
                } else {
                    ThemeManager.toggle();
                }
                break;
            case 'escape':
                ThemeManager.hideDropdown();
                break;
            case '/':
                e.preventDefault();
                elements.searchInput.focus();
                break;
        }
    });
    
    // Smooth scrolling for anchor links
    document.addEventListener('click', (e) => {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

function setupScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrollY = window.scrollY;
        
        // Show/hide scroll to top
        elements.scrollTop.style.display = scrollY > 300 ? 'flex' : 'none';
        
        // Navbar effect
        const nav = document.querySelector('.nav-glass');
        if (scrollY > 50) {
            nav.style.background = 'var(--glass-bg-strong)';
            nav.style.backdropFilter = 'blur(30px)';
        } else {
            nav.style.background = '';
            nav.style.backdropFilter = '';
        }
        
        // Parallax orbs
        document.querySelectorAll('.glass-orb').forEach((orb, index) => {
            const speed = 0.3 + (index * 0.1);
            orb.style.transform = `translateY(${scrollY * speed}px)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
}

// Error handling
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault();
});

window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Debug (remove in production)
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    window.debug = { state, elements, CONFIG, CacheManager, ThemeManager, APIManager, UIManager };
}
// Theme management
const ThemeManager = {
    initialize() {
        const saved = localStorage.getItem('github-theme');
        if (saved && CONFIG.themes.includes(saved)) {
            state.currentTheme = CONFIG.themes.indexOf(saved);
        }
        this.apply();
        this.updateIcon();
        this.updateDropdown();
    },

    apply() {
        document.body.className = CONFIG.themes[state.currentTheme];
        localStorage.setItem('github-theme', CONFIG.themes[state.currentTheme]);
    },

    updateIcon() {
        const icons = {
            'theme-dark': 'fas fa-moon',
            'theme-light': 'fas fa-sun',
            'theme-purple': 'fas fa-magic',
            'theme-ocean': 'fas fa-water',
            'theme-forest': 'fas fa-leaf'
        };
        
        const currentTheme = CONFIG.themes[state.currentTheme];
        elements.themeToggle.innerHTML = `<i class="${icons[currentTheme]}"></i>`;
    },

    updateDropdown() {
        elements.themeOptions.forEach(option => {
            const isActive = option.dataset.theme === CONFIG.themes[state.currentTheme];
            option.classList.toggle('active', isActive);
        });
    },

    toggle() {
        state.currentTheme = (state.currentTheme + 1) % CONFIG.themes.length;
        this.apply();
        this.updateIcon();
        this.updateDropdown();
    },

    select(themeName) {
        state.currentTheme = CONFIG.themes.indexOf(themeName);
        this.apply();
        this.updateIcon();
        this.updateDropdown();
        this.hideDropdown();
    },

    showDropdown() {
        elements.themeDropdown.classList.add('show');
        document.addEventListener('click', this.handleOutsideClick);
    },

    hideDropdown() {
        elements.themeDropdown.classList.remove('show');
        document.removeEventListener('click', this.handleOutsideClick);
    },

    handleOutsideClick(e) {
        if (!elements.themeDropdown.contains(e.target) && !elements.themeToggle.contains(e.target)) {
            ThemeManager.hideDropdown();
        }
    }
};
// UI management
const UIManager = {
    showLoading() {
        elements.loading.style.display = 'flex';
    },

    hideLoading() {
        elements.loading.style.display = 'none';
    },

    showError(message) {
        elements.repoGrid.innerHTML = `
            <div class="no-repos">
                <i class="fas fa-exclamation-triangle" style="color: var(--error);"></i>
                <h3>Oops! Something went wrong</h3>
                <p>${message}</p>
                <button onclick="location.reload()" class="about-btn" style="margin-top: 20px;">
                    <i class="fas fa-refresh"></i> Try Again
                </button>
            </div>
        `;
    },

    updateLanguageFilter() {
        const languages = new Set();
        state.allRepos.forEach(repo => {
            if (repo.language) languages.add(repo.language);
        });
        
        const currentValue = elements.languageFilter.value;
        elements.languageFilter.innerHTML = '<option value="">All Languages</option>';
        
        Array.from(languages).sort().forEach(language => {
            const option = document.createElement('option');
            option.value = language;
            option.textContent = language;
            elements.languageFilter.appendChild(option);
        });
        
        elements.languageFilter.value = currentValue;
    },

    applyFilters() {
        const searchTerm = elements.searchInput.value.toLowerCase().trim();
        const selectedLanguage = elements.languageFilter.value;
        const sortBy = elements.sortFilter.value;
        const order = elements.orderFilter.value;
        
        // Filter repositories
        state.filteredRepos = state.allRepos.filter(repo => {
            const matchesSearch = !searchTerm || 
                repo.name.toLowerCase().includes(searchTerm) || 
                (repo.description && repo.description.toLowerCase().includes(searchTerm)) ||
                (repo.topics && repo.topics.some(topic => topic.toLowerCase().includes(searchTerm)));
            
            const matchesLanguage = !selectedLanguage || repo.language === selectedLanguage;
            
            return matchesSearch && matchesLanguage;
        });
        
        // Sort repositories
        state.filteredRepos.sort((a, b) => {
            let comparison = 0;
            
            switch (sortBy) {
                case 'name':
                    comparison = a.name.localeCompare(b.name);
                    break;
                case 'stars':
                    comparison = b.stargazers_count - a.stargazers_count;
                    break;
                case 'created':
                    comparison = new Date(b.created_at) - new Date(a.created_at);
                    break;
                case 'updated':
                default:
                    comparison = new Date(b.updated_at) - new Date(a.updated_at);
                    break;
            }
            
            return order === 'asc' ? comparison : -comparison;
        });
        
        // Calculate pagination
        state.totalPages = Math.ceil(state.filteredRepos.length / CONFIG.reposPerPage);
        state.currentPage = Math.min(state.currentPage, state.totalPages || 1);
        
        // Display repositories
        this.displayRepositories();
        
        // Update pagination
        this.updatePagination();
        
        // Update clear search button
        elements.clearSearch.style.display = searchTerm ? 'block' : 'none';
    },

    displayRepositories() {
        if (state.filteredRepos.length === 0) {
            elements.repoGrid.innerHTML = `
                <div class="no-repos">
                    <i class="fas fa-search"></i>
                    <h3>No repositories found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
            return;
        }
        
        const startIndex = (state.currentPage - 1) * CONFIG.reposPerPage;
        const endIndex = startIndex + CONFIG.reposPerPage;
        const pageRepos = state.filteredRepos.slice(startIndex, endIndex);
        
        elements.repoGrid.innerHTML = pageRepos.map(this.createRepoCard).join('');
        elements.repoGrid.classList.toggle('list-view', state.currentView === 'list');
        
        // Add click events
        this.addRepoCardEvents();
    },

    createRepoCard(repo) {
        const description = repo.description || 'No description available';
        const languageColor = LANGUAGE_COLORS[repo.language] || '#6e7681';
        const updatedDate = UIManager.formatRelativeTime(repo.updated_at);
        
        // Create badges
        let badges = `<span class="repo-badge ${repo.private ? 'private' : 'public'}">${repo.private ? 'Private' : 'Public'}</span>`;
        
        // Create links - only GitHub link
        let links = `<a href="${repo.html_url}" target="_blank" class="repo-link" onclick="event.stopPropagation()">
            <i class="fab fa-github"></i> View Code
        </a>`;
        
        // Add homepage link if available
        if (repo.homepage) {
            links += `<a href="${repo.homepage}" target="_blank" class="repo-link" onclick="event.stopPropagation()">
                <i class="fas fa-globe"></i> Live Demo
            </a>`;
        }
        
        return `
            <div class="repo-card" data-url="${repo.html_url}">
                <div class="repo-header">
                    <h3 class="repo-title">
                        <i class="fas fa-code-branch"></i>
                        ${repo.name}
                    </h3>
                    <div class="repo-badges">${badges}</div>
                </div>
                
                <p class="repo-description">${description}</p>
                
                <div class="repo-links">${links}</div>
                
                <div class="repo-meta">
                    ${repo.language ? `
                        <span>
                            <span class="language-dot" style="background-color: ${languageColor}"></span>
                            ${repo.language}
                        </span>
                    ` : ''}
                    <span><i class="fas fa-star"></i> ${repo.stargazers_count.toLocaleString()}</span>
                    <span><i class="fas fa-code-branch"></i> ${repo.forks_count.toLocaleString()}</span>
                    <span class="repo-updated">Updated ${updatedDate}</span>
                </div>
            </div>
        `;
    },

    addRepoCardEvents() {
        document.querySelectorAll('.repo-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('a')) return;
                window.open(card.dataset.url, '_blank');
            });
        });
    },

    updatePagination() {
        if (state.totalPages <= 1) {
            elements.pagination.style.display = 'none';
            return;
        }
        
        elements.pagination.style.display = 'flex';
        
        // Update info
        const startItem = (state.currentPage - 1) * CONFIG.reposPerPage + 1;
        const endItem = Math.min(state.currentPage * CONFIG.reposPerPage, state.filteredRepos.length);
        elements.paginationInfo.textContent = `${startItem}-${endItem} of ${state.filteredRepos.length} repositories`;
        
        // Update buttons
        elements.prevBtn.disabled = state.currentPage === 1;
        elements.nextBtn.disabled = state.currentPage === state.totalPages;
        
        // Update page numbers
        this.updatePageNumbers();
    },

    updatePageNumbers() {
        const maxVisible = 5;
        let startPage = Math.max(1, state.currentPage - Math.floor(maxVisible / 2));
        let endPage = Math.min(state.totalPages, startPage + maxVisible - 1);
        
        if (endPage - startPage < maxVisible - 1) {
            startPage = Math.max(1, endPage - maxVisible + 1);
        }
        
        let html = '';
        
        // First page and ellipsis
        if (startPage > 1) {
            html += this.createPageNumber(1);
            if (startPage > 2) html += '<span class="page-number">...</span>';
        }
        
        // Page numbers
        for (let i = startPage; i <= endPage; i++) {
            html += this.createPageNumber(i);
        }
        
        // Last page and ellipsis
        if (endPage < state.totalPages) {
            if (endPage < state.totalPages - 1) html += '<span class="page-number">...</span>';
            html += this.createPageNumber(state.totalPages);
        }
        
        elements.pageNumbers.innerHTML = html;
        
        // Add click events
        elements.pageNumbers.querySelectorAll('.page-number[data-page]').forEach(btn => {
            btn.addEventListener('click', () => this.goToPage(parseInt(btn.dataset.page)));
        });
    },

    createPageNumber(pageNum) {
        const isActive = pageNum === state.currentPage;
        return `<span class="page-number ${isActive ? 'active' : ''}" data-page="${pageNum}">${pageNum}</span>`;
    },

    goToPage(page) {
        state.currentPage = page;
        this.displayRepositories();
        this.updatePagination();
        this.scrollToSection('repo-section');
    },

    formatRelativeTime(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);
        
        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60
        };
        
        for (const [unit, seconds] of Object.entries(intervals)) {
            const interval = Math.floor(diffInSeconds / seconds);
            if (interval >= 1) {
                return interval === 1 ? `1 ${unit} ago` : `${interval} ${unit}s ago`;
            }
        }
        
        return 'Just now';
    },

    clearSearch() {
        elements.searchInput.value = '';
        this.applyFilters();
        elements.searchInput.focus();
    },

    setView(view) {
        state.currentView = view;
        elements.viewBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === view);
        });
        this.displayRepositories();
    },

    scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
};
// API management
const APIManager = {
    // Load user data with caching
    async loadUserData() {
        try {
            // Check cache first
            const cached = CacheManager.get('github_user_data');
            if (cached) {
                this.updateUserStats(cached);
                await this.updateAvatar(cached);
                return;
            }

            const response = await fetch(`${CONFIG.apiBase}/users/${CONFIG.username}`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const userData = await response.json();
            
            // Cache the data
            CacheManager.set('github_user_data', userData);
            
            this.updateUserStats(userData);
            await this.updateAvatar(userData);
        } catch (error) {
            console.error('Error loading user data:', error);
            // Use fallback values
            this.updateUserStats({ public_repos: 0, followers: 0, following: 0 });
        }
    },

    updateUserStats(userData) {
        this.animateCounter(elements.repoCount, userData.public_repos || 0);
        this.animateCounter(elements.followerCount, userData.followers || 0);
        this.animateCounter(elements.followingCount, userData.following || 0);
    },

    async updateAvatar(userData) {
        if (userData.avatar_url) {
            try {
                // Cache the avatar image
                const cachedImage = await CacheManager.cacheImage(
                    userData.avatar_url, 
                    'github_user_avatar'
                );
                elements.userAvatar.src = cachedImage;
                elements.userAvatar.alt = userData.name || userData.login || 'Runarok Hrafn';
            } catch (error) {
                console.error('Error caching avatar:', error);
                // Fallback to original URL
                elements.userAvatar.src = userData.avatar_url;
            }
        }
    },

    animateCounter(element, target) {
        const duration = 2000;
        const start = performance.now();
        const startValue = 0;
        
        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(startValue + (target - startValue) * eased);
            
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    },

    // Load repositories with caching
    async loadRepositories() {
        if (state.isLoading) return;
        
        state.isLoading = true;
        UIManager.showLoading();
        
        try {
            // Check cache first
            const cached = CacheManager.get('github_repositories');
            if (cached) {
                state.allRepos = cached;
                this.processRepositories();
                return;
            }

            let allRepos = [];
            let page = 1;
            const maxPages = 10; // Prevent excessive API calls
            
            while (page <= maxPages) {
                const response = await fetch(
                    `${CONFIG.apiBase}/users/${CONFIG.username}/repos?per_page=100&page=${page}&sort=updated`
                );
                
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                
                const repos = await response.json();
                if (repos.length === 0) break;
                
                allRepos = [...allRepos, ...repos];
                if (repos.length < 100) break;
                page++;
            }
            
            // Cache the repositories
            CacheManager.set('github_repositories', allRepos);
            
            state.allRepos = allRepos;
            this.processRepositories();
            
        } catch (error) {
            console.error('Error loading repositories:', error);
            UIManager.showError('Failed to load repositories. Please try again later.');
        } finally {
            state.isLoading = false;
            UIManager.hideLoading();
        }
    },

    processRepositories() {
        // Update language filter
        UIManager.updateLanguageFilter();
        
        // Apply filters and display
        UIManager.applyFilters();
    }
};
// Cache management utilities
const CacheManager = {
    // Check if data is expired
    isExpired(timestamp) {
        return Date.now() - timestamp > CONFIG.cacheExpiry;
    },

    // Get cached data
    get(key) {
        try {
            const cached = localStorage.getItem(key);
            if (!cached) return null;
            
            const data = JSON.parse(cached);
            if (this.isExpired(data.timestamp)) {
                localStorage.removeItem(key);
                return null;
            }
            
            return data.value;
        } catch (error) {
            console.error('Cache get error:', error);
            return null;
        }
    },

    // Set cached data
    set(key, value) {
        try {
            const data = {
                value,
                timestamp: Date.now()
            };
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error('Cache set error:', error);
        }
    },

    // Clear specific cache
    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Cache remove error:', error);
        }
    },

    // Clear all cache
    clear() {
        try {
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.startsWith('github_')) {
                    localStorage.removeItem(key);
                }
            });
        } catch (error) {
            console.error('Cache clear error:', error);
        }
    },

    // Convert image to base64 and cache it
    async cacheImage(url, cacheKey) {
        try {
            const cached = this.get(cacheKey);
            if (cached) return cached;

            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const blob = await response.blob();
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64 = reader.result;
                    this.set(cacheKey, base64);
                    resolve(base64);
                };
                reader.onerror = () => resolve(url); // Fallback to original URL
                reader.readAsDataURL(blob);
            });
        } catch (error) {
            console.error('Image cache error:', error);
            return url; // Fallback to original URL
        }
    }
};

// Detect hard refresh and clear cache
window.addEventListener('beforeunload', (e) => {
    // Check if it's a hard refresh (Ctrl+Shift+R or Ctrl+F5)
    if (e.ctrlKey && e.shiftKey) {
        CacheManager.clear();
    }
});

// Also detect hard refresh on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if page was loaded with hard refresh
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        const entries = performance.getEntriesByType('navigation');
        if (entries.length > 0 && entries[0].type === 'reload') {
            // This might be a hard refresh, but we can't be 100% sure
            // We'll rely on the beforeunload event for more accurate detection
        }
    }
});
// Configuration
const CONFIG = {
    username: 'Runarok',
    apiBase: 'https://api.github.com',
    reposPerPage: 30,
    themes: ['theme-dark', 'theme-light', 'theme-purple', 'theme-ocean', 'theme-forest'],
    cacheExpiry: 24 * 60 * 60 * 1000 // 24 hours in milliseconds
};

// Language colors
const LANGUAGE_COLORS = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    'C#': '#239120',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Go: '#00ADD8',
    Rust: '#dea584',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
    Dart: '#00B4AB',
    HTML: '#e34c26',
    CSS: '#1572B6',
    Vue: '#4FC08D',
    React: '#61DAFB',
    Angular: '#DD0031',
    Shell: '#89e051',
    PowerShell: '#012456',
    Dockerfile: '#384d54'
};

// Global state
const state = {
    allRepos: [],
    filteredRepos: [],
    currentPage: 1,
    totalPages: 1,
    currentTheme: 0,
    currentView: 'grid',
    isLoading: false
};

// DOM elements cache
const elements = {};
