/**
 * Blog Utilities
 * Common utilities for blog and post pages
 */

const BlogUtils = (function() {
    'use strict';

    // Configuration
    const CONFIG = {
        POSTS_PER_PAGE: 9,
        STORAGE_KEY: 'blog_posts_data',
        DATA_URL: 'assets/data/blog-posts.json',
        TOP_TAGS_LIMIT: 15,
        TOAST_DURATION: 3000
    };

    // Default categories
    const DEFAULT_CATEGORIES = [
        { id: 'project', name: '프로젝트', icon: 'fa-rocket', color: '#4a6cf7' },
        { id: 'study', name: 'Study', icon: 'fa-book-open', color: '#10b981' },
        { id: 'live-study', name: 'Live-Study', icon: 'fa-graduation-cap', color: '#8b5cf6' },
        { id: 'algorithm', name: 'Algorithm', icon: 'fa-code', color: '#f59e0b' },
        { id: 'devops', name: 'DevOps', icon: 'fa-server', color: '#ef4444' },
        { id: 'etc', name: '기타', icon: 'fa-ellipsis-h', color: '#6b7280' }
    ];

    /**
     * Check if admin mode is enabled from URL parameter
     * @returns {boolean}
     */
    function isAdminMode() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('admin') === 'true';
    }

    /**
     * Get URL parameter value
     * @param {string} name - Parameter name
     * @returns {string|null}
     */
    function getUrlParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    /**
     * Load data from localStorage or JSON file
     * @returns {Promise<{posts: Array, categories: Array}>}
     */
    async function loadData() {
        const storedData = localStorage.getItem(CONFIG.STORAGE_KEY);

        if (storedData) {
            const data = JSON.parse(storedData);
            return {
                posts: data.posts || [],
                categories: data.categories || []
            };
        }

        try {
            const response = await fetch(CONFIG.DATA_URL);
            const data = await response.json();
            const result = {
                posts: data.posts || [],
                categories: data.categories || []
            };
            saveData(result.posts, result.categories);
            return result;
        } catch (error) {
            console.error('Error loading data:', error);
            return {
                posts: [],
                categories: [...DEFAULT_CATEGORIES]
            };
        }
    }

    /**
     * Save data to localStorage
     * @param {Array} posts - Posts array
     * @param {Array} categories - Categories array
     */
    function saveData(posts, categories) {
        localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify({
            posts: posts,
            categories: categories
        }));
    }

    /**
     * Escape HTML special characters
     * @param {string} text - Text to escape
     * @returns {string}
     */
    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Format date to Korean locale string
     * @param {string} dateStr - Date string (YYYY-MM-DD)
     * @returns {string}
     */
    function formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    /**
     * Truncate text to specified length
     * @param {string} text - Text to truncate
     * @param {number} length - Maximum length
     * @returns {string}
     */
    function truncate(text, length) {
        if (!text) return '';
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    }

    /**
     * Show toast notification
     * @param {HTMLElement} toastEl - Toast element
     * @param {HTMLElement} messageEl - Toast message element
     * @param {string} message - Message to display
     * @param {boolean} isError - Whether it's an error message
     */
    function showToast(toastEl, messageEl, message, isError = false) {
        if (!toastEl || !messageEl) return;

        messageEl.textContent = message;
        toastEl.classList.toggle('error', isError);
        toastEl.classList.add('show');

        setTimeout(() => {
            toastEl.classList.remove('show');
        }, CONFIG.TOAST_DURATION);
    }

    /**
     * Find category by ID
     * @param {Array} categories - Categories array
     * @param {string} categoryId - Category ID
     * @returns {Object|undefined}
     */
    function findCategory(categories, categoryId) {
        return categories.find(c => c.id === categoryId);
    }

    /**
     * Find post by ID
     * @param {Array} posts - Posts array
     * @param {number} postId - Post ID
     * @returns {Object|undefined}
     */
    function findPost(posts, postId) {
        return posts.find(p => p.id === postId);
    }

    /**
     * Generate new post ID
     * @param {Array} posts - Posts array
     * @returns {number}
     */
    function generatePostId(posts) {
        if (posts.length === 0) return 1;
        return Math.max(...posts.map(p => p.id)) + 1;
    }

    /**
     * Count posts by category
     * @param {Array} posts - Posts array
     * @returns {Object}
     */
    function countByCategory(posts) {
        const counts = {};
        posts.forEach(post => {
            counts[post.category] = (counts[post.category] || 0) + 1;
        });
        return counts;
    }

    /**
     * Count and sort tags
     * @param {Array} posts - Posts array
     * @param {number} limit - Maximum number of tags to return
     * @returns {Array<[string, number]>}
     */
    function countTags(posts, limit = CONFIG.TOP_TAGS_LIMIT) {
        const tagCounts = {};
        posts.forEach(post => {
            if (post.tags) {
                post.tags.forEach(tag => {
                    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
                });
            }
        });

        return Object.entries(tagCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, limit);
    }

    /**
     * Sort posts by specified criteria
     * @param {Array} posts - Posts array
     * @param {string} sortBy - Sort criteria (date-desc, date-asc, title-asc, title-desc)
     * @returns {Array}
     */
    function sortPosts(posts, sortBy) {
        const sorted = [...posts];
        switch (sortBy) {
            case 'date-desc':
                sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'date-asc':
                sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'title-asc':
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'title-desc':
                sorted.sort((a, b) => b.title.localeCompare(a.title));
                break;
        }
        return sorted;
    }

    /**
     * Filter posts by category and search query
     * @param {Array} posts - Posts array
     * @param {string} category - Category ID ('all' for all categories)
     * @param {string} searchQuery - Search query
     * @returns {Array}
     */
    function filterPosts(posts, category, searchQuery) {
        let filtered = [...posts];

        // Filter by category
        if (category && category !== 'all') {
            filtered = filtered.filter(post => post.category === category);
        }

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(query) ||
                post.summary.toLowerCase().includes(query) ||
                (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query))) ||
                (post.subcategory && post.subcategory.toLowerCase().includes(query))
            );
        }

        return filtered;
    }

    /**
     * Paginate array
     * @param {Array} items - Items array
     * @param {number} page - Current page (1-indexed)
     * @param {number} perPage - Items per page
     * @returns {{items: Array, totalPages: number}}
     */
    function paginate(items, page, perPage = CONFIG.POSTS_PER_PAGE) {
        const start = (page - 1) * perPage;
        const end = start + perPage;
        return {
            items: items.slice(start, end),
            totalPages: Math.ceil(items.length / perPage)
        };
    }

    /**
     * Setup admin badge in header
     * @param {boolean} isAdmin - Admin mode flag
     */
    function setupAdminBadge(isAdmin) {
        if (!isAdmin) return;

        const headerTitle = document.querySelector('.header-title h1');
        if (headerTitle && !headerTitle.querySelector('.admin-badge')) {
            headerTitle.innerHTML += ' <span class="admin-badge">Admin</span>';
        }
    }

    /**
     * Initialize on DOM ready
     * @param {Function} callback - Initialization callback
     */
    function onReady(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }

    // Public API
    return {
        CONFIG,
        DEFAULT_CATEGORIES,
        isAdminMode,
        getUrlParam,
        loadData,
        saveData,
        escapeHtml,
        formatDate,
        truncate,
        showToast,
        findCategory,
        findPost,
        generatePostId,
        countByCategory,
        countTags,
        sortPosts,
        filterPosts,
        paginate,
        setupAdminBadge,
        onReady
    };
})();

// Export for module systems (if available)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BlogUtils;
}
