import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/React-Football-App/team/64', { waitUntil: 'domcontentloaded' })
})

test('Correct team name is shown', async ({ page }) => {
  await expect(page.getByText('Liverpool FC')).toBeVisible()
})