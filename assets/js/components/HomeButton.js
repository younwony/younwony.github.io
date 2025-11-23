/**
 * HomeButton Component
 * Renders a button that links to the homepage.
 */
export class HomeButton {
    constructor() {
        this.element = document.createElement('a');
    }

    render() {
        this.element.href = '../../index.html'; // Default relative path, can be adjusted
        this.element.className = 'layout-btn home-btn';
        this.element.innerHTML = '<i class="fas fa-home"></i> <span>홈으로</span>';

        // Adjust path if we are in root
        if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
            this.element.href = '#';
            this.element.style.display = 'none'; // Hide on home page usually, or handle in LayoutManager
        } else {
            // Fix path for subdirectories
            // Assuming structure: /templates/type/file.html -> ../../index.html
            // If structure changes, this needs to be robust.
            // For now, hardcoded for templates/x/y.html
        }

        return this.element;
    }
}
