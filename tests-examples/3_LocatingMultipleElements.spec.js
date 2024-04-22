//const {test, expect} = require('@playwright/test')  //1. way
import {test, expect} from '@playwright/test'         //2. way

test('Locating Multiple Elements',async ({page})=>{

    await page.goto('https://www.demoblaze.com/')

   /* const links = await page.$$('a');
    for (const link of links)
    {
        const linkText= await link.textContent();
        console.log(linkText);
    }
    */

    //Locate all the products displayed on the home page
    await page.waitForSelector("//div[@id='tbodyid']//h4/a")
    const products= await page.$$("//div[@id='tbodyid']//h4/a")
    for (const product of products)
    {
        const productName= await product.textContent();
        console.log(productName);
    }
   await page.close();
})