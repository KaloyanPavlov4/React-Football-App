import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/React-Football-App/cups', { waitUntil: 'domcontentloaded' })
})

test('Hero is visible', async ({ page }) => {
  await expect(page.getByText('Discover the most prestigious tournaments in football')).toBeVisible()
  await expect(page.getByText('Work in progress!')).toBeVisible()
})

test('Leagues are visible', async ({ page }) => {
  await expect(page.getByText('UEFA Champions League')).toBeVisible()
  await expect(page.getByText('European Championship')).toBeVisible()
  await expect(page.getByText('Copa Libertadores')).toBeVisible()
})