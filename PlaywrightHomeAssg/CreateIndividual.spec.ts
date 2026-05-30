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

    await page.locator("//span[text()='Individuals List']").click()
    await page.locator("//span[text()='New Individual']").click()
    await page.waitForTimeout(2000)

    await page.locator(".lastName.compoundBLRadius.compoundBRRadius.form-element__row.input").fill("Siddarth")
    await page.locator("//span[text()='Save']").click()

    await page.locator("//div[@class='slds-page-header__title slds-m-right--small slds-align-middle slds-line-clamp clip-text']") //individual name locator


})