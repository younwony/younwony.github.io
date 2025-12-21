/**
 * PDF + PPT 문서 생성 스크립트
 *
 * - PDF: Puppeteer (preferCSSPageSize로 페이지 레이아웃 유지)
 * - PPT: pptxgenjs
 */

const puppeteer = require('puppeteer');
const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.join(__dirname, '../output');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// PDF Generation
async function generatePDFs() {
    console.log('📄 PDF 생성 시작...');

    const browser = await puppeteer.launch({ headless: 'new' });

    const pdfConfigs = [
        {
            name: '윤원희_이력서',
            file: 'templates/export/pdf/resume-2page.html'
        },
        {
            name: '윤원희_경력기술서',
            file: 'templates/export/pdf/career-portfolio.html'
        }
    ];

    for (const config of pdfConfigs) {
        const page = await browser.newPage();
        const filePath = path.join(__dirname, '..', config.file);

        await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

        // Wait for fonts to load
        await page.evaluateHandle('document.fonts.ready');

        await page.pdf({
            path: path.join(OUTPUT_DIR, `${config.name}.pdf`),
            format: 'A4',
            printBackground: true,
            preferCSSPageSize: true,
            margin: { top: '0', right: '0', bottom: '0', left: '0' }
        });

        console.log(`  ✅ ${config.name}.pdf`);
        await page.close();
    }

    await browser.close();
    console.log('📄 PDF 생성 완료!\n');
}

// PPT Generation
function generatePPTs() {
    console.log('📊 PPT 생성 시작...');

    // 자기소개 PPT (5장)
    generateIntroPPT();

    // 경력기술서 PPT (12장)
    generateCareerPPT();

    console.log('📊 PPT 생성 완료!\n');
}

