const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'serial' })
test.describe('Open Guru website', () => {

    test.beforeEach(async({ page }) => {
        await page.goto ('https://www.guru99.com/')
    })
test('test5', async ({ page }) => {
    const input = page.locator('input.gsc-input')
    await page.getByText('Guru99 is totally new kind of learning experience. We make tons of efforts to ta').click();
    await input.click()
    await input.fill('sap')
    await input.clear()
    await input.pressSequentially('SAP')
    await input.pressSequentially('Tutorial', { delay: 200})
})
    
})