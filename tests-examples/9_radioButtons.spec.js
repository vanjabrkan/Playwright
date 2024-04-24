const {test, expect} = require('@playwright/test')

test('Handle Radio Button', async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register/');

    //Radio Button
    await (page).locator("//input[@id='gender-female']").check(); 
    //await page.check("//input[@id='gender-female']")

    await expect(await (page).locator("//input[@id='gender-female']")).toBeChecked();
    await expect(await (page).locator("//input[@id='gender-female']").isChecked()).toBeTruthy(); 

    await expect(await (page).locator("//input[@id='gender-male']").isChecked()).toBeFalsy(); 
    
    await page.waitForTimeout(5000); //pausing code
    
})