/**
 * Post Detail Page JavaScript
 * View and edit individual blog posts with Markdown support
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        STORAGE_KEY: 'blog_posts_data',
        DATA_URL: 'assets/data/blog-posts.json'
    };

    // State
    let state = {
        post: null,
        posts: [],
        categories: [],
        currentPostId: null
    };

    // DOM Elements
    const elements = {
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

    // Initialize
    async function init() {
        // Get post ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        state.currentPostId = parseInt(urlParams.get('id'));

        if (!state.currentPostId) {
            showError('포스트를 찾을 수 없습니다.');
            return;
        }

        await loadData();
        findPost();

        if (state.post) {
            renderPost();
            setupEventListeners();
            setupNavigation();
        } else {
            showError('포스트를 찾을 수 없습니다.');
        }
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
            } catch (error) {
                console.error('Error loading data:', error);
                state.posts = [];
                state.categories = [];
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

    // Find current post
    function findPost() {
        state.post = state.posts.find(p => p.id === state.currentPostId);
    }

    // Render post
    function renderPost() {
        const post = state.post;
        const category = state.categories.find(c => c.id === post.category);

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
            elements.postTags.innerHTML = post.tags.map(tag =>
                `<a href="blog.html?search=${encodeURIComponent(tag)}" class="tag">${escapeHtml(tag)}</a>`
            ).join('');
        }

        // Summary
        elements.postSummary.textContent = post.summary;

        // Original link
        elements.originalLink.href = post.url;

        // Content
        renderContent();
    }

    // Render content
    function renderContent() {
        const post = state.post;

        if (!post.content) {
            elements.postContent.innerHTML = `
                <div class="empty-content">
                    <i class="fas fa-file-alt"></i>
                    <h3>컨텐츠가 아직 없습니다</h3>
                    <p>원본 블로그에서 컨텐츠를 가져오거나 직접 작성해보세요.</p>
                    <button class="btn btn-primary" id="addContentBtn">
                        <i class="fas fa-plus"></i> 컨텐츠 작성
                    </button>
                </div>
            `;
            document.getElementById('addContentBtn')?.addEventListener('click', openEditModal);
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

    // Parse Markdown to HTML
    function parseMarkdown(markdown) {
        // Configure marked
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

    // Generate Table of Contents
    function generateTOC() {
        const headings = elements.postContent.querySelectorAll('h2, h3, h4');

        if (headings.length === 0) {
            elements.tocNav.innerHTML = '<p style="color: #888; font-size: 0.85rem;">목차가 없습니다.</p>';
            return;
        }

        let html = '';
        headings.forEach((heading, index) => {
            const id = `heading-${index}`;
            heading.id = id;

            const level = heading.tagName.toLowerCase();
            html += `<a href="#${id}" class="toc-${level}">${heading.textContent}</a>`;
        });

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

        // Highlight active TOC item on scroll
        setupTOCHighlight();
    }

    // Setup TOC highlight on scroll
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

    // Setup navigation between posts
    function setupNavigation() {
        const sortedPosts = [...state.posts].sort((a, b) => new Date(b.date) - new Date(a.date));
        const currentIndex = sortedPosts.findIndex(p => p.id === state.currentPostId);

        // Previous post (newer)
        if (currentIndex > 0) {
            const prevPost = sortedPosts[currentIndex - 1];
            elements.prevPost.href = `post.html?id=${prevPost.id}`;
            elements.prevPost.querySelector('.nav-title').textContent = truncate(prevPost.title, 30);
        } else {
            elements.prevPost.classList.add('disabled');
        }

        // Next post (older)
        if (currentIndex < sortedPosts.length - 1) {
            const nextPost = sortedPosts[currentIndex + 1];
            elements.nextPost.href = `post.html?id=${nextPost.id}`;
            elements.nextPost.querySelector('.nav-title').textContent = truncate(nextPost.title, 30);
        } else {
            elements.nextPost.classList.add('disabled');
        }
    }

    // Setup event listeners
    function setupEventListeners() {
        // Edit button
        elements.editPostBtn.addEventListener('click', openEditModal);

        // Modal close
        elements.editModalClose.addEventListener('click', closeEditModal);
        elements.editCancelBtn.addEventListener('click', closeEditModal);

        // Save button
        elements.editSaveBtn.addEventListener('click', saveContent);

        // Close modal on outside click
        elements.editModal.addEventListener('click', (e) => {
            if (e.target === elements.editModal) closeEditModal();
        });

        // Editor preview
        elements.contentEditor.addEventListener('input', updatePreview);

        // Toolbar buttons
        document.querySelectorAll('.toolbar-btn').forEach(btn => {
            btn.addEventListener('click', () => handleToolbarAction(btn.dataset.action));
        });

        // Keyboard shortcuts
        elements.contentEditor.addEventListener('keydown', handleEditorKeydown);
    }

    // Open edit modal
    function openEditModal() {
        elements.contentEditor.value = state.post.content || '';
        updatePreview();
        elements.editModal.classList.add('show');
        elements.contentEditor.focus();
    }

    // Close edit modal
    function closeEditModal() {
        elements.editModal.classList.remove('show');
    }

    // Update preview
    function updatePreview() {
        const markdown = elements.contentEditor.value;
        elements.contentPreview.innerHTML = parseMarkdown(markdown);
        elements.contentPreview.querySelectorAll('pre code').forEach(block => {
            hljs.highlightElement(block);
        });
    }

    // Save content
    function saveContent() {
        const content = elements.contentEditor.value;

        // Update post in state
        const index = state.posts.findIndex(p => p.id === state.currentPostId);
        if (index !== -1) {
            state.posts[index].content = content;
            state.post = state.posts[index];
            saveData();
            renderContent();
            closeEditModal();
            showToast('컨텐츠가 저장되었습니다.');
        }
    }

    // Handle toolbar action
    function handleToolbarAction(action) {
        const editor = elements.contentEditor;
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const text = editor.value;
        const selected = text.substring(start, end);

        let insert = '';
        let cursorOffset = 0;

        switch (action) {
            case 'bold':
                insert = `**${selected || '굵은 텍스트'}**`;
                cursorOffset = selected ? 0 : -2;
                break;
            case 'italic':
                insert = `*${selected || '기울임 텍스트'}*`;
                cursorOffset = selected ? 0 : -1;
                break;
            case 'code':
                insert = `\`${selected || '코드'}\``;
                cursorOffset = selected ? 0 : -1;
                break;
            case 'h2':
                insert = `\n## ${selected || '제목 2'}\n`;
                break;
            case 'h3':
                insert = `\n### ${selected || '제목 3'}\n`;
                break;
            case 'h4':
                insert = `\n#### ${selected || '제목 4'}\n`;
                break;
            case 'ul':
                insert = `\n- ${selected || '목록 항목'}\n`;
                break;
            case 'ol':
                insert = `\n1. ${selected || '번호 목록'}\n`;
                break;
            case 'quote':
                insert = `\n> ${selected || '인용문'}\n`;
                break;
            case 'codeblock':
                insert = `\n\`\`\`java\n${selected || '// 코드를 입력하세요'}\n\`\`\`\n`;
                break;
            case 'link':
                insert = `[${selected || '링크 텍스트'}](URL)`;
                break;
            case 'image':
                insert = `![${selected || '이미지 설명'}](이미지URL)`;
                break;
            case 'table':
                insert = `\n| 헤더 1 | 헤더 2 | 헤더 3 |\n|--------|--------|--------|\n| 셀 1 | 셀 2 | 셀 3 |\n| 셀 4 | 셀 5 | 셀 6 |\n`;
                break;
        }

        editor.value = text.substring(0, start) + insert + text.substring(end);
        editor.focus();

        const newPos = start + insert.length + cursorOffset;
        editor.setSelectionRange(newPos, newPos);

        updatePreview();
    }

    // Handle editor keyboard shortcuts
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

    // Show error message
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

    // Utility: Truncate text
    function truncate(text, length) {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
