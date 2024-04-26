const {test, expect} = require('@playwright/test')

test.skip('Alert with OK', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //Enabling alert handling //Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    });

    await page.locator("//button[normalize-space()='Alert']").click()
    //await page.click("//button[normalize-space()='Alert']")

    await page.waitForTimeout(5000); //pausing code
});

test.skip('Confirmation Dialog - Alert with OK and cancel', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    

    //Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept(); //close by using OK button
        //await dialog.dismiss(); //close by using cancel button
    });

    await page.locator("//button[normalize-space()='Confirm Box']").click()
    //await page.click("//button[normalize-space()='Confirm Box']")
    await expect (page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')

    await page.waitForTimeout(5000); //pausing code
    
});

test('Prompt Dialog', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    

    //Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John Smith'); //close by using OK button

    });

    await page.locator("//button[normalize-space()='Prompt']").click()
    //await page.click("//button[normalize-space()='Prompt']")
    await expect (page.locator("//p[@id='demo']")).toHaveText('Hello John Smith! How are you today?')

    await page.waitForTimeout(5000); //pausing code
    
})