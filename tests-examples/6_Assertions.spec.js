//const {test, expect} = require('@playwright/test')  //1. way
import {test, expect} from '@playwright/test'         //2. way

test('Test Assertions', async ({page})=>{

    //open App URL
    await page.goto('https://demo.nopcommerce.com/register')

    //1) expect(page).toHaveURL()  Page has URL
    //   expect(page).not.toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2) expect(page).toHaveTitle() Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //3) expect(locator).toBeVisible() Element is visible
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //4) expect(locator).toBeEnabled() Contol is enabled
    //   expect(locator).toBeDisabled() Element is disabled
    const searchBox = await page.locator('#small-searchterms')
    await expect(searchBox).toBeEnabled()

    //5) expect(locator).toBeChecked() Radio/Checkbox is checked

    //radio button
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()


    //check box
    const newsletterCheckBox = await page.locator('#Newsletter')
    await expect(newsletterCheckBox).toBeChecked()

    //6) await expect(locator).toHaveAttribute()	Element has a DOM attribute
    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type','submit')

    //7) await expect(locator).toHaveText()	Element matches text
    await expect(await page.locator('.page-title h1')).toHaveText('Register')   //h1 is child of the div class="page-title"

    //8) await expect(locator).toContainText()	Element contains text
    await expect(await page.locator('.page-title h1')).toContainText('Reg')

    //9) await expect(locator).toHaveValue()	Input has a value
    const emailInput = await page.locator('#Email')
    await emailInput.fill('Test@demo.com')
    await expect(emailInput).toHaveValue('Test@demo.com')
    
    //10) await expect(locator).toHaveCount()	List has exact number of children
    const options = await page.locator("select[name='DateOfBirthMonth'] option")
    await expect(options).toHaveCount(13)
    

})