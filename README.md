# Playwright Automation Tool

Welcome to the Playwright Automation Project! 
This project is a culmination of the learnings and practical exercises from the YouTube course "Playwright with Javascript" by Sdetpavan. In this course, we've delved into the world of automated testing using Playwright, a powerful tool for browser automation.

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Examples](#Examples)
- [Contributing](#Contributing)

## Installation
1. Make sure you have Node.js installed. If not, you can download and install it from [here](https://nodejs.org/).
2. Clone this repository to your local machine.
3. Install dependencies by running:
    ```bash
    npm init playwright@latest
    ```
4. Install a new extension **"Playwright Test for VSCode"** by Microsoft

## Usage
To use this project, follow the steps below:

1. Write your test scripts using Playwright. Example scripts can be found in the **tests/** directory.
2. Run tests with the following command:
    ```bash
    npx playwright test --project:chromium --headed
    ```
3. View test results and logs in the console output.

## Examples
```javascript
    import { test, expect } from '@playwright/test';

    test('test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').click();
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Log out' }).click();
    await page.close();
    })();
```
    
## Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.