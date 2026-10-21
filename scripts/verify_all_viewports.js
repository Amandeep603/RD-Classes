const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const viewports = [
  { name: '1600x900', w: 1600, h: 900 },
  { name: '1366x768', w: 1366, h: 768 },
  { name: '1440x900', w: 1440, h: 900 },
  { name: '1920x1080', w: 1920, h: 1080 },
  { name: '1900x870', w: 1900, h: 870 },
  { name: '1024x768', w: 1024, h: 768 },
  { name: '768x1024', w: 768, h: 1024 },
  { name: '430x932', w: 430, h: 932 },
  { name: '390x844', w: 390, h: 844 },
  { name: '360x640', w: 360, h: 640 },
];

(async () => {
  const outDir = path.join(__dirname, '..', 'docs', 'screenshots');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await chromium.launch({ channel: 'chrome' });
  const results = [];

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const shotPath = path.join(outDir, `${vp.name}.png`);
    await page.screenshot({ path: shotPath });

    const checks = await page.evaluate((isDesktop) => {
      const scrollEl = document.scrollingElement;
      const hasVertScroll = scrollEl.scrollHeight > window.innerHeight;
      const hasHorizScroll = scrollEl.scrollWidth > window.innerWidth;

      // Check overlap between left content and arches on desktop
      let hasOverlap = false;
      if (isDesktop) {
        const leftContent = document.querySelector('.lg\\:block .absolute.z-20');
        const archCluster = document.querySelector('.lg\\:block .absolute.z-10');
        if (leftContent && archCluster) {
          const lRect = leftContent.getBoundingClientRect();
          const aRect = archCluster.getBoundingClientRect();
          hasOverlap = lRect.right > aRect.left;
        }
      }

      return {
        hasVertScroll,
        hasHorizScroll,
        hasOverlap,
        scrollHeight: scrollEl.scrollHeight,
        innerHeight: window.innerHeight,
        scrollWidth: scrollEl.scrollWidth,
        innerWidth: window.innerWidth
      };
    }, vp.w >= 1024);

    results.push({
      viewport: vp.name,
      ...checks,
      screenshot: shotPath
    });

    await page.close();
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})();
