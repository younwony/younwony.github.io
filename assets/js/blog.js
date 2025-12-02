/**
 * Blog Page JavaScript
 * CRUD functionality for blog posts with localStorage persistence
 * Supports admin mode (?admin=true) for management features
 */

(function() {
    'use strict';

    // Use shared utilities
    const { CONFIG, isAdminMode, loadData, saveData, escapeHtml, formatDate,
            findCategory, generatePostId, countByCategory, countTags,
            sortPosts, filterPosts, paginate, setupAdminBadge, onReady } = BlogUtils;

    // State
    const state = {
        posts: [],
        categories: [],
        currentCategory: 'all',
        currentPage: 1,
        searchQuery: '',
        sortBy: 'date-desc',
        viewMode: 'grid',
        editingPostId: null,
        isAdmin: isAdminMode()
    };

    // DOM Elements cache
    let elements = {};

    /**
     * Cache DOM elements
     */
    function cacheElements() {
        elements = {
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
    }

    /**
     * Initialize application
     */
    async function init() {
        cacheElements();
        const data = await loadData();
        state.posts = data.posts;
        state.categories = data.categories;

        setupAdminUI();
        setupEventListeners();
        render();
    }

    /**
     * Setup admin UI visibility
     */
    function setupAdminUI() {
        const adminSection = document.querySelector('.admin-section');
        if (adminSection) {
            adminSection.style.display = state.isAdmin ? 'block' : 'none';
        }
        setupAdminBadge(state.isAdmin);
    }

    /**
     * Setup event listeners
     */
    function setupEventListeners() {
        // Search
        elements.searchBtn?.addEventListener('click', handleSearch);
        elements.searchInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });

        // Sort
        elements.sortSelect?.addEventListener('change', handleSort);

        // View toggle
        elements.viewBtns.forEach(btn => {
            btn.addEventListener('click', () => handleViewChange(btn));
        });

        // Admin-only event listeners
        if (state.isAdmin) {
            setupAdminEventListeners();
        }
    }

    /**
     * Setup admin-only event listeners
     */
    function setupAdminEventListeners() {
        elements.addPostBtn?.addEventListener('click', openAddModal);
        elements.modalClose?.addEventListener('click', closePostModal);
        elements.cancelBtn?.addEventListener('click', closePostModal);
        elements.deleteModalClose?.addEventListener('click', closeDeleteModal);
        elements.deleteCancelBtn?.addEventListener('click', closeDeleteModal);
        elements.postForm?.addEventListener('submit', handleFormSubmit);
        elements.deleteConfirmBtn?.addEventListener('click', handleDeleteConfirm);

        // Close modal on outside click
        elements.postModal?.addEventListener('click', (e) => {
            if (e.target === elements.postModal) closePostModal();
        });
        elements.deleteModal?.addEventListener('click', (e) => {
            if (e.target === elements.deleteModal) closeDeleteModal();
        });
    }

    /**
     * Render all components
     */
    function render() {
        renderCategories();
        renderTags();
        renderPosts();
        renderPagination();
        updateStats();
    }

    /**
     * Render categories sidebar
     */
    function renderCategories() {
        const categoryCounts = countByCategory(state.posts);

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

    /**
     * Render tags cloud
     */
    function renderTags() {
        const sortedTags = countTags(state.posts);

        const html = sortedTags
            .map(([tag, count]) => `<span class="tag" data-tag="${tag}">${tag} (${count})</span>`)
            .join('');

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

    /**
     * Get filtered and sorted posts
     * @returns {Array}
     */
    function getFilteredPosts() {
        const filtered = filterPosts(state.posts, state.currentCategory, state.searchQuery);
        return sortPosts(filtered, state.sortBy);
    }

    /**
     * Render posts grid/list
     */
    function renderPosts() {
        const filtered = getFilteredPosts();
        const { items: paginatedPosts } = paginate(filtered, state.currentPage);

        // Update category title
        updateCategoryTitle();

        if (paginatedPosts.length === 0) {
            renderEmptyState();
            return;
        }

        // Set view mode class
        elements.postsContainer.className = `posts-container ${state.viewMode === 'list' ? 'list-view' : ''}`;

        elements.postsContainer.innerHTML = paginatedPosts.map(post => renderPostCard(post)).join('');

        // Add event listeners
        setupPostCardListeners();
    }

    /**
     * Update category title
     */
    function updateCategoryTitle() {
        if (state.currentCategory === 'all') {
            elements.currentCategory.textContent = '전체 포스트';
        } else {
            const cat = findCategory(state.categories, state.currentCategory);
            elements.currentCategory.textContent = cat ? cat.name : '포스트';
        }
    }

    /**
     * Render empty state
     */
    function renderEmptyState() {
        elements.postsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-file-alt"></i>
                <h3>포스트가 없습니다</h3>
                <p>${state.searchQuery ? '검색 결과가 없습니다. 다른 키워드로 검색해보세요.' : '새 포스트를 추가해보세요!'}</p>
            </div>
        `;
    }

    /**
     * Render single post card
     * @param {Object} post - Post data
     * @returns {string}
     */
    function renderPostCard(post) {
        const category = findCategory(state.categories, post.category);
        const categoryColor = category ? category.color : '#4a6cf7';
        const categoryName = category ? category.name : post.category;

        return `
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
                ${renderPostTags(post.tags)}
                ${renderPostActions(post)}
            </article>
        `;
    }

    /**
     * Render post tags
     * @param {Array} tags - Tags array
     * @returns {string}
     */
    function renderPostTags(tags) {
        if (!tags || tags.length === 0) return '';
        return `
            <div class="post-tags">
                ${tags.slice(0, 4).map(tag => `<span class="post-tag">${escapeHtml(tag)}</span>`).join('')}
            </div>
        `;
    }

    /**
     * Render post action buttons
     * @param {Object} post - Post data
     * @returns {string}
     */
    function renderPostActions(post) {
        const adminButtons = state.isAdmin ? `
            <button class="btn-edit" data-id="${post.id}" title="수정">
                <i class="fas fa-edit"></i> 수정
            </button>
            <button class="btn-delete" data-id="${post.id}" title="삭제">
                <i class="fas fa-trash"></i> 삭제
            </button>
        ` : '';

        return `
            <div class="post-actions">
                <button class="btn-read" data-id="${post.id}" title="상세보기">
                    <i class="fas fa-book-open"></i> 읽기
                </button>
                <button class="btn-view" onclick="window.open('${post.url}', '_blank')" title="원본 블로그">
                    <i class="fas fa-external-link-alt"></i> 원본
                </button>
                ${adminButtons}
            </div>
        `;
    }

    /**
     * Setup post card event listeners
     */
    function setupPostCardListeners() {
        // Read buttons
        document.querySelectorAll('.btn-read').forEach(btn => {
            btn.addEventListener('click', () => {
                const postId = btn.dataset.id;
                const adminParam = state.isAdmin ? '&admin=true' : '';
                window.location.href = `post.html?id=${postId}${adminParam}`;
            });
        });

        // Admin-only: Edit and delete buttons
        if (state.isAdmin) {
            document.querySelectorAll('.btn-edit').forEach(btn => {
                btn.addEventListener('click', () => openEditModal(parseInt(btn.dataset.id)));
            });

            document.querySelectorAll('.btn-delete').forEach(btn => {
                btn.addEventListener('click', () => openDeleteModal(parseInt(btn.dataset.id)));
            });
        }
    }

    /**
     * Render pagination
     */
    function renderPagination() {
        const filtered = getFilteredPosts();
        const { totalPages } = paginate(filtered, state.currentPage);

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
            if (i === 1 || i === totalPages || (i >= state.currentPage - 2 && i <= state.currentPage + 2)) {
                html += `<button class="${i === state.currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
            } else if (i === state.currentPage - 3 || i === state.currentPage + 3) {
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

    /**
     * Update statistics display
     */
    function updateStats() {
        elements.totalPosts.textContent = state.posts.length;
        elements.totalCategories.textContent = state.categories.length;
        elements.allCount.textContent = state.posts.length;
    }

    // Event Handlers

    /**
     * Handle search input and filter posts
     */
    function handleSearch() {
        state.searchQuery = elements.searchInput.value.trim();
        state.currentPage = 1;
        render();
    }

    /**
     * Handle sort select change
     */
    function handleSort() {
        state.sortBy = elements.sortSelect.value;
        renderPosts();
    }

    /**
     * Handle view mode change (grid/list)
     * @param {HTMLButtonElement} btn - Clicked view button
     */
    function handleViewChange(btn) {
        elements.viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.viewMode = btn.dataset.view;
        renderPosts();
    }

    // Modal Functions

    /**
     * Open modal for adding new post
     */
    function openAddModal() {
        state.editingPostId = null;
        elements.modalTitle.innerHTML = '<i class="fas fa-plus"></i> 새 포스트 추가';
        elements.postForm.reset();
        elements.postId.value = '';
        elements.postDate.value = new Date().toISOString().split('T')[0];
        elements.postModal.classList.add('show');
    }

    /**
     * Open modal for editing existing post
     * @param {number} id - Post ID to edit
     */
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

    /**
     * Close post add/edit modal
     */
    function closePostModal() {
        elements.postModal.classList.remove('show');
        state.editingPostId = null;
    }

    /**
     * Open delete confirmation modal
     * @param {number} id - Post ID to delete
     */
    function openDeleteModal(id) {
        const post = state.posts.find(p => p.id === id);
        if (!post) return;

        state.editingPostId = id;
        elements.deletePostTitle.textContent = post.title;
        elements.deleteModal.classList.add('show');
    }

    /**
     * Close delete confirmation modal
     */
    function closeDeleteModal() {
        elements.deleteModal.classList.remove('show');
        state.editingPostId = null;
    }

    /**
     * Handle post form submission (add/edit)
     * @param {Event} e - Form submit event
     */
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
            const index = state.posts.findIndex(p => p.id === state.editingPostId);
            if (index !== -1) {
                state.posts[index] = { ...state.posts[index], ...postData };
                showToast('포스트가 수정되었습니다.');
            }
        } else {
            const newId = generatePostId(state.posts);
            state.posts.push({ id: newId, ...postData });
            showToast('새 포스트가 추가되었습니다.');
        }

        saveData(state.posts, state.categories);
        closePostModal();
        render();
    }

    /**
     * Handle delete confirmation
     */
    function handleDeleteConfirm() {
        if (state.editingPostId) {
            state.posts = state.posts.filter(p => p.id !== state.editingPostId);
            saveData(state.posts, state.categories);
            closeDeleteModal();
            render();
            showToast('포스트가 삭제되었습니다.', true);
        }
    }

    /**
     * Show toast notification
     * @param {string} message - Message to display
     * @param {boolean} isError - Whether it's an error message
     */
    function showToast(message, isError = false) {
        BlogUtils.showToast(elements.toast, elements.toastMessage, message, isError);
    }

    // Initialize when DOM is ready
    onReady(init);
})();
