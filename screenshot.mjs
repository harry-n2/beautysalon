import puppeteer from 'puppeteer';

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 1440, height: 900 });

        console.log('Navigating to http://localhost:5173 ...');
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 30000 });

        // アニメーション等のため少し待つ
        await new Promise(resolve => setTimeout(resolve, 3000));

        // アーティファクトディレクトリに直接保存
        const screenshotPath = 'C:/Users/naoya/.gemini/antigravity/brain/08730dad-0dc3-4d99-844b-21acf76f9b03/maki_final_preview.png';
        await page.screenshot({ path: screenshotPath, fullPage: true });

        await browser.close();
        console.log('Screenshot saved to: ' + screenshotPath);
    } catch (error) {
        console.error('Error taking screenshot:', error);
        process.exit(1);
    }
})();
