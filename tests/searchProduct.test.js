// tests/searchProduct.test.js

const { test, expect } = require('@playwright/test');

test('Verify All Products Search Functionality', async ({ page }) => {
    // Step 1: Navigate to the website
    await page.goto('http://automationexercise.com', { waitUntil: 'domcontentloaded' });

    // Step 2: Verify the homepage title
    await expect(page).toHaveTitle(/Automation Exercise/);

    // Step 3: Click on 'Products'
    await page.locator('a[href="/products"]').click();

    // Step 4: Verify 'All Products' page is visible
    const productTitle = await page.locator('h2.title.text-center').textContent();
    // Perform a case-insensitive comparison
    expect(productTitle.trim().toLowerCase()).toBe("all products".toLowerCase()); 

    // Step 5: Search for 'Jeans'
    await page.locator('#search_product').fill('Jeans');
    await page.locator('#submit_search').click();

    // Step 6: Verify 'Searched Products' page is visible
    const searchResultsTitle = await page.locator('h2.title.text-center').textContent();
    expect(searchResultsTitle.trim().toLowerCase()).toBe("searched products".toLowerCase());

    // Step 7: Verify all products are related to 'Jeans'
    const items = await page.locator('.features_items .product').count();
    for (let i = 0; i < items; i++) {
        const productName = await page.locator(`.features_items .product:nth-child(${i + 1}) .productname`).textContent();
        expect(productName.toLowerCase()).toContain('jeans');
    }

    console.log("All products are related to 'Jeans'");
});
