// tests/searchProduct.test.js

const { test, expect } = require('@playwright/test');
const SearchPage = require('../pages/SearchPage');

test('Verify All Products Search Functionality', async ({ page }) => {
    const searchPage = new SearchPage(page);

    // Step 1: Navigate to the website
    await page.goto('http://automationexercise.com', { waitUntil: 'domcontentloaded' });

    // Step 2: Verify the homepage title
    await expect(page).toHaveTitle(/Automation Exercise/);

    // Step 3: Click on 'Products'
    await page.locator('a[href="/products"]').click();

    // Step 4: Verify 'All Products' page is visible
    const productTitle = await searchPage.getProductTitle();
    expect(productTitle.trim().toLowerCase()).toBe("all products".toLowerCase());

    // Step 5: Search for 'Jeans'
    await searchPage.searchProduct('Jeans');

    // Step 6: Verify 'Searched Products' page is visible
    const searchResultsTitle = await searchPage.getProductTitle();
    expect(searchResultsTitle.trim().toLowerCase()).toBe("searched products".toLowerCase());

    // Step 7: Verify all products are related to 'Jeans'
    const productNames = await searchPage.getProductNames();
    productNames.forEach(product => {
        expect(product.toLowerCase()).toContain('jeans');

    console.log("Showing that all products are related to 'Jeans'");

    });
});
