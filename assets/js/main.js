import { LayoutManager } from './layout/LayoutManager.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Main.js loaded, initializing LayoutManager...');
    const layoutManager = new LayoutManager();
    layoutManager.init();
});
