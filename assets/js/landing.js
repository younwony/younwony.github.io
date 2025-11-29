/**
 * Landing Page - Theme Manager
 *
 * Provides dark mode toggle functionality for the landing page.
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
            attribute: 'data-theme',
            themes: {
                DARK: 'dark',
                LIGHT: 'light'
            }
        },
        icons: {
            dark: '<i class="fas fa-sun"></i>',
            light: '<i class="fas fa-moon"></i>'
        },
        styles: {
            button: {
                size: {
                    desktop: 56,
                    mobile: 50
                },
                position: {
                    desktop: { top: 30, right: 30 },
                    mobile: { top: 20, right: 20 }
                }
            }
        }
    };

    // ===== THEME MANAGER =====
    class LandingThemeManager {
        constructor(config) {
            this.config = config;
            this.storageKey = config.theme.storageKey;
            this.attribute = config.theme.attribute;
            this.themes = config.theme.themes;
            this.currentTheme = this.loadTheme();
        }

        /**
         * Load theme from localStorage
         * @returns {string} Current theme
         */
        loadTheme() {
            try {
                return localStorage.getItem(this.storageKey) || this.config.theme.defaultTheme;
            } catch (error) {
                console.warn('Failed to load theme from localStorage:', error);
                return this.config.theme.defaultTheme;
            }
        }

        /**
         * Apply theme to document
         * @param {string} theme - Theme to apply
         */
        applyTheme(theme) {
            try {
                document.documentElement.setAttribute(this.attribute, theme);
                localStorage.setItem(this.storageKey, theme);
                this.currentTheme = theme;
            } catch (error) {
                console.error('Failed to apply theme:', error);
            }
        }

        /**
         * Toggle between light and dark theme
         * @returns {string} New theme
         */
        toggleTheme() {
            const newTheme = this.currentTheme === this.themes.DARK
                ? this.themes.LIGHT
                : this.themes.DARK;
            this.applyTheme(newTheme);
            return newTheme;
        }

        /**
         * Get icon for current theme
         * @param {string} theme - Theme name
         * @returns {string} HTML icon string
         */
        getIcon(theme) {
            return this.config.icons[theme] || this.config.icons.light;
        }

        /**
         * Initialize theme on page load
         */
        initialize() {
            this.applyTheme(this.currentTheme);
        }
    }

    // ===== UI BUILDER =====
    class ThemeToggleBuilder {
        constructor(themeManager, config) {
            this.themeManager = themeManager;
            this.config = config;
        }

        /**
         * Build theme toggle button
         * @returns {HTMLButtonElement} Toggle button element
         */
        buildToggleButton() {
            const button = document.createElement('button');
            button.className = 'dark-mode-toggle';
            button.setAttribute('aria-label', 'Toggle dark mode');
            button.innerHTML = this.themeManager.getIcon(this.themeManager.currentTheme);

            button.addEventListener('click', () => {
                const newTheme = this.themeManager.toggleTheme();
                button.innerHTML = this.themeManager.getIcon(newTheme);
            });

            return button;
        }

        /**
         * Inject CSS styles for toggle button
         */
        injectStyles() {
            const style = document.createElement('style');
            const { button } = this.config.styles;

            style.innerHTML = `
                .dark-mode-toggle {
                    position: fixed;
                    top: ${button.position.desktop.top}px;
                    right: ${button.position.desktop.right}px;
                    width: ${button.size.desktop}px;
                    height: ${button.size.desktop}px;
                    border-radius: 50%;
                    background: #4a6cf7;
                    color: white;
                    border: none;
                    font-size: 1.3rem;
                    cursor: pointer;
                    box-shadow: 0 4px 14px rgba(74, 108, 247, 0.4);
                    transition: all 0.3s ease;
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .dark-mode-toggle:hover {
                    transform: scale(1.1) rotate(15deg);
                    box-shadow: 0 6px 20px rgba(74, 108, 247, 0.5);
                }

                .dark-mode-toggle i {
                    pointer-events: none;
                }

                @media (max-width: 768px) {
                    .dark-mode-toggle {
                        top: ${button.position.mobile.top}px;
                        right: ${button.position.mobile.right}px;
                        width: ${button.size.mobile}px;
                        height: ${button.size.mobile}px;
                        font-size: 1.1rem;
                    }
                }
            `;

            document.head.appendChild(style);
        }
    }

    // ===== APPLICATION =====
    class LandingApp {
        constructor() {
            this.themeManager = new LandingThemeManager(CONFIG);
            this.uiBuilder = new ThemeToggleBuilder(this.themeManager, CONFIG);
        }

        /**
         * Initialize application
         */
        initialize() {
            // Apply theme before DOM ready (prevent flash)
            this.themeManager.initialize();

            // Build UI when DOM is ready
            document.addEventListener('DOMContentLoaded', () => {
                this.buildUI();
            });
        }

        /**
         * Build and inject UI elements
         */
        buildUI() {
            try {
                // Build and append toggle button
                const toggleButton = this.uiBuilder.buildToggleButton();
                document.body.appendChild(toggleButton);

                // Inject styles
                this.uiBuilder.injectStyles();
            } catch (error) {
                console.error('Failed to build UI:', error);
            }
        }
    }

    // ===== INITIALIZE APPLICATION =====
    const app = new LandingApp();
    app.initialize();

})();