function generateIntroPPT() {
    const pptx = new pptxgen();
    pptx.author = '윤원희';
    pptx.title = '자기소개';
    pptx.subject = 'Backend Developer 7년차';

    // Slide 1: Cover
    let slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('윤원희', { x: 0.5, y: 2.0, w: '100%', h: 1, fontSize: 54, color: 'FFFFFF', bold: true, align: 'center' });
    slide.addText('Backend Developer · 7 Years', { x: 0.5, y: 2.8, w: '100%', h: 0.5, fontSize: 24, color: '4a6cf7', align: 'center' });
    slide.addText('기술과 소통으로 비즈니스 문제를 해결하는 백엔드 개발자', { x: 0.5, y: 3.5, w: '100%', h: 0.5, fontSize: 16, color: 'AAAAAA', align: 'center' });

    // Slide 2: About Me
    slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('About Me', { x: 0.5, y: 0.3, w: '100%', h: 0.6, fontSize: 32, color: '4a6cf7', bold: true });

    const aboutText = 'Java/Spring 기반 7년차 백엔드 개발자로서\n커머스 도메인(상품/주문/가격)의 복잡한\n비즈니스 로직을 전문적으로 다뤄왔습니다.';
    slide.addText(aboutText, { x: 0.5, y: 1.2, w: 4.5, h: 1.5, fontSize: 14, color: 'DDDDDD', lineSpacing: 24 });

    const highlights = [
        { label: 'Zero Ops', value: '운영 자동화 100%' },
        { label: '200만 건', value: '대용량 데이터 처리' },
        { label: '매출 10%↑', value: 'Dynamic Pricing' }
    ];

    highlights.forEach((h, i) => {
        slide.addShape(pptx.ShapeType.roundRect, { x: 5.5, y: 1.0 + i * 0.9, w: 4, h: 0.7, fill: { color: '2d4a6f' }, line: { color: '4a6cf7', width: 1 } });
        slide.addText(h.label, { x: 5.7, y: 1.1 + i * 0.9, w: 1.5, h: 0.5, fontSize: 14, color: '4a6cf7', bold: true });
        slide.addText(h.value, { x: 7.2, y: 1.1 + i * 0.9, w: 2, h: 0.5, fontSize: 12, color: 'FFFFFF' });
    });

    // Slide 3: Technical Skills
    slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('Technical Skills', { x: 0.5, y: 0.3, w: '100%', h: 0.6, fontSize: 32, color: '4a6cf7', bold: true });

    const skills = [
        { title: 'Backend', items: 'Java, Spring Boot, Spring Batch, JPA' },
        { title: 'Database', items: 'MySQL, Redis, Elasticsearch' },
        { title: 'Infra', items: 'AWS, Jenkins, GitHub Actions' },
        { title: 'Tools', items: 'Slack API, BigQuery, Claude Code' }
    ];

    skills.forEach((s, i) => {
        const x = 0.5 + (i % 2) * 4.8;
        const y = 1.2 + Math.floor(i / 2) * 1.8;
        slide.addShape(pptx.ShapeType.roundRect, { x, y, w: 4.5, h: 1.5, fill: { color: '2d4a6f' } });
        slide.addText(s.title, { x: x + 0.2, y: y + 0.2, w: 4, h: 0.4, fontSize: 16, color: '4a6cf7', bold: true });
        slide.addText(s.items, { x: x + 0.2, y: y + 0.7, w: 4, h: 0.6, fontSize: 12, color: 'DDDDDD' });
    });

    // Slide 4: Key Projects
    slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('Key Projects', { x: 0.5, y: 0.3, w: '100%', h: 0.6, fontSize: 32, color: '4a6cf7', bold: true });

    const projects = [
        { title: '인플루언서 플랫폼', metric: '100x', desc: '성능 개선 (10초→0.1초)' },
        { title: 'Dynamic Pricing', metric: '10%↑', desc: '매출/트래픽 상승' },
        { title: 'ChatOps 자동화', metric: '0%', desc: '수동 업무 (Zero Ops)' }
    ];

    projects.forEach((p, i) => {
        const x = 0.5 + i * 3.2;
        slide.addShape(pptx.ShapeType.roundRect, { x, y: 1.2, w: 3, h: 2.8, fill: { color: '2d4a6f' } });
        slide.addShape(pptx.ShapeType.rect, { x, y: 1.2, w: 3, h: 0.1, fill: { color: '4a6cf7' } });
        slide.addText(p.title, { x, y: 1.5, w: 3, h: 0.5, fontSize: 14, color: 'FFFFFF', bold: true, align: 'center' });
        slide.addText(p.metric, { x, y: 2.2, w: 3, h: 0.8, fontSize: 36, color: '4a6cf7', bold: true, align: 'center' });
        slide.addText(p.desc, { x, y: 3.2, w: 3, h: 0.5, fontSize: 11, color: 'AAAAAA', align: 'center' });
    });

    // Slide 5: Contact
    slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('Thank You', { x: 0.5, y: 1.8, w: '100%', h: 0.8, fontSize: 42, color: 'FFFFFF', bold: true, align: 'center' });
    slide.addText('함께 성장할 기회를 기대합니다', { x: 0.5, y: 2.6, w: '100%', h: 0.5, fontSize: 16, color: 'AAAAAA', align: 'center' });

    const contacts = [
        { icon: '📧', text: 'wony9324@naver.com' },
        { icon: '📱', text: '010-3555-2320' },
        { icon: '💻', text: 'github.com/younwony' }
    ];

    contacts.forEach((c, i) => {
        slide.addShape(pptx.ShapeType.roundRect, { x: 1.5 + i * 2.8, y: 3.5, w: 2.5, h: 0.6, fill: { color: '2d4a6f' }, line: { color: '4a6cf7', width: 1 } });
        slide.addText(`${c.icon} ${c.text}`, { x: 1.5 + i * 2.8, y: 3.55, w: 2.5, h: 0.5, fontSize: 11, color: 'FFFFFF', align: 'center' });
    });

    pptx.writeFile({ fileName: path.join(OUTPUT_DIR, '윤원희_자기소개.pptx') });
    console.log('  ✅ 윤원희_자기소개.pptx');
}

