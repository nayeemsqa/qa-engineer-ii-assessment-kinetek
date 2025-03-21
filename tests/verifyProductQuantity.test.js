// tests/verifyProductQuantity.test.js

const { test, expect } = require('@playwright/test');

test('Verify product quantity in cart', async ({ page }) => {
    // Step 1: Navigate to the website
    await page.goto('http://automationexercise.com', { waitUntil: 'domcontentloaded' });

    // Step 2: Verify the homepage title
    await expect(page).toHaveTitle(/Automation Exercise/);

    // Step 3: Click 'View Product' for a specific product
    await page.locator('a[href="/product_details/1"]').click();

    // Step 4: Verify product detail page is displayed
    await expect(page.locator('.product-information')).toBeVisible();

    // Step 5: Set product quantity to 4
    const quantityInput = page.locator('input#quantity');
    await quantityInput.fill('4');

    // Step 6: Click 'Add to Cart' button
    await page.locator('button:has-text("Add to cart")').click();

    // Step 7: Click 'View Cart' in the modal popup
    await page.locator('#cartModal a:has-text("View Cart")').click();

    // Step 8: Verify product quantity in the cart
    const cartQuantity = await page.locator('tr#product-1 button.disabled').textContent();
    expect(cartQuantity.trim()).toBe('4');
});
