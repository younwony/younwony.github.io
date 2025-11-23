/**
 * Portfolio Common UI Manager
 *
 * Modular and extensible architecture for managing:
 * - Theme (Dark/Light mode)
 * - Navigation (Home, Template Switcher)
 * - Actions (PDF Export)
 *
 * @author Yoon Wonhee
 * @version 2.0.0
 */

(function () {
    'use strict';

    // ===== CONFIGURATION =====
    const CONFIG = {
        theme: {
            storageKey: 'theme',
            defaultTheme: 'light',
            attribute: 'data-theme'
        },
        navigation: {
            homeUrl: '../../index.html',
            templates: [
                { name: '기본', file: 'default.html' },
                { name: '모던', file: 'modern.html' },
                { name: '기업형', file: 'corporate.html' }
            ]
        },
        selectors: {
            hideInlineElements: [
                '.home-btn',
                '.header-actions',
                '.contact-info a[href*="index.html"]',
                '.contact-grid .contact-item a[href*="index.html"]',
                '.sidebar-section a[href*="index.html"]'
            ]
        }
    };

    // ===== THEME MANAGER =====
    class ThemeManager {
        constructor(config) {
            this.storageKey = config.storageKey;
            this.defaultTheme = config.defaultTheme;
            this.attribute = config.attribute;
            this.currentTheme = this.loadTheme();
            this.observers = [];
        }

        loadTheme() {
            return localStorage.getItem(this.storageKey) || this.defaultTheme;
        }

        applyTheme(theme) {
            document.documentElement.setAttribute(this.attribute, theme);
            localStorage.setItem(this.storageKey, theme);
            this.currentTheme = theme;
            this.notifyObservers(theme);
        }

        toggleTheme() {
            const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            this.applyTheme(newTheme);
            return newTheme;
        }

        subscribe(callback) {
            this.observers.push(callback);
        }

        notifyObservers(theme) {
            this.observers.forEach(callback => callback(theme));
        }

        initialize() {
            this.applyTheme(this.currentTheme);
        }
    }

    // ===== UI COMPONENT BUILDER =====
    class ComponentBuilder {
        /**
         * Create a button element with specified properties
         */
        static createButton(config) {
            const button = document.createElement('button');
            if (config.className) button.className = config.className;
            if (config.id) button.id = config.id;
            if (config.ariaLabel) button.setAttribute('aria-label', config.ariaLabel);
            if (config.innerHTML) button.innerHTML = config.innerHTML;
            if (config.onClick) button.addEventListener('click', config.onClick);
            return button;
        }

        /**
         * Create a link element with specified properties
         */
        static createLink(config) {
            const link = document.createElement('a');
            if (config.href) link.href = config.href;
            if (config.className) link.className = config.className;
            if (config.id) link.id = config.id;
            if (config.innerHTML) link.innerHTML = config.innerHTML;
            if (config.target) link.target = config.target;
            return link;
        }

        /**
         * Create a container div
         */
        static createContainer(config) {
            const container = document.createElement('div');
            if (config.className) container.className = config.className;
            if (config.id) container.id = config.id;
            return container;
        }
    }

    // ===== NAVIGATION BUILDER =====
    class NavigationBuilder {
        constructor(config, themeManager) {
            this.config = config;
            this.themeManager = themeManager;
            this.currentPath = window.location.pathname;
            this.pageType = this.detectPageType();
            this.currentTemplate = this.getCurrentTemplate();
        }

        detectPageType() {
            if (this.currentPath.includes('/career/')) return 'career';
            if (this.currentPath.includes('/resume/')) return 'resume';
            return 'unknown';
        }

        getCurrentTemplate() {
            return this.currentPath.substring(this.currentPath.lastIndexOf('/') + 1);
        }

        /**
         * Build the top navigation bar
         */
        buildTopNavBar() {
            const navBar = ComponentBuilder.createContainer({
                id: 'top-nav-bar',
                className: 'top-nav-bar'
            });

            // Left section: Home button
            const leftSection = this.buildLeftSection();
            navBar.appendChild(leftSection);

            // Right section: Theme toggle + Template switcher
            const rightSection = this.buildRightSection();
            navBar.appendChild(rightSection);

            return navBar;
        }

        buildLeftSection() {
            const section = ComponentBuilder.createContainer({
                className: 'nav-section nav-left'
            });

            const homeBtn = ComponentBuilder.createLink({
                href: this.config.homeUrl,
                className: 'nav-btn home-link',
                innerHTML: '<i class="fas fa-home"></i><span>홈으로</span>'
            });

            section.appendChild(homeBtn);
            return section;
        }

        buildRightSection() {
            const section = ComponentBuilder.createContainer({
                className: 'nav-section nav-right'
            });

            // Theme toggle button
            const themeToggle = this.buildThemeToggle();
            section.appendChild(themeToggle);

            // Template switcher (only for resume/career pages)
            if (this.pageType !== 'unknown') {
                const templateSwitcher = this.buildTemplateSwitcher();
                section.appendChild(templateSwitcher);
            }

            return section;
        }

        buildThemeToggle() {
            const currentTheme = this.themeManager.currentTheme;
            const button = ComponentBuilder.createButton({
                className: 'nav-btn theme-toggle',
                ariaLabel: 'Toggle dark mode',
                innerHTML: this.getThemeIcon(currentTheme),
                onClick: () => {
                    const newTheme = this.themeManager.toggleTheme();
                }
            });

            // Subscribe to theme changes
            this.themeManager.subscribe(theme => {
                button.innerHTML = this.getThemeIcon(theme);
            });

            return button;
        }

        getThemeIcon(theme) {
            return theme === 'dark'
                ? '<i class="fas fa-sun"></i><span>라이트</span>'
                : '<i class="fas fa-moon"></i><span>다크</span>';
        }

        buildTemplateSwitcher() {
            const container = ComponentBuilder.createContainer({
                className: 'template-switcher'
            });

            // Template buttons
            this.config.templates.forEach(tmpl => {
                const btn = ComponentBuilder.createButton({
                    className: `switcher-btn${this.currentTemplate === tmpl.file ? ' active' : ''}`,
                    innerHTML: tmpl.name,
                    onClick: () => window.location.href = tmpl.file
                });
                container.appendChild(btn);
            });

            // Divider
            const divider = document.createElement('span');
            divider.className = 'switcher-divider';
            divider.textContent = '|';
            container.appendChild(divider);

            // Type switcher (Resume <-> Career)
            const typeSwitcher = this.buildTypeSwitcher();
            container.appendChild(typeSwitcher);

            return container;
        }

        buildTypeSwitcher() {
            const config = this.pageType === 'resume'
                ? {
                    innerHTML: '<i class="fas fa-briefcase"></i>경력기술서',
                    onClick: () => window.location.href = '../career/default.html'
                }
                : {
                    innerHTML: '<i class="fas fa-user"></i>이력서',
                    onClick: () => window.location.href = '../resume/default.html'
                };

            return ComponentBuilder.createButton({
                className: 'switcher-btn type-switcher',
                ...config
            });
        }

        /**
         * Build PDF export button
         */
        buildPdfButton() {
            return ComponentBuilder.createButton({
                className: 'pdf-btn no-print',
                innerHTML: '<i class="fas fa-file-pdf"></i><span>PDF 저장</span>',
                onClick: () => window.print()
            });
        }
    }

    // ===== STYLE INJECTOR =====
    class StyleInjector {
        static inject() {
            const style = document.createElement('style');
            style.innerHTML = this.getStyles();
            document.head.appendChild(style);
        }

        static getStyles() {
            return `
                /* ===== TOP NAVIGATION BAR ===== */
                .top-nav-bar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 60px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid #e0e0e0;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                    z-index: 10000;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 20px;
                    transition: all 0.3s ease;
                }

                .nav-section {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .nav-left {
                    flex: 0 0 auto;
                }

                .nav-right {
                    flex: 0 0 auto;
                    gap: 20px;
                }

                /* ===== NAVIGATION BUTTONS ===== */
                .nav-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    border-radius: 8px;
                    background: #f8f9fa;
                    border: 1px solid #e0e0e0;
                    color: #333;
                    font-weight: 600;
                    font-size: 0.9rem;
                    text-decoration: none;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-family: inherit;
                    white-space: nowrap;
                }

                .nav-btn:hover {
                    background: #e9ecef;
                    color: #4a6cf7;
                    transform: translateY(-1px);
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }

                .nav-btn i {
                    font-size: 1rem;
                }

                .nav-btn.theme-toggle {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: none;
                }

                .nav-btn.theme-toggle:hover {
                    background: linear-gradient(135deg, #5568d3 0%, #653a8b 100%);
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
                }

                /* ===== TEMPLATE SWITCHER ===== */
                .template-switcher {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 6px 12px;
                    background: #f8f9fa;
                    border-radius: 8px;
                    border: 1px solid #e0e0e0;
                }

                .switcher-btn {
                    padding: 6px 12px;
                    border-radius: 6px;
                    background: transparent;
                    border: none;
                    color: #555;
                    font-size: 0.85rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-family: inherit;
                    white-space: nowrap;
                }

                .switcher-btn:hover {
                    background: #e9ecef;
                    color: #333;
                }

                .switcher-btn.active {
                    background: #4a6cf7;
                    color: white;
                    font-weight: 600;
                }

                .switcher-btn.type-switcher {
                    background: #2c3e50;
                    color: white;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                }

                .switcher-btn.type-switcher:hover {
                    background: #1a252f;
                }

                .switcher-divider {
                    color: #ccc;
                    font-weight: 300;
                    margin: 0 4px;
                }

                /* ===== PDF BUTTON ===== */
                .pdf-btn {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 24px;
                    border-radius: 50px;
                    background: linear-gradient(135deg, #4a6cf7 0%, #764ba2 100%);
                    color: white;
                    font-weight: 600;
                    font-size: 0.95rem;
                    border: none;
                    cursor: pointer;
                    box-shadow: 0 4px 16px rgba(74, 108, 247, 0.4);
                    transition: all 0.3s ease;
                    z-index: 10000;
                }

                .pdf-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 6px 24px rgba(74, 108, 247, 0.5);
                }

                .pdf-btn i {
                    font-size: 1.1rem;
                }

                /* ===== BODY PADDING (for fixed nav bar) ===== */
                body {
                    padding-top: 60px;
                }

                /* ===== DARK MODE ===== */
                [data-theme="dark"] .top-nav-bar {
                    background: rgba(26, 26, 46, 0.95);
                    border-bottom-color: #3d4d68;
                }

                [data-theme="dark"] .nav-btn {
                    background: #2d3748;
                    color: #e0e0e0;
                    border-color: #3d4d68;
                }

                [data-theme="dark"] .nav-btn:hover {
                    background: #3d4d68;
                    color: #60a5fa;
                }

                [data-theme="dark"] .template-switcher {
                    background: #2d3748;
                    border-color: #3d4d68;
                }

                [data-theme="dark"] .switcher-btn {
                    color: #b0b0b0;
                }

                [data-theme="dark"] .switcher-btn:hover {
                    background: #3d4d68;
                    color: #e0e0e0;
                }

                [data-theme="dark"] .switcher-btn.active {
                    background: #60a5fa;
                    color: #0f0f23;
                }

                [data-theme="dark"] .switcher-divider {
                    color: #555;
                }

                [data-theme="dark"] .pdf-btn {
                    background: linear-gradient(135deg, #1a1a2e 0%, #2d3748 100%);
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
                }

                [data-theme="dark"] .pdf-btn:hover {
                    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.5);
                }

                /* ===== HIDE INLINE ELEMENTS ===== */
                ${CONFIG.selectors.hideInlineElements.map(s => s).join(',\n                ')} {
                    display: none !important;
                }

                /* ===== PRINT STYLES ===== */
                @media print {
                    .top-nav-bar,
                    .pdf-btn,
                    .no-print {
                        display: none !important;
                    }

                    body {
                        padding-top: 0;
                    }
                }

                /* ===== RESPONSIVE ===== */
                @media (max-width: 768px) {
                    .top-nav-bar {
                        height: auto;
                        flex-direction: column;
                        padding: 12px 15px;
                        gap: 12px;
                    }

                    .nav-section {
                        width: 100%;
                        justify-content: center;
                    }

                    .nav-right {
                        flex-direction: column;
                        gap: 10px;
                    }

                    .nav-btn span,
                    .pdf-btn span {
                        display: none;
                    }

                    .nav-btn {
                        padding: 10px 12px;
                    }

                    .template-switcher {
                        width: 100%;
                        justify-content: center;
                        flex-wrap: wrap;
                    }

                    .pdf-btn {
                        bottom: 20px;
                        right: 20px;
                        padding: 14px 18px;
                    }

                    body {
                        padding-top: 140px;
                    }
                }

                @media (max-width: 480px) {
                    .switcher-btn {
                        font-size: 0.8rem;
                        padding: 5px 10px;
                    }

                    .nav-btn {
                        font-size: 0.85rem;
                    }
                }
            `;
        }
    }

    // ===== MAIN APPLICATION =====
    class PortfolioApp {
        constructor() {
            this.themeManager = new ThemeManager(CONFIG.theme);
            this.navigationBuilder = null;
        }

        initialize() {
            // Apply theme before DOM ready (prevent flash)
            this.themeManager.initialize();

            // Build UI when DOM is ready
            document.addEventListener('DOMContentLoaded', () => {
                this.buildUI();
                this.injectStyles();
            });
        }

        buildUI() {
            this.navigationBuilder = new NavigationBuilder(CONFIG.navigation, this.themeManager);

            // Build and append top navigation bar
            const topNavBar = this.navigationBuilder.buildTopNavBar();
            document.body.insertBefore(topNavBar, document.body.firstChild);

            // Build and append PDF button
            const pdfButton = this.navigationBuilder.buildPdfButton();
            document.body.appendChild(pdfButton);
        }

        injectStyles() {
            StyleInjector.inject();
        }
    }

    // ===== INITIALIZE APPLICATION =====
    const app = new PortfolioApp();
    app.initialize();

})();
