/**
 * ThemeToggle Component
 * Toggles between light and dark mode.
 */
export class ThemeToggle {
    constructor() {
        this.element = document.createElement('button');
        this.currentTheme = localStorage.getItem('theme') || 'light';
    }

    init() {
        // Apply theme immediately
        if (this.currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

    toggle() {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.currentTheme = newTheme;

        this.updateIcon();
    }

    updateIcon() {
        this.element.innerHTML = this.currentTheme === 'dark'
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
    }

    render() {
        this.init();

        this.element.className = 'layout-btn theme-toggle-btn';
        this.element.setAttribute('aria-label', 'Toggle dark mode');
        this.updateIcon();

        this.element.addEventListener('click', () => this.toggle());

        return this.element;
    }
}
