// Dark Mode Toggle Feature
document.addEventListener('DOMContentLoaded', function () {
    // Create dark mode toggle button
    const darkModeBtn = document.createElement('button');
    darkModeBtn.id = 'dark-mode-toggle';
    darkModeBtn.className = 'dark-mode-btn no-print';
    darkModeBtn.setAttribute('aria-label', 'Toggle dark mode');
    darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';

    document.body.appendChild(darkModeBtn);

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Toggle dark mode on button click
    darkModeBtn.addEventListener('click', function () {
        document.documentElement.classList.toggle('dark-mode');

        let theme = 'light';
        if (document.documentElement.classList.contains('dark-mode')) {
            theme = 'dark';
            darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }

        // Save theme preference
        localStorage.setItem('theme', theme);
    });

    // Inject dark mode styles
    const style = document.createElement('style');
    style.innerHTML = `
        /* Dark Mode Toggle Button */
        .dark-mode-btn {
            position: fixed;
            bottom: 30px;
            left: 30px;
            background: rgba(255, 255, 255, 0.9);
            color: #333;
            border: 1px solid #eee;
            padding: 12px 16px;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 18px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 9999;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .dark-mode-btn:hover {
            background: white;
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        /* Dark Mode Styles */
        :root {
            --bg-color: #fff;
            --text-color: #222;
            --text-secondary: #444;
            --text-muted: #666;
            --border-color: #222;
            --border-light: #e9ecef;
            --card-bg: #f8f9fa;
            --card-bg-hover: #fff;
            --heading-color: #111;
            --link-color: #0066cc;
            --gradient-start: #4a6cf7;
            --gradient-end: #667eea;
            --pill-bg-start: #667eea;
            --pill-bg-end: #764ba2;
            --tech-badge-bg: #e8f0fe;
            --tech-badge-color: #1967d2;
            --shadow-light: rgba(0, 0, 0, 0.05);
            --shadow-medium: rgba(0, 0, 0, 0.08);
            --shadow-heavy: rgba(0, 0, 0, 0.15);
        }

        html.dark-mode {
            --bg-color: #1a1a2e;
            --text-color: #e0e0e0;
            --text-secondary: #c0c0c0;
            --text-muted: #a0a0a0;
            --border-color: #444;
            --border-light: #2d2d3a;
            --card-bg: #242438;
            --card-bg-hover: #2a2a3e;
            --heading-color: #f0f0f0;
            --link-color: #6b9fff;
            --gradient-start: #6b9fff;
            --gradient-end: #8fadff;
            --pill-bg-start: #5a7fb8;
            --pill-bg-end: #6d5b98;
            --tech-badge-bg: #2d3748;
            --tech-badge-color: #6b9fff;
            --shadow-light: rgba(0, 0, 0, 0.3);
            --shadow-medium: rgba(0, 0, 0, 0.4);
            --shadow-heavy: rgba(0, 0, 0, 0.5);
        }

        html.dark-mode .dark-mode-btn {
            background: rgba(42, 42, 62, 0.9);
            color: #f0f0f0;
            border-color: #444;
        }

        html.dark-mode .dark-mode-btn:hover {
            background: #2a2a3e;
        }

        /* Apply CSS variables to body and elements */
        body {
            background-color: var(--bg-color) !important;
            color: var(--text-color) !important;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        h1, h2, h3, h4, h5, h6,
        .company-name,
        .project-title,
        .project-label {
            color: var(--heading-color) !important;
        }

        .role,
        .company-period,
        .company-desc {
            color: var(--text-muted) !important;
        }

        .contact-info,
        .project-content,
        .project-content li {
            color: var(--text-secondary) !important;
        }

        h2 {
            border-bottom-color: var(--border-color) !important;
        }

        header {
            border-bottom-color: var(--border-color) !important;
        }

        .project-block {
            background: var(--card-bg) !important;
            box-shadow: 0 2px 4px var(--shadow-light) !important;
        }

        .project-block:hover {
            box-shadow: 0 4px 12px var(--shadow-medium) !important;
        }

        .project-item {
            background: var(--card-bg-hover) !important;
            box-shadow: 0 1px 3px var(--shadow-light) !important;
        }

        .project-item:hover {
            box-shadow: 0 4px 8px var(--shadow-medium) !important;
        }

        .project-title {
            border-bottom-color: var(--border-light) !important;
        }

        .project-label {
            background: linear-gradient(135deg, var(--card-bg) 0%, var(--border-light) 100%) !important;
            border-left-color: var(--gradient-start) !important;
        }

        .metric-pill {
            background: linear-gradient(135deg, var(--pill-bg-start) 0%, var(--pill-bg-end) 100%) !important;
        }

        .tech-badge {
            background: var(--tech-badge-bg) !important;
            color: var(--tech-badge-color) !important;
        }

        .contact-info a {
            color: var(--text-secondary) !important;
        }

        /* PDF Button in dark mode */
        html.dark-mode .pdf-btn {
            background: var(--gradient-start) !important;
            color: white !important;
        }

        html.dark-mode .pdf-btn:hover {
            background: var(--gradient-end) !important;
        }

        /* Template switcher in dark mode */
        html.dark-mode #template-switcher {
            background: rgba(42, 42, 62, 0.9) !important;
            border-color: #444 !important;
        }

        html.dark-mode .switcher-title {
            color: #c0c0c0 !important;
        }

        html.dark-mode .switcher-btn {
            background: #2d2d3a !important;
            color: #c0c0c0 !important;
        }

        html.dark-mode .switcher-btn:hover {
            background: #3a3a4e !important;
            color: #e0e0e0 !important;
        }

        html.dark-mode .switcher-btn.active {
            background: #6b9fff !important;
            color: white !important;
        }

        html.dark-mode #fixed-home-btn {
            background: rgba(42, 42, 62, 0.9) !important;
            color: #e0e0e0 !important;
            border-color: #444 !important;
        }

        html.dark-mode #fixed-home-btn:hover {
            background: #2a2a3e !important;
            color: #6b9fff !important;
        }

        @media print {
            .dark-mode-btn {
                display: none !important;
            }

            /* Force light mode for printing */
            html.dark-mode {
                --bg-color: #fff;
                --text-color: #222;
                --text-secondary: #444;
                --text-muted: #666;
                --border-color: #222;
                --border-light: #e9ecef;
                --card-bg: #f8f9fa;
                --card-bg-hover: #fff;
                --heading-color: #111;
            }
        }

        @media (max-width: 768px) {
            .dark-mode-btn {
                bottom: 80px;
                left: 15px;
                width: 45px;
                height: 45px;
                font-size: 16px;
            }
        }
    `;
    document.head.appendChild(style);
});
