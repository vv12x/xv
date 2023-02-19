const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch(
    { 
      headless: false, 
      executablePath: `/../../../${process.env.PUPPETEER_EXECUTABLE_PATH}`, 
      args: ['--no-sandbox'] 
    }
  );
  const page = await browser.newPage();
  
  await page.goto('https://amazon.com');

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
    };
  });
  await page.type('#twotabsearchtextbox', 'helloworld');
  await page.click('#nav-search-submit-button');
  await page.waitForTimeout(10000)
  console.log('Dimensions:', dimensions);

  await page.screenshot({                      // Screenshot the website using defined options
 
    path: "./screenshot.png",                   // Save the screenshot in current directory
 
    fullPage: true                              // take a fullpage screenshot
 
  })

  await browser.close();
})();