function generateCareerPPT() {
    const pptx = new pptxgen();
    pptx.author = '윤원희';
    pptx.title = '경력기술서';
    pptx.subject = 'Backend Developer 7년차 경력기술서';

    // Slide 1: Cover
    let slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('경력기술서', { x: 0.5, y: 1.8, w: '100%', h: 1, fontSize: 54, color: 'FFFFFF', bold: true, align: 'center' });
    slide.addText('윤원희 · Backend Developer · 7년차', { x: 0.5, y: 2.8, w: '100%', h: 0.5, fontSize: 24, color: '4a6cf7', align: 'center' });
    slide.addText('기술과 소통으로 비즈니스 문제를 해결하는 백엔드 개발자', { x: 0.5, y: 3.5, w: '100%', h: 0.5, fontSize: 16, color: 'AAAAAA', align: 'center' });

    // Slide 2: Career Overview
    slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('Career Overview', { x: 0.5, y: 0.3, w: '100%', h: 0.6, fontSize: 32, color: '4a6cf7', bold: true });

    const overviewBoxes = [
        { title: '경력 요약', items: ['구하다 · 3년 9개월 · Senior', '인터파크 · 5개월', '한국문헌정보기술 · 3년 2개월'] },
        { title: '핵심 성과', items: ['Zero Ops (운영 자동화 100%)', '200만 건 대용량 처리', '매출 10% 상승'] },
        { title: '기술 스택', items: ['Java, Spring Boot, Batch', 'MySQL, Redis, Elasticsearch', 'AWS, Jenkins'] },
        { title: '역량', items: ['커머스 도메인 전문', '유관 부서 협업 리딩', 'AI 기반 생산성 향상'] }
    ];

    overviewBoxes.forEach((box, i) => {
        const x = 0.3 + (i % 2) * 4.9;
        const y = 1.0 + Math.floor(i / 2) * 2.0;
        slide.addShape(pptx.ShapeType.roundRect, { x, y, w: 4.6, h: 1.8, fill: { color: '2d4a6f' } });
        slide.addText(box.title, { x: x + 0.2, y: y + 0.1, w: 4, h: 0.4, fontSize: 14, color: '4a6cf7', bold: true });
        box.items.forEach((item, j) => {
            slide.addText(`✓ ${item}`, { x: x + 0.2, y: y + 0.5 + j * 0.4, w: 4.2, h: 0.35, fontSize: 11, color: 'DDDDDD' });
        });
    });

    // Slide 3: Company Section - 구하다
    slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('(주)구하다', { x: 0.5, y: 2.0, w: '100%', h: 0.8, fontSize: 42, color: 'FFFFFF', bold: true, align: 'center' });
    slide.addText('2022.02 - 현재 · Backend Developer (Senior)', { x: 0.5, y: 2.8, w: '100%', h: 0.5, fontSize: 20, color: '4a6cf7', align: 'center' });

    // Slide 4-5: Project 1 - 인플루언서 플랫폼
    slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('인플루언서 데이터 플랫폼 (200만 건)', { x: 0.5, y: 0.3, w: '100%', h: 0.6, fontSize: 24, color: '4a6cf7', bold: true });

    addStarContent(slide, [
        { type: 'Situation', color: '6366f1', items: ['마케팅팀 수작업 의존 (엑셀 수기 입력)', '일 수십 명 수준, 대형 캠페인 불가', '200만 건 검색 시 10초 이상 타임아웃'] },
        { type: 'Task', color: '8b5cf6', items: ['수집 프로세스 100% 자동화', '200만 건 실시간 검색 시스템', '리포팅 자동화'] },
        { type: 'Action', color: '0ea5e9', items: ['멀티소스 파이프라인 (TikTok, Ensemble API)', 'RDB → Elasticsearch 전환', 'Redis Distributed Lock 적용'] },
        { type: 'Impact', color: 'f59e0b', items: ['대형 캠페인 진행 가능', '마케팅팀 고부가가치 업무 집중'] }
    ], pptx);

    // Slide 5: Project 1 Results
    slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('인플루언서 플랫폼 - 성과', { x: 0.5, y: 0.3, w: '100%', h: 0.6, fontSize: 24, color: '4a6cf7', bold: true, align: 'center' });

    const results1 = [
        { number: '100x', label: '검색 성능 개선', desc: '10초 → 0.1초' },
        { number: '20x', label: '데이터 풀 확대', desc: '10만 → 200만' },
        { number: 'Zero', label: '리포팅 수작업', desc: '완전 자동화' }
    ];

    results1.forEach((r, i) => {
        const x = 0.5 + i * 3.2;
        slide.addShape(pptx.ShapeType.roundRect, { x, y: 1.5, w: 3, h: 2.5, fill: { color: '2d4a6f' } });
        slide.addText(r.number, { x, y: 1.8, w: 3, h: 0.8, fontSize: 42, color: '4a6cf7', bold: true, align: 'center' });
        slide.addText(r.label, { x, y: 2.7, w: 3, h: 0.4, fontSize: 14, color: 'FFFFFF', align: 'center' });
        slide.addText(r.desc, { x, y: 3.2, w: 3, h: 0.4, fontSize: 12, color: 'AAAAAA', align: 'center' });
    });

    // Slide 6: Project 2 - Dynamic Pricing
    slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('Dynamic Pricing 시스템', { x: 0.5, y: 0.3, w: '100%', h: 0.6, fontSize: 24, color: '4a6cf7', bold: true });

    addStarContent(slide, [
        { type: 'Situation', color: '6366f1', items: ['네이버 쇼핑 최저가 진입 필수', '수동 대응 경쟁 속도 미달', 'API 일일 한도 25,000건 제약'] },
        { type: 'Task', color: '8b5cf6', items: ['최저가 방어 알고리즘 구현', '마진 4% 보장 안전장치'] },
        { type: 'Action', color: '0ea5e9', items: ['마케팅/MD팀 협의 가격 정책 설계', 'Spring Batch 트랜잭션 안정성', 'GA/BigQuery 성과 분석'] },
        { type: 'Result', color: '10b981', items: ['매출/트래픽 각각 10% 상승', 'MD팀 전략 업무 집중 가능'] }
    ], pptx);

    // Slide 7: Project 3 - 이미지 정합성
    slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('이미지 정합성 시스템', { x: 0.5, y: 0.3, w: '100%', h: 0.6, fontSize: 24, color: '4a6cf7', bold: true });

    addStarContent(slide, [
        { type: 'Situation', color: '6366f1', items: ['이미지 변경 시 URL 동일 유지', '기존 시스템 변경 감지 불가', '"상품 상이" 클레임 다수 발생'] },
        { type: 'Action', color: '0ea5e9', items: ['CS팀 협업 클레임 패턴 분석', 'MD5 해시 + ETag 이중 검증', 'Header 우선 비교 (비용 최적화)'] },
        { type: 'Result', color: '10b981', items: ['이미지 불일치 클레임 Zero', '네트워크 비용 80% 절감'] },
        { type: 'Impact', color: 'f59e0b', items: ['고객 신뢰도 회복', '구매 전환율 안정화'] }
    ], pptx);

    // Slide 8: Project 4 - ChatOps
    slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('ChatOps 운영 자동화 (Zero Ops)', { x: 0.5, y: 0.3, w: '100%', h: 0.6, fontSize: 24, color: '4a6cf7', bold: true });

    addStarContent(slide, [
        { type: 'Situation', color: '6366f1', items: ['소통 채널 파편화', '운영팀 업무 40% 단순 반복', '"어디로 요청해야 할지 모르겠다"'] },
        { type: 'Action', color: '0ea5e9', items: ['현업 인터뷰 → Pain Point 발굴', 'Slack Event API + Interactive', '버튼 클릭으로 DB 처리 완료'] },
        { type: 'Result', color: '10b981', items: ['수동 업무 40% → 0% (Zero Ops)', '채널 100% 통합'] },
        { type: 'Impact', color: 'f59e0b', items: ['운영팀 고부가가치 업무 집중', '휴먼 에러 방지'] }
    ], pptx);

    // Slide 9: Project 5 - AI 생산성
    slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('AI 기반 팀 생산성 혁신', { x: 0.5, y: 0.3, w: '100%', h: 0.6, fontSize: 24, color: '4a6cf7', bold: true });

    addStarContent(slide, [
        { type: 'Situation', color: '6366f1', items: ['코드 컨벤션/리뷰 프로세스 부재', '시니어 리소스 반복 업무 소모'] },
        { type: 'Action', color: '0ea5e9', items: ['PR 기반 코드 리뷰 문화 정착', 'Java/Spring 코딩 컨벤션 수립', 'Claude Code 반복 업무 자동화'] },
        { type: 'Result', color: '10b981', items: ['운영 업무 90% 단축 (1~2일→1~2시간)', '사내 운영 툴 5건+ 구축'] },
        { type: 'Impact', color: 'f59e0b', items: ['시니어 핵심 개발 집중', '팀 전반 생산성 향상'] }
    ], pptx);

    // Slide 10: 이전 경력
    slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('이전 경력', { x: 0.5, y: 0.3, w: '100%', h: 0.6, fontSize: 32, color: '4a6cf7', bold: true });

    const prevExp = [
        { company: '(주)인터파크', period: '2021.09 - 2022.01 (5개월)', items: ['Seller 어드민 성능 개선', '정산/주문 조회 80% 개선 (5초→1초)', '인덱스 튜닝, 쿼리 최적화'] },
        { company: '(주)한국문헌정보기술', period: '2018.06 - 2021.08 (3년 2개월)', items: ['Elasticsearch 검색 엔진 구축', '데이터 등록 속도 70% 단축', '2021년 사내 우수사원 선정'] }
    ];

    prevExp.forEach((exp, i) => {
        const x = 0.3 + i * 4.9;
        slide.addShape(pptx.ShapeType.roundRect, { x, y: 1.0, w: 4.6, h: 3.0, fill: { color: '2d4a6f' } });
        slide.addText(exp.company, { x: x + 0.2, y: 1.1, w: 4.2, h: 0.4, fontSize: 16, color: 'FFFFFF', bold: true });
        slide.addText(exp.period, { x: x + 0.2, y: 1.5, w: 4.2, h: 0.3, fontSize: 11, color: '4a6cf7' });
        exp.items.forEach((item, j) => {
            slide.addText(`• ${item}`, { x: x + 0.2, y: 2.0 + j * 0.4, w: 4.2, h: 0.35, fontSize: 12, color: 'DDDDDD' });
        });
    });

    // Slide 11: 학력 & 자격
    slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('학력 & 자격', { x: 0.5, y: 0.3, w: '100%', h: 0.6, fontSize: 32, color: '4a6cf7', bold: true });

    slide.addShape(pptx.ShapeType.roundRect, { x: 0.5, y: 1.2, w: 4.5, h: 2.0, fill: { color: '2d4a6f' } });
    slide.addText('🎓 학력', { x: 0.7, y: 1.3, w: 4, h: 0.4, fontSize: 16, color: '4a6cf7', bold: true });
    slide.addText('대전대학교', { x: 0.7, y: 1.8, w: 4, h: 0.35, fontSize: 14, color: 'FFFFFF' });
    slide.addText('컴퓨터공학 학사 (2011 - 2018)', { x: 0.7, y: 2.2, w: 4, h: 0.35, fontSize: 12, color: 'AAAAAA' });

    slide.addShape(pptx.ShapeType.roundRect, { x: 5.2, y: 1.2, w: 4.5, h: 2.0, fill: { color: '2d4a6f' } });
    slide.addText('📜 자격증', { x: 5.4, y: 1.3, w: 4, h: 0.4, fontSize: 16, color: '4a6cf7', bold: true });
    slide.addText('정보처리기사', { x: 5.4, y: 1.8, w: 4, h: 0.35, fontSize: 14, color: 'FFFFFF' });
    slide.addText('한국산업인력공단 (2017.05)', { x: 5.4, y: 2.2, w: 4, h: 0.35, fontSize: 12, color: 'AAAAAA' });

    slide.addShape(pptx.ShapeType.roundRect, { x: 0.5, y: 3.4, w: 9.2, h: 1.0, fill: { color: '2d4a6f' } });
    slide.addText('🏆 2021년 사내 우수사원 - (주)한국문헌정보기술', { x: 0.7, y: 3.6, w: 8.8, h: 0.35, fontSize: 14, color: 'FFFFFF' });
    slide.addText('대용량 처리 최적화 및 검색 엔진 구축 성과', { x: 0.7, y: 4.0, w: 8.8, h: 0.3, fontSize: 12, color: 'AAAAAA' });

    // Slide 12: Thank You
    slide = pptx.addSlide();
    slide.background = { color: '1e3a5f' };
    slide.addText('Thank You', { x: 0.5, y: 1.8, w: '100%', h: 0.8, fontSize: 48, color: 'FFFFFF', bold: true, align: 'center' });
    slide.addText('함께 성장할 기회를 기대합니다', { x: 0.5, y: 2.6, w: '100%', h: 0.5, fontSize: 18, color: 'AAAAAA', align: 'center' });

    const contactsFinal = [
        '📧 wony9324@naver.com',
        '📱 010-3555-2320',
        '💻 github.com/younwony'
    ];

    contactsFinal.forEach((c, i) => {
        slide.addShape(pptx.ShapeType.roundRect, { x: 1.2 + i * 2.9, y: 3.5, w: 2.7, h: 0.6, fill: { color: '2d4a6f' }, line: { color: '4a6cf7', width: 1 } });
        slide.addText(c, { x: 1.2 + i * 2.9, y: 3.55, w: 2.7, h: 0.5, fontSize: 11, color: 'FFFFFF', align: 'center' });
    });

    pptx.writeFile({ fileName: path.join(OUTPUT_DIR, '윤원희_경력기술서.pptx') });
    console.log('  ✅ 윤원희_경력기술서.pptx');
}

