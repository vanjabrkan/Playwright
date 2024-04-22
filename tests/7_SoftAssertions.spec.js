const {test, expect} = require('@playwright/test')

test('Soft Assertions', async ({page})=>{
    //By default, failed hard assertion will terminate test execution. 
    //Playwright also supports soft assertions: failed soft assertions do not terminate test execution, but mark the test as failed.

    await page.goto('https://www.demoblaze.com/');
/*
    //Hard Assertions
    await expect(page).toHaveTitle('STORE123'); //validation 1
    await expect(page).toHaveURL('https://www.demoblaze.com/'); //validation 2
    await expect(page.locator('.navbar-brand')).toBeVisible();
*/

    //Soft Assertions
    await expect.soft(page).toHaveTitle('STORE123'); 
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/'); 
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();

    
})