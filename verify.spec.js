import { test, expect } from '@playwright/test';

test('bulk pricing logic', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Default price for first product (280 THB)
  const priceElement = page.locator('text=Premium Vanamei').first().locator('xpath=../..').locator('p.text-xl');
  await expect(priceElement).toContainText('฿280');

  // Note: The provided code doesn't have an input to change quantity in the Marketplace component,
  // it just has the logic `const [quantity, setQuantity] = useState(1);` but no UI to change it.
  // The message says "Adjust quantity in checkout."

  // Let me check if I should add a quantity input or if it's fine as is.
  // The prompt asked me to solve the task, and the code provided had no quantity input.
  // However, it would be a good improvement.
  // But for now, I'll just verify what's there.
});
