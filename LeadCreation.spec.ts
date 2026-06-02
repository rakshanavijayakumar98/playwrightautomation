import test, { expect } from "@playwright/test";

test("Lead Creation",async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com") //id locator type is used here
    await page.locator("#password").fill("TestLeaf@2025") //fill will clear the existing value and then enter the new value
    await page.locator("//input[@class='button r4 wide primary']").click()
    
   await page.locator("//div[@class='slds-icon-waffle']").click() //attribute based xpath locator is used here
   await page.waitForTimeout(2000)
   await page.locator("//button[text()='View All']").click()   //text based xpath locator is used here
   await page.waitForTimeout(2000)

   await page.locator("//p[contains(text(),'opport')]").click() //partial text based locator is used here
   await page.locator("//span[text()='Leads']").first().click() 
   await page.locator("//a[@class='forceActionLink']//div").first().click() //xpath with parent child relationship is used here

   await page.getByPlaceholder("Last Name").fill("Rakshana") //placeholder attribute based locator is used here
   await page.locator("//input[@name='Company']").fill("TestLeaf") //xpath with attribute based locator is used here
   await page.waitForTimeout(2000)

   await page.locator("//button[@name='SaveEdit']").click() //xpath with attribute based locator is used here

   expect (await page.locator("//slot[@name='primaryField']")).toBeVisible() //assertion to verify the lead creation
   console.log("Lead created successfully")

})