// tests/verifyProductQuantity.test.js

const { test, expect } = require('@playwright/test');
const CartPage = require('../pages/CartPage');

test('Verify product quantity in cart', async ({ page }) => {
    const cartPage = new CartPage(page);

    // Step 1: Navigate to the website
    await page.goto('http://automationexercise.com', { waitUntil: 'domcontentloaded' });

    // Step 2: Verify the homepage title
    await expect(page).toHaveTitle(/Automation Exercise/);

    // Step 3: Click 'View Product' for a specific product
    await page.locator('a[href="/product_details/1"]').click();

    // Step 4: Verify product detail page is displayed
    await expect(page.locator('.product-information')).toBeVisible();

    // Step 5: Set product quantity to 4
    await cartPage.setQuantity('4');

    // Step 6: Click 'Add to Cart' button
    await cartPage.clickAddToCart();

    // Step 7: Click 'View Cart' in the modal popup
    await cartPage.clickViewCart();

    // Step 8: Verify product quantity in the cart
    const cartQuantity = await cartPage.getCartQuantity();
    expect(cartQuantity.trim()).toBe('4');
    console.log("Product quantity matched")
});
