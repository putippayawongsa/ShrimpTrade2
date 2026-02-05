import { test } from '@playwright/test';

test('capture screenshots', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Market tab (default)
  await page.screenshot({ path: 'market.png', fullPage: true });

  // Auction tab
  await page.click('button:has-text("Live Auction")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'auction.png', fullPage: true });

  // AI Insights tab
  await page.click('button:has-text("AI Insights")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'ai.png', fullPage: true });

  // Logistics tab
  await page.click('button:has-text("Logistics")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'logistics.png', fullPage: true });
});
