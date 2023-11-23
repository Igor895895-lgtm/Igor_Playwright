const { test, expect } = require('@playwright/test');

test.describe('Find Clothing stores', () => {

    test('test 1', async ({ page, browser }) => {
    const context = await browser.newContext({
        locale: 'en-GB',
        timezoneId: 'Europe/London',
        geolocation: { longitude: 52.192001, latitude: -2.220000 },
        permissions: ['geolocation']
        })
    //await page.context().setGeolocation({longitude: 52.192001, latitude: -2.220000});   
    await page.goto('https://www.google.com');
    await page.getByRole('button', { name: 'Accept all' }).click();
    await page.locator('.SDkEP').click();
    await page.getByLabel('Search', { exact: true }).fill('Clothing store');
    await page.getByLabel('Google Search').first().click();

    await page.waitForTimeout(10000);
  await page.waitForSelector('h3');
  const searchResults = await page.$$('h3');
  for (const result of searchResults) {
    const title = await result.innerText();
    console.log(title);
    }
})
})
