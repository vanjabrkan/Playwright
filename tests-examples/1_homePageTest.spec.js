const {test, expect} = require('@playwright/test')

test('Handle Home Page', async ({page})=>{

    await page.goto('https://www.demoblaze.com/');

    //if we want to capture page title
    const pageTitle = await page.title();
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('STORE'); //validation 1

    //if we want to capture page url
    const pageURL = page.url();
    console.log('Page URL is:', pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/'); //validation 2

    await page.close();



})