/**
 * Blog Page JavaScript
 * CRUD functionality for blog posts with localStorage persistence
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        POSTS_PER_PAGE: 9,
        STORAGE_KEY: 'blog_posts_data',
        DATA_URL: 'assets/data/blog-posts.json'
    };

    // State
    let state = {
        posts: [],
        categories: [],
        currentCategory: 'all',
        currentPage: 1,
        searchQuery: '',
        sortBy: 'date-desc',
        viewMode: 'grid',
        editingPostId: null
    };

    // DOM Elements
    const elements = {
        postsContainer: document.getElementById('postsContainer'),
        categoryList: document.getElementById('categoryList'),
        tagCloud: document.getElementById('tagCloud'),
        pagination: document.getElementById('pagination'),
        searchInput: document.getElementById('searchInput'),
        searchBtn: document.getElementById('searchBtn'),
        sortSelect: document.getElementById('sortSelect'),
        currentCategory: document.getElementById('currentCategory'),
        totalPosts: document.getElementById('totalPosts'),
        totalCategories: document.getElementById('totalCategories'),
        allCount: document.getElementById('allCount'),
        viewBtns: document.querySelectorAll('.view-btn'),

        // Modal elements
        postModal: document.getElementById('postModal'),
        deleteModal: document.getElementById('deleteModal'),
        postForm: document.getElementById('postForm'),
        modalTitle: document.getElementById('modalTitle'),
        postId: document.getElementById('postId'),
        postTitle: document.getElementById('postTitle'),
        postCategory: document.getElementById('postCategory'),
        postSubcategory: document.getElementById('postSubcategory'),
        postSummary: document.getElementById('postSummary'),
        postDate: document.getElementById('postDate'),
        postUrl: document.getElementById('postUrl'),
        postTags: document.getElementById('postTags'),
        postSeries: document.getElementById('postSeries'),
        deletePostTitle: document.getElementById('deletePostTitle'),

        // Buttons
        addPostBtn: document.getElementById('addPostBtn'),
        modalClose: document.getElementById('modalClose'),
        cancelBtn: document.getElementById('cancelBtn'),
        deleteModalClose: document.getElementById('deleteModalClose'),
        deleteCancelBtn: document.getElementById('deleteCancelBtn'),
        deleteConfirmBtn: document.getElementById('deleteConfirmBtn'),

        // Toast
        toast: document.getElementById('toast'),
        toastMessage: document.getElementById('toastMessage')
    };

    // Initialize
    async function init() {
        await loadData();
        setupEventListeners();
        render();
    }

    // Load data from localStorage or JSON file
    async function loadData() {
        const storedData = localStorage.getItem(CONFIG.STORAGE_KEY);

        if (storedData) {
            const data = JSON.parse(storedData);
            state.posts = data.posts || [];
            state.categories = data.categories || [];
        } else {
            try {
                const response = await fetch(CONFIG.DATA_URL);
                const data = await response.json();
                state.posts = data.posts || [];
                state.categories = data.categories || [];
                saveData();
            } catch (error) {
                console.error('Error loading data:', error);
                state.posts = [];
                state.categories = getDefaultCategories();
            }
        }
    }

    // Save data to localStorage
    function saveData() {
        localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify({
            posts: state.posts,
            categories: state.categories
        }));
    }

    // Get default categories
    function getDefaultCategories() {
        return [
            { id: 'project', name: '프로젝트', icon: 'fa-rocket', color: '#4a6cf7' },
            { id: 'study', name: 'Study', icon: 'fa-book-open', color: '#10b981' },
            { id: 'live-study', name: 'Live-Study', icon: 'fa-graduation-cap', color: '#8b5cf6' },
            { id: 'algorithm', name: 'Algorithm', icon: 'fa-code', color: '#f59e0b' },
            { id: 'devops', name: 'DevOps', icon: 'fa-server', color: '#ef4444' },
            { id: 'etc', name: '기타', icon: 'fa-ellipsis-h', color: '#6b7280' }
        ];
    }

    // Setup event listeners
    function setupEventListeners() {
        // Search
        elements.searchBtn.addEventListener('click', handleSearch);
        elements.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });

        // Sort
        elements.sortSelect.addEventListener('change', handleSort);

        // View toggle
        elements.viewBtns.forEach(btn => {
            btn.addEventListener('click', () => handleViewChange(btn));
        });

        // Add post
        elements.addPostBtn.addEventListener('click', openAddModal);

        // Modal close
        elements.modalClose.addEventListener('click', closePostModal);
        elements.cancelBtn.addEventListener('click', closePostModal);
        elements.deleteModalClose.addEventListener('click', closeDeleteModal);
        elements.deleteCancelBtn.addEventListener('click', closeDeleteModal);

        // Form submit
        elements.postForm.addEventListener('submit', handleFormSubmit);

        // Delete confirm
        elements.deleteConfirmBtn.addEventListener('click', handleDeleteConfirm);

        // Close modal on outside click
        elements.postModal.addEventListener('click', (e) => {
            if (e.target === elements.postModal) closePostModal();
        });
        elements.deleteModal.addEventListener('click', (e) => {
            if (e.target === elements.deleteModal) closeDeleteModal();
        });
    }

    // Render all components
    function render() {
        renderCategories();
        renderTags();
        renderPosts();
        renderPagination();
        updateStats();
    }

    // Render categories
    function renderCategories() {
        const categoryCounts = {};
        state.posts.forEach(post => {
            categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
        });

        let html = `
            <li class="category-item ${state.currentCategory === 'all' ? 'active' : ''}" data-category="all">
                <span class="category-name">전체</span>
                <span class="category-count">${state.posts.length}</span>
            </li>
        `;

        state.categories.forEach(cat => {
            const count = categoryCounts[cat.id] || 0;
            html += `
                <li class="category-item ${state.currentCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
                    <span class="category-name"><i class="fas ${cat.icon}" style="color: ${cat.color}; margin-right: 8px;"></i>${cat.name}</span>
                    <span class="category-count">${count}</span>
                </li>
            `;
        });

        elements.categoryList.innerHTML = html;

        // Add click handlers
        document.querySelectorAll('.category-item').forEach(item => {
            item.addEventListener('click', () => {
                state.currentCategory = item.dataset.category;
                state.currentPage = 1;
                render();
            });
        });
    }

    // Render tags
    function renderTags() {
        const tagCounts = {};
        state.posts.forEach(post => {
            if (post.tags) {
                post.tags.forEach(tag => {
                    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
                });
            }
        });

        const sortedTags = Object.entries(tagCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 15);

        let html = '';
        sortedTags.forEach(([tag, count]) => {
            html += `<span class="tag" data-tag="${tag}">${tag} (${count})</span>`;
        });

        elements.tagCloud.innerHTML = html;

        // Add click handlers
        document.querySelectorAll('.tag').forEach(tagEl => {
            tagEl.addEventListener('click', () => {
                state.searchQuery = tagEl.dataset.tag;
                elements.searchInput.value = state.searchQuery;
                state.currentPage = 1;
                render();
            });
        });
    }

    // Get filtered and sorted posts
    function getFilteredPosts() {
        let filtered = [...state.posts];

        // Filter by category
        if (state.currentCategory !== 'all') {
            filtered = filtered.filter(post => post.category === state.currentCategory);
        }

        // Filter by search query
        if (state.searchQuery) {
            const query = state.searchQuery.toLowerCase();
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(query) ||
                post.summary.toLowerCase().includes(query) ||
                (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query))) ||
                (post.subcategory && post.subcategory.toLowerCase().includes(query))
            );
        }

        // Sort
        switch (state.sortBy) {
            case 'date-desc':
                filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'date-asc':
                filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'title-asc':
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'title-desc':
                filtered.sort((a, b) => b.title.localeCompare(a.title));
                break;
        }

        return filtered;
    }

    // Render posts
    function renderPosts() {
        const filtered = getFilteredPosts();
        const start = (state.currentPage - 1) * CONFIG.POSTS_PER_PAGE;
        const end = start + CONFIG.POSTS_PER_PAGE;
        const paginatedPosts = filtered.slice(start, end);

        // Update category title
        if (state.currentCategory === 'all') {
            elements.currentCategory.textContent = '전체 포스트';
        } else {
            const cat = state.categories.find(c => c.id === state.currentCategory);
            elements.currentCategory.textContent = cat ? cat.name : '포스트';
        }

        if (paginatedPosts.length === 0) {
            elements.postsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-file-alt"></i>
                    <h3>포스트가 없습니다</h3>
                    <p>${state.searchQuery ? '검색 결과가 없습니다. 다른 키워드로 검색해보세요.' : '새 포스트를 추가해보세요!'}</p>
                </div>
            `;
            return;
        }

        // Set view mode class
        elements.postsContainer.className = `posts-container ${state.viewMode === 'list' ? 'list-view' : ''}`;

        let html = '';
        paginatedPosts.forEach(post => {
            const category = state.categories.find(c => c.id === post.category);
            const categoryColor = category ? category.color : '#4a6cf7';
            const categoryName = category ? category.name : post.category;

            html += `
                <article class="post-card" style="--category-color: ${categoryColor}">
                    <span class="post-category" style="background: ${categoryColor}">${categoryName}</span>
                    <h3 class="post-title">
                        <a href="${post.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(post.title)}</a>
                    </h3>
                    <p class="post-summary">${escapeHtml(post.summary)}</p>
                    <div class="post-meta">
                        <span><i class="fas fa-calendar-alt"></i> ${formatDate(post.date)}</span>
                        ${post.subcategory ? `<span><i class="fas fa-folder"></i> ${escapeHtml(post.subcategory)}</span>` : ''}
                    </div>
                    ${post.tags && post.tags.length > 0 ? `
                        <div class="post-tags">
                            ${post.tags.slice(0, 4).map(tag => `<span class="post-tag">${escapeHtml(tag)}</span>`).join('')}
                        </div>
                    ` : ''}
                    <div class="post-actions">
                        <button class="btn-read" data-id="${post.id}" title="상세보기">
                            <i class="fas fa-book-open"></i> 읽기
                        </button>
                        <button class="btn-view" onclick="window.open('${post.url}', '_blank')" title="원본 블로그">
                            <i class="fas fa-external-link-alt"></i> 원본
                        </button>
                        <button class="btn-edit" data-id="${post.id}" title="수정">
                            <i class="fas fa-edit"></i> 수정
                        </button>
                        <button class="btn-delete" data-id="${post.id}" title="삭제">
                            <i class="fas fa-trash"></i> 삭제
                        </button>
                    </div>
                </article>
            `;
        });

        elements.postsContainer.innerHTML = html;

        // Add event listeners for read buttons
        document.querySelectorAll('.btn-read').forEach(btn => {
            btn.addEventListener('click', () => {
                window.location.href = `post.html?id=${btn.dataset.id}`;
            });
        });

        // Add event listeners for edit and delete buttons
        document.querySelectorAll('.btn-edit').forEach(btn => {
            btn.addEventListener('click', () => openEditModal(parseInt(btn.dataset.id)));
        });

        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', () => openDeleteModal(parseInt(btn.dataset.id)));
        });
    }

    // Render pagination
    function renderPagination() {
        const filtered = getFilteredPosts();
        const totalPages = Math.ceil(filtered.length / CONFIG.POSTS_PER_PAGE);

        if (totalPages <= 1) {
            elements.pagination.innerHTML = '';
            return;
        }

        let html = `
            <button ${state.currentPage === 1 ? 'disabled' : ''} data-page="${state.currentPage - 1}">
                <i class="fas fa-chevron-left"></i>
            </button>
        `;

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= state.currentPage - 2 && i <= state.currentPage + 2)
            ) {
                html += `
                    <button class="${i === state.currentPage ? 'active' : ''}" data-page="${i}">${i}</button>
                `;
            } else if (
                i === state.currentPage - 3 ||
                i === state.currentPage + 3
            ) {
                html += `<span>...</span>`;
            }
        }

        html += `
            <button ${state.currentPage === totalPages ? 'disabled' : ''} data-page="${state.currentPage + 1}">
                <i class="fas fa-chevron-right"></i>
            </button>
        `;

        elements.pagination.innerHTML = html;

        // Add click handlers
        document.querySelectorAll('.pagination button').forEach(btn => {
            btn.addEventListener('click', () => {
                if (!btn.disabled) {
                    state.currentPage = parseInt(btn.dataset.page);
                    renderPosts();
                    renderPagination();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    }

    // Update stats
    function updateStats() {
        elements.totalPosts.textContent = state.posts.length;
        elements.totalCategories.textContent = state.categories.length;
        elements.allCount.textContent = state.posts.length;
    }

    // Handle search
    function handleSearch() {
        state.searchQuery = elements.searchInput.value.trim();
        state.currentPage = 1;
        render();
    }

    // Handle sort
    function handleSort() {
        state.sortBy = elements.sortSelect.value;
        renderPosts();
    }

    // Handle view change
    function handleViewChange(btn) {
        elements.viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.viewMode = btn.dataset.view;
        renderPosts();
    }

    // Open add modal
    function openAddModal() {
        state.editingPostId = null;
        elements.modalTitle.innerHTML = '<i class="fas fa-plus"></i> 새 포스트 추가';
        elements.postForm.reset();
        elements.postId.value = '';
        elements.postDate.value = new Date().toISOString().split('T')[0];
        elements.postModal.classList.add('show');
    }

    // Open edit modal
    function openEditModal(id) {
        const post = state.posts.find(p => p.id === id);
        if (!post) return;

        state.editingPostId = id;
        elements.modalTitle.innerHTML = '<i class="fas fa-edit"></i> 포스트 수정';
        elements.postId.value = post.id;
        elements.postTitle.value = post.title;
        elements.postCategory.value = post.category;
        elements.postSubcategory.value = post.subcategory || '';
        elements.postSummary.value = post.summary;
        elements.postDate.value = post.date;
        elements.postUrl.value = post.url;
        elements.postTags.value = post.tags ? post.tags.join(', ') : '';
        elements.postSeries.value = post.series || '';
        elements.postModal.classList.add('show');
    }

    // Close post modal
    function closePostModal() {
        elements.postModal.classList.remove('show');
        state.editingPostId = null;
    }

    // Open delete modal
    function openDeleteModal(id) {
        const post = state.posts.find(p => p.id === id);
        if (!post) return;

        state.editingPostId = id;
        elements.deletePostTitle.textContent = post.title;
        elements.deleteModal.classList.add('show');
    }

    // Close delete modal
    function closeDeleteModal() {
        elements.deleteModal.classList.remove('show');
        state.editingPostId = null;
    }

    // Handle form submit
    function handleFormSubmit(e) {
        e.preventDefault();

        const postData = {
            title: elements.postTitle.value.trim(),
            category: elements.postCategory.value,
            subcategory: elements.postSubcategory.value.trim() || null,
            summary: elements.postSummary.value.trim(),
            date: elements.postDate.value,
            url: elements.postUrl.value.trim(),
            tags: elements.postTags.value.split(',').map(t => t.trim()).filter(t => t),
            series: elements.postSeries.value.trim() || null
        };

        if (state.editingPostId) {
            // Update existing post
            const index = state.posts.findIndex(p => p.id === state.editingPostId);
            if (index !== -1) {
                state.posts[index] = { ...state.posts[index], ...postData };
                showToast('포스트가 수정되었습니다.');
            }
        } else {
            // Add new post
            const newId = state.posts.length > 0 ? Math.max(...state.posts.map(p => p.id)) + 1 : 1;
            state.posts.push({ id: newId, ...postData });
            showToast('새 포스트가 추가되었습니다.');
        }

        saveData();
        closePostModal();
        render();
    }

    // Handle delete confirm
    function handleDeleteConfirm() {
        if (state.editingPostId) {
            state.posts = state.posts.filter(p => p.id !== state.editingPostId);
            saveData();
            closeDeleteModal();
            render();
            showToast('포스트가 삭제되었습니다.', true);
        }
    }

    // Show toast notification
    function showToast(message, isError = false) {
        elements.toastMessage.textContent = message;
        elements.toast.classList.toggle('error', isError);
        elements.toast.classList.add('show');

        setTimeout(() => {
            elements.toast.classList.remove('show');
        }, 3000);
    }

    // Utility: Escape HTML
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Utility: Format date
    function formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
