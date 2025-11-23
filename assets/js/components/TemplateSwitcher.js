/**
 * TemplateSwitcher Component
 * Allows switching between different resume/career templates.
 */
export class TemplateSwitcher {
    constructor() {
        this.element = document.createElement('div');
        this.templates = [
            { name: '기본', file: 'default.html' },
            { name: '모던', file: 'modern.html' },
            { name: '기업형', file: 'corporate.html' },
            { name: '미니멀', file: 'minimal.html' }
        ];
    }

    render() {
        this.element.className = 'template-switcher';
        this.element.id = 'template-switcher'; // Keep ID for CSS if needed

        const title = document.createElement('span');
        title.className = 'switcher-title';
        title.innerText = '템플릿: ';
        this.element.appendChild(title);

        const path = window.location.pathname;
        const filename = path.substring(path.lastIndexOf('/') + 1);

        // Determine current type (resume or career)
        const isCareer = path.includes('/career/');
        const currentType = isCareer ? 'career' : 'resume';

        // Template Buttons
        this.templates.forEach(tmpl => {
            const btn = document.createElement('button');
            btn.className = 'switcher-btn';
            btn.innerText = tmpl.name;

            if (filename === tmpl.file) {
                btn.classList.add('active');
            }

            btn.onclick = () => {
                window.location.href = tmpl.file;
            };

            this.element.appendChild(btn);
        });

        // Type Switch Button (Resume <-> Career)
        const switchTypeBtn = document.createElement('button');
        switchTypeBtn.className = 'switcher-btn switch-type';

        if (isCareer) {
            switchTypeBtn.innerHTML = '<i class="fas fa-user"></i> 이력서 보기';
            switchTypeBtn.onclick = () => {
                window.location.href = '../resume/default.html';
            };
        } else {
            switchTypeBtn.innerHTML = '<i class="fas fa-briefcase"></i> 경력기술서 보기';
            switchTypeBtn.onclick = () => {
                window.location.href = '../career/default.html';
            };
        }
        this.element.appendChild(switchTypeBtn);

        return this.element;
    }
}
