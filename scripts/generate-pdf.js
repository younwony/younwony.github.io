const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const htmlPath = path.resolve(__dirname, '../templates/export/pdf/career-portfolio.html');
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

    const outputPath = path.resolve(__dirname, '../output/윤원희_경력기술서_2025-12.pdf');

    await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: false,
        margin: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        }
    });

    console.log(`PDF generated: ${outputPath}`);
    await browser.close();
}

generatePDF().catch(console.error);
