import { expect, test } from '@playwright/test'

test('homepage title and heading are visible', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/fly tyrol/i)
  await expect(page.getByRole('heading', { name: /fly tyrol/i })).toBeVisible()
})
