//const {test, expect} = require('@playwright/test')  //1. way
import {test, expect} from '@playwright/test'         //2. way

test('Locators',async ({page})=>{

    await page.goto('https://www.demoblaze.com/')

    //click on login button - PROPERTY
    // await page.locator('id="login2"').click() //1.way
    await page.click('id=login2')                 //2.way

    //provide a username - CSS (id="loginusername")
    //await page.locator('#loginusername').fill('Vanja') //1.way
    await page.fill('#loginusername','pavanol')            //2.way

    //provide a password - CSS (id="loginpassword")
    //await page.locator('input[id="loginpassword"]').fill('mypass') //1.way
    await page.fill("input[id='loginpassword']",'test@123')            //2.way

    //click on login button - XPATH
    await page.click("//button[normalize-space()='Log in']")

    //verify logout link presence - XPATH
    const logoutLink = await page.locator("//a[normalize-space()='Log out']")
    await expect(logoutLink).toBeVisible();

    await page.close();

})
