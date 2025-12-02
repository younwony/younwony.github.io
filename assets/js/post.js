/**
 * Post Detail Page JavaScript
 * View and edit individual blog posts with Markdown support
 * Supports admin mode (?admin=true) for editing features
 */

(function() {
    'use strict';

    // Use shared utilities
    const { isAdminMode, getUrlParam, loadData, saveData, escapeHtml, formatDate,
            truncate, findCategory, sortPosts, setupAdminBadge, onReady } = BlogUtils;

    // State
    const state = {
        post: null,
        posts: [],
        categories: [],
        currentPostId: null,
        isAdmin: isAdminMode()
    };

    // DOM Elements cache
    let elements = {};

    /**
     * Cache DOM elements
     */
    function cacheElements() {
        elements = {
            postTitle: document.getElementById('postTitle'),
            postCategory: document.getElementById('postCategory'),
            postDate: document.getElementById('postDate'),
            postSeries: document.getElementById('postSeries'),
            postTags: document.getElementById('postTags'),
            postSummary: document.getElementById('postSummary'),
            postContent: document.getElementById('postContent'),
            originalLink: document.getElementById('originalLink'),
            editPostBtn: document.getElementById('editPostBtn'),
            prevPost: document.getElementById('prevPost'),
            nextPost: document.getElementById('nextPost'),
            tocNav: document.getElementById('tocNav'),

            // Edit Modal
            editModal: document.getElementById('editModal'),
            editModalClose: document.getElementById('editModalClose'),
            editCancelBtn: document.getElementById('editCancelBtn'),
            editSaveBtn: document.getElementById('editSaveBtn'),
            contentEditor: document.getElementById('contentEditor'),
            contentPreview: document.getElementById('contentPreview'),

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

        state.currentPostId = parseInt(getUrlParam('id'));

        if (!state.currentPostId) {
            showError('포스트를 찾을 수 없습니다.');
            return;
        }

        const data = await loadData();
        state.posts = data.posts;
        state.categories = data.categories;
        state.post = state.posts.find(p => p.id === state.currentPostId);

        if (state.post) {
            setupAdminUI();
            renderPost();
            setupEventListeners();
            setupNavigation();
        } else {
            showError('포스트를 찾을 수 없습니다.');
        }
    }

    /**
     * Setup admin UI visibility
     */
    function setupAdminUI() {
        if (elements.editPostBtn) {
            elements.editPostBtn.style.display = state.isAdmin ? 'flex' : 'none';
        }
        setupAdminBadge(state.isAdmin);
    }

    /**
     * Render post content
     */
    function renderPost() {
        const post = state.post;
        const category = findCategory(state.categories, post.category);

        // Update page title
        document.title = `${post.title} - 윤원희 Tech Blog`;

        // Meta info
        elements.postCategory.textContent = category ? category.name : post.category;
        elements.postCategory.style.background = category ? category.color : '#4a6cf7';
        elements.postDate.innerHTML = `<i class="fas fa-calendar-alt"></i> ${formatDate(post.date)}`;

        if (post.series) {
            elements.postSeries.innerHTML = `<i class="fas fa-bookmark"></i> ${escapeHtml(post.series)}`;
        }

        // Title
        elements.postTitle.textContent = post.title;

        // Tags
        if (post.tags && post.tags.length > 0) {
            const adminParam = state.isAdmin ? '&admin=true' : '';
            elements.postTags.innerHTML = post.tags.map(tag =>
                `<a href="blog.html?search=${encodeURIComponent(tag)}${adminParam}" class="tag">${escapeHtml(tag)}</a>`
            ).join('');
        }

        // Summary
        elements.postSummary.textContent = post.summary;

        // Original link
        elements.originalLink.href = post.url;

        // Content
        renderContent();
    }

    /**
     * Render post content
     */
    function renderContent() {
        const post = state.post;

        if (!post.content) {
            renderEmptyContent();
            return;
        }

        // Parse and render Markdown
        const html = parseMarkdown(post.content);
        elements.postContent.innerHTML = html;

        // Highlight code blocks
        elements.postContent.querySelectorAll('pre code').forEach(block => {
            hljs.highlightElement(block);
        });

        // Generate TOC
        generateTOC();
    }

    /**
     * Render empty content state
     */
    function renderEmptyContent() {
        const post = state.post;
        elements.postContent.innerHTML = `
            <div class="empty-content">
                <i class="fas fa-file-alt"></i>
                <h3>컨텐츠가 아직 없습니다</h3>
                <p>${state.isAdmin ? '원본 블로그에서 컨텐츠를 가져오거나 직접 작성해보세요.' : '원본 블로그에서 컨텐츠를 확인해주세요.'}</p>
                ${state.isAdmin ? `
                <button class="btn btn-primary" id="addContentBtn">
                    <i class="fas fa-plus"></i> 컨텐츠 작성
                </button>
                ` : `
                <a href="${post.url}" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i> 원본 보기
                </a>
                `}
            </div>
        `;
        if (state.isAdmin) {
            document.getElementById('addContentBtn')?.addEventListener('click', openEditModal);
        }
    }

    /**
     * Parse Markdown to HTML
     * @param {string} markdown - Markdown content
     * @returns {string}
     */
    function parseMarkdown(markdown) {
        marked.setOptions({
            highlight: function(code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    return hljs.highlight(code, { language: lang }).value;
                }
                return hljs.highlightAuto(code).value;
            },
            breaks: true,
            gfm: true
        });

        return marked.parse(markdown);
    }

    /**
     * Generate Table of Contents
     */
    function generateTOC() {
        const headings = elements.postContent.querySelectorAll('h2, h3, h4');

        if (headings.length === 0) {
            elements.tocNav.innerHTML = '<p style="color: #888; font-size: 0.85rem;">목차가 없습니다.</p>';
            return;
        }

        const html = Array.from(headings).map((heading, index) => {
            const id = `heading-${index}`;
            heading.id = id;
            const level = heading.tagName.toLowerCase();
            return `<a href="#${id}" class="toc-${level}">${heading.textContent}</a>`;
        }).join('');

        elements.tocNav.innerHTML = html;

        // Add click handlers for smooth scrolling
        elements.tocNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').slice(1);
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        setupTOCHighlight();
    }

    /**
     * Setup TOC highlight on scroll
     */
    function setupTOCHighlight() {
        const headings = elements.postContent.querySelectorAll('h2, h3, h4');
        const tocLinks = elements.tocNav.querySelectorAll('a');

        if (headings.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    tocLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, { rootMargin: '-100px 0px -70% 0px' });

        headings.forEach(heading => observer.observe(heading));
    }

    /**
     * Setup navigation between posts
     */
    function setupNavigation() {
        const sortedPosts = sortPosts(state.posts, 'date-desc');
        const currentIndex = sortedPosts.findIndex(p => p.id === state.currentPostId);
        const adminParam = state.isAdmin ? '&admin=true' : '';

        // Previous post (newer)
        if (currentIndex > 0) {
            const prevPost = sortedPosts[currentIndex - 1];
            elements.prevPost.href = `post.html?id=${prevPost.id}${adminParam}`;
            elements.prevPost.querySelector('.nav-title').textContent = truncate(prevPost.title, 30);
        } else {
            elements.prevPost.classList.add('disabled');
        }

        // Next post (older)
        if (currentIndex < sortedPosts.length - 1) {
            const nextPost = sortedPosts[currentIndex + 1];
            elements.nextPost.href = `post.html?id=${nextPost.id}${adminParam}`;
            elements.nextPost.querySelector('.nav-title').textContent = truncate(nextPost.title, 30);
        } else {
            elements.nextPost.classList.add('disabled');
        }
    }

    /**
     * Setup event listeners
     */
    function setupEventListeners() {
        if (!state.isAdmin) return;

        elements.editPostBtn?.addEventListener('click', openEditModal);
        elements.editModalClose?.addEventListener('click', closeEditModal);
        elements.editCancelBtn?.addEventListener('click', closeEditModal);
        elements.editSaveBtn?.addEventListener('click', saveContent);

        elements.editModal?.addEventListener('click', (e) => {
            if (e.target === elements.editModal) closeEditModal();
        });

        elements.contentEditor?.addEventListener('input', updatePreview);
        elements.contentEditor?.addEventListener('keydown', handleEditorKeydown);

        document.querySelectorAll('.toolbar-btn').forEach(btn => {
            btn.addEventListener('click', () => handleToolbarAction(btn.dataset.action));
        });
    }

    // Modal Functions

    function openEditModal() {
        elements.contentEditor.value = state.post.content || '';
        updatePreview();
        elements.editModal.classList.add('show');
        elements.contentEditor.focus();
    }

    function closeEditModal() {
        elements.editModal.classList.remove('show');
    }

    function updatePreview() {
        const markdown = elements.contentEditor.value;
        elements.contentPreview.innerHTML = parseMarkdown(markdown);
        elements.contentPreview.querySelectorAll('pre code').forEach(block => {
            hljs.highlightElement(block);
        });
    }

    function saveContent() {
        const content = elements.contentEditor.value;

        const index = state.posts.findIndex(p => p.id === state.currentPostId);
        if (index !== -1) {
            state.posts[index].content = content;
            state.post = state.posts[index];
            saveData(state.posts, state.categories);
            renderContent();
            closeEditModal();
            showToast('컨텐츠가 저장되었습니다.');
        }
    }

    // Editor Functions

    /**
     * Handle toolbar action
     * @param {string} action - Toolbar action name
     */
    function handleToolbarAction(action) {
        const editor = elements.contentEditor;
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const text = editor.value;
        const selected = text.substring(start, end);

        const insertions = {
            bold: { text: `**${selected || '굵은 텍스트'}**`, offset: selected ? 0 : -2 },
            italic: { text: `*${selected || '기울임 텍스트'}*`, offset: selected ? 0 : -1 },
            code: { text: `\`${selected || '코드'}\``, offset: selected ? 0 : -1 },
            h2: { text: `\n## ${selected || '제목 2'}\n`, offset: 0 },
            h3: { text: `\n### ${selected || '제목 3'}\n`, offset: 0 },
            h4: { text: `\n#### ${selected || '제목 4'}\n`, offset: 0 },
            ul: { text: `\n- ${selected || '목록 항목'}\n`, offset: 0 },
            ol: { text: `\n1. ${selected || '번호 목록'}\n`, offset: 0 },
            quote: { text: `\n> ${selected || '인용문'}\n`, offset: 0 },
            codeblock: { text: `\n\`\`\`java\n${selected || '// 코드를 입력하세요'}\n\`\`\`\n`, offset: 0 },
            link: { text: `[${selected || '링크 텍스트'}](URL)`, offset: 0 },
            image: { text: `![${selected || '이미지 설명'}](이미지URL)`, offset: 0 },
            table: { text: `\n| 헤더 1 | 헤더 2 | 헤더 3 |\n|--------|--------|--------|\n| 셀 1 | 셀 2 | 셀 3 |\n| 셀 4 | 셀 5 | 셀 6 |\n`, offset: 0 }
        };

        const insertion = insertions[action];
        if (!insertion) return;

        editor.value = text.substring(0, start) + insertion.text + text.substring(end);
        editor.focus();

        const newPos = start + insertion.text.length + insertion.offset;
        editor.setSelectionRange(newPos, newPos);

        updatePreview();
    }

    /**
     * Handle editor keyboard shortcuts
     * @param {KeyboardEvent} e - Keyboard event
     */
    function handleEditorKeydown(e) {
        if (e.ctrlKey || e.metaKey) {
            switch (e.key.toLowerCase()) {
                case 'b':
                    e.preventDefault();
                    handleToolbarAction('bold');
                    break;
                case 'i':
                    e.preventDefault();
                    handleToolbarAction('italic');
                    break;
                case 's':
                    e.preventDefault();
                    saveContent();
                    break;
            }
        }

        // Tab key for indentation
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            e.target.value = e.target.value.substring(0, start) + '    ' + e.target.value.substring(end);
            e.target.selectionStart = e.target.selectionEnd = start + 4;
            updatePreview();
        }
    }

    // Utility Functions

    /**
     * Show error message
     * @param {string} message - Error message
     */
    function showError(message) {
        elements.postContent.innerHTML = `
            <div class="empty-content">
                <i class="fas fa-exclamation-circle" style="color: #dc2626;"></i>
                <h3>${message}</h3>
                <p>블로그 목록으로 돌아가세요.</p>
                <a href="blog.html" class="btn btn-primary">
                    <i class="fas fa-arrow-left"></i> 블로그로 돌아가기
                </a>
            </div>
        `;
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
