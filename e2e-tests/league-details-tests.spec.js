import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/React-Football-App/leagues/2021', { waitUntil: 'domcontentloaded' })
})

test.describe('Tab tests', () => {
  test('Standings are visible', async ({ page }) => {
    await expect(page.getByTestId('standings tab')).toBeVisible()
  })

  test('Top scorers are visible', async ({ page }) => {
    await page.getByText('Top Scorers').click()
    await expect(page.getByTestId('top scorers tab')).toBeVisible()
  })

  test('Upcoming matches are visible', async ({ page }) => {
    await page.getByTestId('upcoming matches button').click()
    await expect(page.getByTestId('upcoming tab')).toBeVisible()
  })
})

test('Correct league name is shown', async ({ page }) => {
  await expect(page.getByText('Premier League')).toBeVisible()
})

test('Clicking a team name redirects to team details page', async ({ page }) => {
  await page.getByTestId('team row').first().click()
  await expect(page).toHaveURL(/React-Football-App\/team\/\d+/)
})
