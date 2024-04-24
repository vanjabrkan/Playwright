const {test, expect} = require('@playwright/test')

test('Handle Check Box', async ({page})=>{

    await page.goto('https://app.endtest.io/guides/docs/how-to-test-checkboxes/');

    //Single check box
    await (page).locator("//input[@id='pet1' and @type='checkbox']").check(); 
    //await page.check("//input[@id='pet1' and @type='checkbox']")

    await expect(await (page).locator("//input[@id='pet1' and @type='checkbox']")).toBeChecked();
    await expect(await (page).locator("//input[@id='pet1' and @type='checkbox']").isChecked()).toBeTruthy(); 

    await expect(await (page).locator("//input[@id='pet3' and @type='checkbox']").isChecked()).toBeFalsy(); 
    
    //Multiple checkboxes
    const checkboxesLocators = [
                                "//input[@id='pet1' and @type='checkbox']",
                                "//input[@id='pet3' and @type='checkbox']"
                               ];

    //select multiple checkboxes
    for(const locator of checkboxesLocators) 
    {
        await page.locator(locator).check();
    }

    await page.waitForTimeout(5000); //pausing code

    //now I want to unselect it
    for(const locator of checkboxesLocators) //select multiple checkboxes
    {
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck();
        }
    }


    await page.waitForTimeout(5000); //pausing code
    
})