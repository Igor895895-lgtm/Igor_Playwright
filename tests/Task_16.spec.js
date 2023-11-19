const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'serial' })
test.describe('Open Guru website', () => {

    test('test 1', async ({ page }) => {
        await page.goto('https://www.guru99.com/');
        await expect(page.getByRole('heading', { name: 'Guru99 is totally new kind of learning experience.' })).toBeVisible;
        await page.getByRole('link', { name: '➤ SAP Beginner' }).click();
        await page.getByRole('button', { name: 'AGREE' }).click();
        await expect(page.getByRole('heading', { name: 'SAP Tutorial Summary' })).toBeVisible;
        await page.locator('.site-header-item').first().click();
        await page.getByRole('heading', { name: 'Guru99 is totally new kind of learning experience.' }).click();
        await page.getByLabel('search', { exact: true }).click();
        await page.getByLabel('search', { exact: true }).fill('SAP Beginner');
        await page.getByRole('button', { name: 'search', exact: true }).click();
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'SAP Tutorial for Beginners – Guru99' }).click();
        const page1 = await page1Promise;
        await expect(page1.getByRole('heading', { name: 'SAP Tutorial for Beginners – Guru99' })).toBeVisible;
      });

    test('test 2', async ({ page }) => {  
        await page.goto('https://www.guru99.com/');
        await expect(page.getByRole('heading', { name: 'Search for your Favorite Course' })).toBeVisible;
        await page.locator('.site-container').first().click();
        await page.getByRole('link', { name: 'Testing Expand child menu of Testing' }).click();
        await page.getByRole('link', { name: 'Database Testing' }).click();
        await page.getByRole('button', { name: 'AGREE' }).click();
        await expect(page.getByRole('img', { name: 'Database Testing', exact: true })).toBeVisible;
        await expect(page.getByText('Table of Content:')).toBeVisible;
        await page.getByLabel('Expand Table of Contents').click();
        await page.getByRole('link', { name: 'What is Database Testing?' }).click();
        await page.getByLabel('View Search Form').click();
        await page.getByPlaceholder('Search …').fill('Database Testing');
        await page.getByRole('button', { name: 'Search', exact: true }).click();
        await expect(page.getByRole('link', { name: 'searchSearch for Database Testing on Google' })).toBeVisible;
    })

    test('test 3', async ({ page }) => {
        await page.goto('https://www.guru99.com/');
        await page.getByRole('link', { name: 'MySQL' }).click();
        await page.getByRole('button', { name: 'AGREE' }).click();
        await page.getByRole('heading', { name: 'SQL Syllabus' }).click();
        await expect(page.getByRole('row', { name: '👉 Lesson 1 What is a Database? — Definition, Meaning, Types, Example' })).toBeVisible;
        await expect(page.getByRole('link', { name: 'What is a Database?' })).toBeVisible;
        await page.getByRole('link', { name: 'What is SQL?' }).click();
        await page.getByLabel('View Search Form').click();
        await page.getByPlaceholder('Search …').fill('SQL');
        await page.getByRole('button', { name: 'Search', exact: true }).click();
        await expect(page.getByRole('link', { name: 'What is Normalization in DBMS (SQL)? 1NF, 2NF, 3NF Example' })).toBeVisible;
})
})