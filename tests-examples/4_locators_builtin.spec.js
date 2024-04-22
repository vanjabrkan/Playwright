/*locators represent a way to find element(s) on the page at any moment.
These are the recommended built in locators.

page.getByLabel() to locate a form control by associated label's text.
        <label>Password <input type="password" /></label>
        await page.getByLabel('Password').fill('secret');

page.getByTitle() to locate an element by its title attribute.  
        <span title='Issues count'>25 issues</span>
        await expect(page.getByTitle('Issues count')).toHaveText('25 issues');

page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
        <button data-testid="directions">Itinéraire</button>
        await page.getByTestId('directions').click();

*/


//const {test, expect} = require('@playwright/test')  //1. way
import {test, expect} from '@playwright/test'         //2. way


test('Built-in Locators',async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //page.getByAltText() to locate an element, usally image, by its text alternative 
        //alt="company-branding"
        const logo= await page.getByAltText('company-branding')
        await expect(logo).toBeVisible();

    //page.getByPlaceholder() to locate an input by placeholder.
        //placeholder="Username"
        const username= await page.getByPlaceholder('Username')
        await expect(username).toBeVisible();
        //to fill it 
        await page.getByPlaceholder('Username').fill('Admin')

        //placeholder="Password"
        const password= await page.getByPlaceholder('Password')
        await expect(password).toBeVisible();
        //to fill it 
        await page.getByPlaceholder('Password').fill('admin123')

    //page.getByRole() to locate by explicit and implicit accessibility attributes.
        await page.getByRole('button', {type: "submit"}).click()

    //page.getByText() to locate by text content.
        await expect(await page.getByText('manda user')).toBeVisible()
        //or
        const name=await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
        await expect(await page.getByText(name)).toBeVisible()
        
})