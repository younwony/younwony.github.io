import { HomeButton } from '../components/HomeButton.js';
import { ThemeToggle } from '../components/ThemeToggle.js';
import { PdfButton } from '../components/PdfButton.js';
import { TemplateSwitcher } from '../components/TemplateSwitcher.js';

/**
 * LayoutManager
 * Orchestrates the layout by placing components in their respective zones.
 */
export class LayoutManager {
    constructor() {
        this.zones = {
            topLeft: this.createZone('layout-zone-tl'),
            topRight: this.createZone('layout-zone-tr'),
            bottomLeft: this.createZone('layout-zone-bl'),
            bottomRight: this.createZone('layout-zone-br')
        };
    }

    createZone(className) {
        const zone = document.createElement('div');
        zone.className = `layout-zone ${className}`;
        document.body.appendChild(zone);
        return zone;
    }

    init() {
        const path = window.location.pathname;
        // Check if we are in the templates directory to determine if we need full layout
        // This is more robust than checking for index.html, especially with different URL structures
        const isTemplatePage = path.includes('/templates/');

        console.log('LayoutManager initialized', { path, isTemplatePage });

        // 1. Theme Toggle (Always present, Bottom Left)
        try {
            const themeToggle = new ThemeToggle();
            this.zones.bottomLeft.appendChild(themeToggle.render());
        } catch (e) {
            console.error('Failed to render ThemeToggle:', e);
        }

        if (isTemplatePage) {
            console.log('Rendering template components...');

            // 2. Home Button (Top Left)
            try {
                const homeButton = new HomeButton();
                this.zones.topLeft.appendChild(homeButton.render());
            } catch (e) {
                console.error('Failed to render HomeButton:', e);
            }

            // 3. Template Switcher (Top Right)
            try {
                const switcher = new TemplateSwitcher();
                this.zones.topRight.appendChild(switcher.render());
            } catch (e) {
                console.error('Failed to render TemplateSwitcher:', e);
            }

            // 4. PDF Button (Bottom Right)
            try {
                const pdfButton = new PdfButton();
                this.zones.bottomRight.appendChild(pdfButton.render());
            } catch (e) {
                console.error('Failed to render PdfButton:', e);
            }
        }
    }
}
