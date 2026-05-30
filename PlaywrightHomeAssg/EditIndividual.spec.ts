import test from "@playwright/test";

test("Create Lead",async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com") 
    await page.locator("#password").fill("TestLeaf@2025") 
    await page.locator("//input[@class='button r4 wide primary']").click()
    
    await page.locator("//div[@class='slds-icon-waffle']").click() //attribute based xpath locator
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='View All']").click()   //text based xpath locator is used here
    await page.waitForTimeout(2000)

    await page.locator("//p[text()='Individuals']").click() //text based locator is used here
    await page.waitForTimeout(2000)

    await page.locator(".slds-input").first().fill("Siddarth")
    await page.keyboard.press('Enter');

    await page.locator("(//lightning-button-menu[@class='slds-dropdown-trigger slds-dropdown-trigger_click'])[3]").click()
    await page.waitForTimeout(2000)

    await page.locator(".forceActionLink").nth(1).click()
    await page.waitForTimeout(2000)

   await page.locator("(//a[text()='--None--'])[1]").click()
   await page.locator("//a[text()='Mr.']").click()
   await page.locator("[class='firstName compoundBorderBottom form-element__row input']").fill("Sid")

   await page.locator("[class=' label bBody']").last().click()

   await page.locator("[text()='Sid Siddarth']")


})