import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/React-Football-App/leagues', { waitUntil: 'domcontentloaded' })
})

test('Hero is visible', async ({ page }) => {
  await expect(page.getByText('Discover the Best of European Football')).toBeVisible()
  await expect(page.getByText('Explore the top leagues that define the beautiful game across Europe')).toBeVisible()
})

test('Leagues are visible', async ({ page }) => {
  await expect(page.getByText('Premier League')).toBeVisible()
  await expect(page.getByText('Championship')).toBeVisible()
  await expect(page.getByText('Ligue 1')).toBeVisible()
  await expect(page.getByText('Bundesliga')).toBeVisible()
  await expect(page.getByText('Serie A')).toBeVisible()
  await expect(page.getByText('Eredivisie')).toBeVisible()
  await expect(page.getByText('Primeira Liga')).toBeVisible()
  await expect(page.getByText('Primera Division')).toBeVisible()
})

test('View more button redirects', async ({ page }) => {
  await page.getByText('View More').first().click()
  await expect(page).toHaveURL(/React-Football-App\/leagues\/\d+/)
})