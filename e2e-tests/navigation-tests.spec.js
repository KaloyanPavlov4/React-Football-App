import { test, expect } from '@playwright/test'

test.describe('Navigation is visible on every page', () => {
  test('On home page', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByTestId('navigation')).toBeVisible()
  })

  test('On 404 page', async ({ page }) => {
    await page.goto('/React-Football-App/404')
    await expect(page.getByTestId('navigation')).toBeVisible()
  })

  test('On leagues page', async ({ page }) => {
    await page.goto('/React-Football-App/leagues')
    await expect(page.getByTestId('navigation')).toBeVisible()
  })

  test('On cups page', async ({ page }) => {
    await page.goto('/React-Football-App/cups')
    await expect(page.getByTestId('navigation')).toBeVisible()
  })

  test('On upcoming matches', async ({ page }) => {
    await page.goto('/React-Football-App/cups')
    await expect(page.getByTestId('navigation')).toBeVisible()
  })

  test('On league details', async ({ page }) => {
    await page.goto('/React-Football-App/leagues/2021')
    await expect(page.getByTestId('navigation')).toBeVisible()
  })

  test('On team details', async ({ page }) => {
    await page.goto('/React-Football-App/team/64')
    await expect(page.getByTestId('navigation')).toBeVisible()
  })
})

test.describe('Buttons correctly navigate to page', () => {
  test('Home button', async ({ page }) => {
    await page.goto('/React-Football-App/404')
    await page.getByText('Football Frontend').click()
    await expect(page).toHaveURL('/React-Football-App')
  })

  test('Leagues button', async ({ page }) => {
    await page.goto('/')
    await page.getByTestId('leagues nav').click()
    await expect(page).toHaveURL('/React-Football-App/leagues')
  })

  test('Cups button', async ({ page }) => {
    await page.goto('/')
    await page.getByTestId('cups nav').click()
    await expect(page).toHaveURL('/React-Football-App/cups')
  })

  test('Upcoming matches button', async ({ page }) => {
    await page.goto('/')
    await page.getByTestId('upcoming matches nav').click()
    await expect(page).toHaveURL('/React-Football-App/upcoming')
  })
})