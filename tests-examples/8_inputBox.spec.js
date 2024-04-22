const {test, expect} = require('@playwright/test')

test('Handle Input Box', async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register/');


    //input - first name
    await expect(await (page).locator("//input[@id='FirstName']")).toBeVisible(); 
    await expect(await (page).locator("//input[@id='FirstName']")).toBeEmpty(); 
    await expect(await (page).locator("//input[@id='FirstName']")).toBeEditable(); 
    await expect(await (page).locator("//input[@id='FirstName']")).toBeEnabled(); 

    await (page).locator("//input[@id='FirstName']").fill('Vanja'); 
    //await page.fill("//input[@id='FirstName']","Vanja")

    
    await page.waitForTimeout(5000); //pausing code
    
})