import test from "@playwright/test";
test("Create Lead",async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("democsr") //id locator type is used here, we can use [id='username'] also
    await page.locator("#password").fill("crmsfa") //fill will clear the existing value and then enter the new value
    await page.locator(".decorativeSubmit").click() //class locator type is used here, we can use [class='decorativeSubmit'] also
    
    await page.locator(`text='CRM/SFA'`).click() //text locator type is used here, we can use text=CRM/SFA also
    await page.locator(`text='Leads'`).click() 
    await page.waitForTimeout(2000) //wait for 2 seconds to load the page completely
    await page.locator(`text='Create Lead'`).first().click()

    await page.locator("#createLeadForm_companyName").fill("TestLeaf") //id locator type is used here, we can use [id='createLeadForm_companyName'] also
    await page.locator("#createLeadForm_firstName").fill("Raks")
    await page.locator("#createLeadForm_lastName").fill("Kumar")
    await page.locator("#createLeadForm_personalTitle").fill("Mrs.")
    await page.locator("#createLeadForm_generalProfTitle").fill("Automation Tester")
    await page.locator("#createLeadForm_annualRevenue").fill("1000000")
    await page.locator("#createLeadForm_departmentName").fill("QA")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9999999999")

    await page.waitForTimeout(2000) 
    await page.locator(".smallSubmit").click() //class locator type is used here, we can use [class='smallSubmit'] also

})
