import test, {chromium, webkit} from "@playwright/test";

test("Redbus",async()=>{
    const browser = await chromium.launch({ 
        channel: 'msedge',   // Opens Edge browser or we can enable it from Config file also by using channel: 'msedge' in the project section
        headless: false     
  });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.redbus.in/");

    const title = await page.title();  //get the title of the page
    console.log('Title of the page is: ' + title);

    console.log('URL of the page is: ' + page.url()); //get the URL of the page
});

test ("Flipkart",async()=>{
    const browser = await webkit.launch({ headless: false });  // Opens WebKit browser (Safari)
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.flipkart.com/");
    
    const title = await page.title();  
    console.log('Title of the page is: ' + title);
    
    console.log('URL of the page is: ' + page.url());
});