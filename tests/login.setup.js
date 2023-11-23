//const { test as setup, expect } = require('@playwright/test');
import {test as setup, expect} from '@playwright/test'
import {STORAGE_STATE} from '../playwright.config'

setup('make login', async({ page }) => {
    await page.goto('/login')
    await page.getByLabel('Email:').fill('istg91@aol.com')
    await page.getByLabel('Пароль:').fill('qwedsa')
    await page.locator("button[type='submit']").click()

    await expect(page.locator('span.card-title').nth(0)).toBeVisible()
    await page.context().storageState({ path: STORAGE_STATE})
})