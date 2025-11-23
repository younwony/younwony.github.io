/**
 * Landing Page - Dark Mode Only
 */
(function () {
    'use strict';

    // Apply theme on page load (before DOM ready for no flash)
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Create Dark Mode Toggle Button
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

        // Inject Style
        const style = document.createElement('style');
        style.innerHTML = `
            .dark-mode-toggle {
                position: fixed;
                top: 30px;
                right: 30px;
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

            @media (max-width: 768px) {
                .dark-mode-toggle {
                    top: 20px;
                    right: 20px;
                    width: 50px;
                    height: 50px;
                    font-size: 1.1rem;
                }
            }
        `;
        document.head.appendChild(style);
    });
})();
