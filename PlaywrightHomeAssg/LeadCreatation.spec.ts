import test from "@playwright/test";

test("Create Lead",async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com") //id locator type is used here
    await page.locator("#password").fill("TestLeaf@2025") //fill will clear the existing value and then enter the new value
    await page.locator("//input[@class='button r4 wide primary']").click()
    
   await page.locator("//div[@class='slds-icon-waffle']").click() //attribute based xpath locator is used here
   await page.locator("//button[text()='View All']").click()   //text based xpath locator is used here
   await page.waitForTimeout(2000)

   await page.locator("//p[contains(text(),'opport')]").click() //partial text based locator is used here
   await page.locator("(//a[@class='slds-context-bar__label-action dndItem'])[3]").click() //xpath with parent child relationship is used here, 
   await page.locator("//a[@class='forceActionLink']//div").first().click() //xpath with parent child relationship is used here

   await page.locator("(//input[@class='slds-input'])[6]").fill("Rakshana") //attribute based xpath locator is used here
   await page.locator("(//div[@class='slds-form-element__control slds-grow']/input)[7]").fill("TestLeaf") //xpath Grandparent child relationship is used here,
   await page.waitForTimeout(2000)

    let leadName = await page.locator("//lightning-formatted-name[contains(text(),'Raks')]")
    console.log("Lead name is : "+ await leadName.textContent())

})