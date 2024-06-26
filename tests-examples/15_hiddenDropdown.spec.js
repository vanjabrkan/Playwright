const {test, expect} = require('@playwright/test')

//selectorsHub - Turn on Debugger

test('Handle Hidden Items in DropDown', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill('admin123')
    await page.locator("[type='submit']").click()

    await page.locator("//span[normalize-space()='PIM']").click()

    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click()


    await page.waitForTimeout(3000); //pausing code

    const options= await page.$$("//div[@role='listbox']//span")

    for (let option of options)
    {
        const jobTitle=await option.textContent()
        //console.log(jobTitle);
        if (jobTitle.includes('QA Engineer'))
        {
            await option.click()
            break;
        }

    }
    await page.waitForTimeout(5000);
})