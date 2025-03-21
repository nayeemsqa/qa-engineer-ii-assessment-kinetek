// tests/verifyProductQuantity.test.js

const { test, expect } = require('@playwright/test');

test('Verify product quantity in cart', async ({ page }) => {
    console.log("🚀 Step 1: Navigating to the website...");
    await page.goto('http://automationexercise.com', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(5000); // Wait 5s

    console.log("✅ Step 2: Verifying homepage title...");
    await expect(page).toHaveTitle(/Automation Exercise/);
    await page.waitForTimeout(5000);

    console.log("🛍️ Step 3: Clicking on 'View Product'...");
    await page.locator('a[href="/product_details/1"]').click();
    await page.waitForTimeout(5000);

    console.log("🔍 Step 4: Verifying product detail page...");
    await expect(page.locator('.product-information')).toBeVisible();
    await page.waitForTimeout(5000);

    console.log("📝 Step 5: Changing quantity to 4...");
    const quantityInput = page.locator('input#quantity');
    await quantityInput.fill('4');
    await page.waitForTimeout(5000);

    console.log("🛒 Step 6: Clicking 'Add to cart'...");
    await page.locator('text=/Add to cart/i').click();
    await page.waitForTimeout(5000);

    console.log("🧾 Step 7: Clicking 'View Cart'...");
    await page.locator('#cartModal a:has-text("View Cart")').click();
    await page.waitForTimeout(5000);

    console.log("📦 Step 8: Checking product quantity in cart...");
    const cartQuantity = await page.locator('tr#product-1 button.disabled').textContent();
    expect(cartQuantity.trim()).toBe('4');
    console.log("✅ Product quantity in cart is correct!");
    
    
    

    await page.waitForTimeout(5000); // Final pause before closing
});