function addStarContent(slide, starItems, pptxRef) {
    starItems.forEach((item, i) => {
        const x = 0.3 + (i % 2) * 4.9;
        const y = 1.0 + Math.floor(i / 2) * 2.0;

        slide.addShape(pptxRef.ShapeType.roundRect, { x, y, w: 4.6, h: 1.8, fill: { color: '2d4a6f' }, line: { color: item.color, width: 2, dashType: 'solid' } });
        slide.addText(item.type, { x: x + 0.2, y: y + 0.1, w: 2, h: 0.35, fontSize: 12, color: item.color, bold: true });

        item.items.forEach((text, j) => {
            slide.addText(`→ ${text}`, { x: x + 0.2, y: y + 0.5 + j * 0.4, w: 4.2, h: 0.35, fontSize: 10, color: 'DDDDDD' });
        });
    });
}

// Main
async function main() {
    console.log('\n🚀 문서 생성 시작\n');
    console.log(`📁 출력 폴더: ${OUTPUT_DIR}\n`);

    try {
        await generatePDFs();
        generatePPTs();

        console.log('✨ 모든 문서 생성 완료!\n');
        console.log('📂 생성된 파일:');
        const files = fs.readdirSync(OUTPUT_DIR);
        files.forEach(f => console.log(`   - ${f}`));
        console.log('');
    } catch (error) {
        console.error('❌ 오류 발생:', error.message);
    }
}

main();
