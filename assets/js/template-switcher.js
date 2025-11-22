document.addEventListener('DOMContentLoaded', function () {
    // 1. Determine current page type (resume or career) based on directory
    const path = window.location.pathname;
    let type = 'resume'; // default
    if (path.includes('/career/')) {
        type = 'career';
    }

    const filename = path.substring(path.lastIndexOf('/') + 1);

    // 2. Create Home Button (Top Left)
    const homeBtn = document.createElement('a');
    homeBtn.href = '../../index.html';
    homeBtn.id = 'fixed-home-btn';
    homeBtn.innerHTML = '<i class="fas fa-home"></i> 홈으로';
    document.body.appendChild(homeBtn);

    // 3. Create Switcher UI (Top Right)
    const switcherContainer = document.createElement('div');
    switcherContainer.id = 'template-switcher';

    const title = document.createElement('span');
    title.className = 'switcher-title';
    title.innerText = '템플릿 변경: ';
    switcherContainer.appendChild(title);

    // Define templates
    const templates = [
        { name: '기본', file: 'default.html' },
        { name: '모던', file: 'modern.html' },
        { name: '심플', file: 'minimal.html' },
        { name: '기업형', file: 'corporate.html' }
    ];

    templates.forEach(tmpl => {
        const btn = document.createElement('button');
        btn.className = 'switcher-btn';
        btn.innerText = tmpl.name;

        // Highlight active button
        if (filename === tmpl.file) {
            btn.classList.add('active');
        }

        btn.onclick = function () {
            // We are already in templates/resume/ or templates/career/
            // So we just need to switch the filename
            window.location.href = tmpl.file;
        };

        switcherContainer.appendChild(btn);
    });

    // Add switch to other type (Resume <-> Career)
    const switchTypeBtn = document.createElement('button');
    switchTypeBtn.className = 'switcher-btn';
    switchTypeBtn.style.marginLeft = '10px';
    switchTypeBtn.style.background = '#e0e7ff';
    switchTypeBtn.style.color = '#2563eb';

    if (type === 'resume') {
        switchTypeBtn.innerText = '경력기술서 보기';
        switchTypeBtn.onclick = function () {
            window.location.href = '../career/default.html';
        };
    } else {
        switchTypeBtn.innerText = '이력서 보기';
        switchTypeBtn.onclick = function () {
            window.location.href = '../resume/modern.html';
        };
    }
    switcherContainer.appendChild(switchTypeBtn);


    document.body.appendChild(switcherContainer);

    // 4. Inject Styles for Switcher and Home Button
    const style = document.createElement('style');
    style.innerHTML = `
        /* Home Button Style */
        #fixed-home-btn {
            position: fixed;
            top: 20px;
            left: 20px;
            background: rgba(255, 255, 255, 0.9);
            padding: 10px 18px;
            border-radius: 50px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 9999;
            text-decoration: none;
            color: #333;
            font-weight: 600;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1px solid #eee;
            transition: all 0.2s;
            backdrop-filter: blur(5px);
        }
        #fixed-home-btn:hover {
            background: white;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.15);
            color: #0056b3;
        }

        /* Switcher Style */
        #template-switcher {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.9);
            padding: 10px 15px;
            border-radius: 50px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1px solid #eee;
            backdrop-filter: blur(5px);
        }
        .switcher-title {
            font-size: 0.85rem;
            font-weight: 600;
            color: #555;
            margin-right: 5px;
        }
        .switcher-btn {
            background: #f1f5f9;
            border: none;
            padding: 6px 12px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.8rem;
            color: #444;
            transition: all 0.2s;
            font-family: inherit;
        }
        .switcher-btn:hover {
            background: #e2e8f0;
            color: #222;
        }
        .switcher-btn.active {
            background: #222;
            color: white;
            font-weight: 500;
        }

        /* Hide inline home buttons to center content focus */
        .home-btn, 
        .header-actions .home-btn,
        .contact-info a[href="index.html"],
        .contact-info a[href="../../index.html"],
        .contact-grid .contact-item a[href="index.html"],
        .sidebar-section a[href="index.html"] {
            display: none !important;
        }
        .separator {
            display: none;
        }

        @media print {
            #template-switcher, #fixed-home-btn {
                display: none !important;
            }
        }
        @media (max-width: 768px) {
            #fixed-home-btn {
                top: 15px;
                left: 15px;
                padding: 8px 12px;
                font-size: 0.8rem;
            }
            #template-switcher {
                top: auto;
                bottom: 20px;
                right: 50%;
                transform: translateX(50%);
                width: 90%;
                justify-content: center;
                flex-wrap: wrap;
            }
        }
    `;
    document.head.appendChild(style);
});
