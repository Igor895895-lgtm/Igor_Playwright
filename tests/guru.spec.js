const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'serial' })
test.describe('Open Guru website', () => {

    test.beforeEach(async({ page }) => {
        //await page.goto ('https://www.guru99.com/')
        await page.goto ('/')
    })
    test('Open the main page', async({ page }) =>{ 
        // await page.goto ('https://www.guru99.com/')

        await expect(page.getByText('Tutorials Library')).toBeVisible()
    })


test('test', async ({ page }) => {
  await page.goto('https://www.guru99.com/');
  await page.mouse.down();
  await page.mouse.up();
  await page.getByRole('link', { name: 'SAP Expand child menu of SAP' }).click();
  await page.getByRole('link', { name: 'CRM', exact: true }).click();
  //await page.getByRole('button', { name: 'AGREE' }).click();
  await page.getByTitle('SAP CRM Module: Overview, Architecture').click();
});
    

test('test2', async ({ page }) => {
    await page.goto('https://www.guru99.com/');
    await page.locator("xpath=//a[@href='/tensorflow-tutorial.html'][text()='➤ TensorFlow']").click();
    await expect(page.locator('//h2[text()="What is TensorFlow?"]')).toBeVisible()
})

test('test3', async ({ page }) => {
    const linkNltk = page.locator('a[href="/nltk-tutorial.html"]')
    const articleAdded = page.locator("xpath=//time")
    const textNltkSylabus = page.locator("xpath=//h2[text()='NLTK Tutorial Syllabus']")
    const tutorialLink = page.locator('tr td a')
    const textWhatIsSeq = page.locator("xpath=//h2[text()='What is Seq2Seq?']")

    await linkNltk.click()
    await expect(articleAdded).toContainText('September 30, 2023')
    await textNltkSylabus.press('Enter')
    await tutorialLink.nth(7).click()
    await textWhatIsSeq.waitFor({state: 'visible', timeout: 5000})
    await expect(textWhatIsSeq).toBeVisible()
})

test.skip('test4', async ({ page }) => {
    const textWhatIsSeq = page.locator("xpath=//h2[text()='What is Seq2Seq?']")
    const textWhatIsSeq33 = page.locator("xpath=//h2[text()='What is Seq2Seq33?']")

    await expect(textWhatIsSeq.or(textWhatIsSeq33).toBeVisible)

    await page.goto('/seq2seq-model.html')
    if (await textWhatIsSeq33.isVisible()) {
        await page.locator('NON.VISIBLE.LOCATOR').click()
    }
    await expect(textWhatIsSeq).toBeVisible()
})

test('test50', async ({ page }) => {
    const input = page.locator('input.gsc-input')
    await page.getByText('Guru99 is totally new kind of learning experience. We make tons of efforts to ta').click();
    await page.locator('div.g-content').screenshot({ path: 'screenshots/screen1.png'})
    await expect(page).toHaveScreenshot('screenshots-main-page-snapshot.png')
    await input.click()
    await input.fill('sap')
    await page.screenshot({ path: 'sap_in_search_input_false.png', fullPage: false})
    await input.clear()
    await input.pressSequentially('SAP')
    await input.pressSequentially('Tutorial', { delay: 200})
})

})