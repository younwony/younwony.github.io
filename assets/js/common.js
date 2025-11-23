/**
 * Common UI and Functionality for All Templates
 * - Dark Mode Toggle
 * - Template Switcher
 * - Home Button
 * - PDF Export Button
 */

(function () {
    'use strict';

    // ===== 1. DARK MODE =====
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply theme on page load (before DOM ready for no flash)
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // ===== 2. DOM READY: CREATE UI ELEMENTS =====
    document.addEventListener('DOMContentLoaded', function () {

        // 2-1. Create Dark Mode Toggle Button
        const darkModeToggle = document.createElement('button');
        darkModeToggle.className = 'dark-mode-toggle';
        darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
        darkModeToggle.innerHTML = currentTheme === 'dark'
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';

        darkModeToggle.addEventListener('click', function () {
            const theme = document.documentElement.getAttribute('data-theme');
            const newTheme = theme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            darkModeToggle.innerHTML = newTheme === 'dark'
                ? '<i class="fas fa-sun"></i>'
                : '<i class="fas fa-moon"></i>';
        });

        document.body.appendChild(darkModeToggle);

        // 2-2. Create PDF Export Button
        const pdfBtn = document.createElement('button');
        pdfBtn.className = 'pdf-btn no-print';
        pdfBtn.innerHTML = '<i class="fas fa-file-pdf"></i> Save as PDF';
        pdfBtn.onclick = function () {
            window.print();
        };
        document.body.appendChild(pdfBtn);

        // 2-3. Template Switcher & Home Button
        const path = window.location.pathname;
        let type = 'resume'; // default
        if (path.includes('/career/')) {
            type = 'career';
        }

        const filename = path.substring(path.lastIndexOf('/') + 1);

        // Create Home Button (Top Left)
        const homeBtn = document.createElement('a');
        homeBtn.href = '../../index.html';
        homeBtn.id = 'fixed-home-btn';
        homeBtn.innerHTML = '<i class="fas fa-home"></i> 홈으로';
        document.body.appendChild(homeBtn);

        // Create Switcher UI (Top Right)
        const switcherContainer = document.createElement('div');
        switcherContainer.id = 'template-switcher';

        const title = document.createElement('span');
        title.className = 'switcher-title';
        title.innerText = '템플릿: ';
        switcherContainer.appendChild(title);

        // Define templates
        const templates = [
            { name: '기본', file: 'default.html' },
            { name: '모던', file: 'modern.html' },
            { name: '기업형', file: 'corporate.html' }
        ];

        templates.forEach(tmpl => {
            const btn = document.createElement('button');
            btn.className = 'switcher-btn';
            btn.innerText = tmpl.name;

            if (filename === tmpl.file) {
                btn.classList.add('active');
            }

            btn.onclick = function () {
                window.location.href = tmpl.file;
            };

            switcherContainer.appendChild(btn);
        });

        // Add switch to other type (Resume <-> Career)
        const switchTypeBtn = document.createElement('button');
        switchTypeBtn.className = 'switcher-btn switch-type';

        if (type === 'resume') {
            switchTypeBtn.innerHTML = '<i class="fas fa-briefcase"></i> 경력기술서';
            switchTypeBtn.onclick = function () {
                window.location.href = '../career/default.html';
            };
        } else {
            switchTypeBtn.innerHTML = '<i class="fas fa-user"></i> 이력서';
            switchTypeBtn.onclick = function () {
                window.location.href = '../resume/default.html';
            };
        }
        switcherContainer.appendChild(switchTypeBtn);

        document.body.appendChild(switcherContainer);

        // 2-4. Inject Styles for All Common Elements
        const style = document.createElement('style');
        style.innerHTML = `
            /* ===== HOME BUTTON ===== */
            #fixed-home-btn {
                position: fixed;
                top: 20px;
                left: 20px;
                background: rgba(255, 255, 255, 0.95);
                padding: 10px 18px;
                border-radius: 50px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                z-index: 10000;
                text-decoration: none;
                color: #333;
                font-weight: 600;
                font-size: 0.9rem;
                display: flex;
                align-items: center;
                gap: 8px;
                border: 1px solid #e0e0e0;
                transition: all 0.3s ease;
                backdrop-filter: blur(10px);
            }
            #fixed-home-btn:hover {
                background: white;
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(0,0,0,0.15);
                color: #4a6cf7;
            }
            #fixed-home-btn i {
                font-size: 1rem;
            }

            /* ===== DARK MODE TOGGLE ===== */
            .dark-mode-toggle {
                position: fixed;
                bottom: 30px;
                left: 30px;
                width: 56px;
                height: 56px;
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

            /* ===== PDF BUTTON ===== */
            .pdf-btn {
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: #2c3e50;
                color: white;
                padding: 12px 24px;
                border-radius: 50px;
                cursor: pointer;
                box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
                z-index: 10000;
                font-weight: 600;
                border: none;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 0.9rem;
            }
            .pdf-btn:hover {
                transform: translateY(-3px);
                background: #1a252f;
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
            }
            .pdf-btn i {
                font-size: 1.1rem;
            }

            /* ===== TEMPLATE SWITCHER ===== */
            #template-switcher {
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(255, 255, 255, 0.95);
                padding: 12px 18px;
                border-radius: 50px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.12);
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 10px;
                border: 1px solid #e0e0e0;
                backdrop-filter: blur(10px);
                flex-wrap: wrap;
            }
            .switcher-title {
                font-size: 0.85rem;
                font-weight: 600;
                color: #555;
                white-space: nowrap;
            }
            .switcher-btn {
                background: #f1f5f9;
                border: none;
                padding: 7px 14px;
                border-radius: 20px;
                cursor: pointer;
                font-size: 0.8rem;
                color: #444;
                transition: all 0.2s;
                font-family: inherit;
                font-weight: 500;
                white-space: nowrap;
            }
            .switcher-btn:hover {
                background: #e2e8f0;
                color: #222;
                transform: translateY(-1px);
            }
            .switcher-btn.active {
                background: #4a6cf7;
                color: white;
                font-weight: 600;
            }
            .switcher-btn.switch-type {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                margin-left: 5px;
                padding-left: 12px;
                padding-right: 12px;
            }
            .switcher-btn.switch-type:hover {
                background: linear-gradient(135deg, #5568d3 0%, #653a8b 100%);
                transform: translateY(-1px);
            }
            .switcher-btn i {
                margin-right: 4px;
                font-size: 0.85rem;
            }

            /* ===== DARK MODE STYLES ===== */
            [data-theme="dark"] #fixed-home-btn {
                background: rgba(26, 26, 46, 0.95);
                color: #e0e0e0;
                border-color: #3d4d68;
            }
            [data-theme="dark"] #fixed-home-btn:hover {
                background: #1a1a2e;
                color: #60a5fa;
            }
            [data-theme="dark"] #template-switcher {
                background: rgba(26, 26, 46, 0.95);
                border-color: #3d4d68;
            }
            [data-theme="dark"] .switcher-title {
                color: #b0b0b0;
            }
            [data-theme="dark"] .switcher-btn {
                background: #2d3748;
                color: #d0d0d0;
            }
            [data-theme="dark"] .switcher-btn:hover {
                background: #3d4d68;
                color: #e0e0e0;
            }
            [data-theme="dark"] .switcher-btn.active {
                background: #60a5fa;
                color: #0f0f23;
            }
            [data-theme="dark"] .pdf-btn {
                background: #1a1a2e;
                color: #e0e0e0;
            }
            [data-theme="dark"] .pdf-btn:hover {
                background: #0d0d1f;
            }

            /* ===== HIDE INLINE ELEMENTS ===== */
            .home-btn,
            .header-actions,
            .contact-info a[href*="index.html"],
            .contact-grid .contact-item a[href*="index.html"],
            .sidebar-section a[href*="index.html"] {
                display: none !important;
            }

            /* ===== PRINT STYLES ===== */
            @media print {
                #template-switcher,
                #fixed-home-btn,
                .dark-mode-toggle,
                .pdf-btn,
                .no-print {
                    display: none !important;
                }
            }

            /* ===== RESPONSIVE ===== */
            @media (max-width: 768px) {
                #fixed-home-btn {
                    top: 15px;
                    left: 15px;
                    padding: 8px 14px;
                    font-size: 0.85rem;
                }

                #template-switcher {
                    top: 70px;
                    right: 15px;
                    left: 15px;
                    padding: 10px 12px;
                    justify-content: center;
                }

                .switcher-title {
                    width: 100%;
                    text-align: center;
                    margin-bottom: 5px;
                }

                .dark-mode-toggle {
                    bottom: 100px;
                    left: 20px;
                    width: 50px;
                    height: 50px;
                    font-size: 1.1rem;
                }

                .pdf-btn {
                    bottom: 20px;
                    right: 20px;
                    left: 20px;
                    justify-content: center;
                    padding: 12px 20px;
                }
            }
        `;
        document.head.appendChild(style);
    });
})();
