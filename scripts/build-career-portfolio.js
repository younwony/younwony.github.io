/**
 * Career Portfolio EJS -> HTML Build Script
 *
 * EJS 템플릿과 JSON 데이터를 결합하여 HTML 파일을 생성합니다.
 *
 * Usage: node scripts/build-career-portfolio.js
 */

const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const TEMPLATE_DIR = path.join(ROOT_DIR, 'templates', 'export');
const DATA_FILE = path.join(TEMPLATE_DIR, 'data', 'career-data.json');
const TEMPLATE_FILE = path.join(TEMPLATE_DIR, 'pdf', 'career-portfolio.ejs');
const OUTPUT_FILE = path.join(TEMPLATE_DIR, 'pdf', 'career-portfolio.html');

async function build() {
    console.log('Building career-portfolio.html...');
    console.log('');

    // 1. 데이터 로드
    console.log('1. Loading data from:', path.relative(ROOT_DIR, DATA_FILE));
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    console.log('   - Profile:', data.profile.name);
    console.log('   - Companies:', data.companies.length);
    console.log('');

    // 2. EJS 렌더링
    console.log('2. Rendering template:', path.relative(ROOT_DIR, TEMPLATE_FILE));
    const html = await ejs.renderFile(TEMPLATE_FILE, data, {
        root: TEMPLATE_DIR,
        views: [path.join(TEMPLATE_DIR, 'partials')]
    });
    console.log('   - Generated HTML length:', html.length, 'characters');
    console.log('');

    // 3. HTML 저장
    console.log('3. Writing output to:', path.relative(ROOT_DIR, OUTPUT_FILE));
    fs.writeFileSync(OUTPUT_FILE, html, 'utf8');
    console.log('');

    console.log('Build completed successfully!');
    console.log('');
    console.log('Next steps:');
    console.log('  - Preview: open templates/export/pdf/career-portfolio.html in browser');
    console.log('  - Generate PDF: node scripts/generate-pdf.js');
}

build().catch(err => {
    console.error('Build failed:', err);
    process.exit(1);
});
