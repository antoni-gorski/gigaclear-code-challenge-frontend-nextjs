import { test, expect } from '@playwright/test';

test('page properly shows title', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Check our latest posts');
});

test('page has correct amount of gallery items', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('gallery-article')).toHaveCount(5);
});

test('page navigation works properly', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Title 1')).toBeVisible();
  await expect(page.getByText('Title 2')).toBeVisible();
  await page.getByText('Title 1').click()
  await expect(page.getByText('Title 1')).toBeVisible();
  await expect(page.getByText('About this event 3')).toBeVisible();
  await expect(page.getByText('Title 2')).not.toBeVisible();
});
