/**
 * PdfButton Component
 * Triggers the browser print dialog.
 */
export class PdfButton {
    constructor() {
        this.element = document.createElement('button');
    }

    render() {
        this.element.className = 'layout-btn pdf-btn no-print';
        this.element.innerHTML = '<i class="fas fa-file-pdf"></i> <span>PDF 저장</span>';

        this.element.addEventListener('click', () => {
            window.print();
        });

        return this.element;
    }
}
