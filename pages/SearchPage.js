// pages/SearchPage.js

class SearchPage {
    constructor(page) {
      this.page = page;
      this.searchInput = page.locator('#search_product');
      this.submitSearchButton = page.locator('#submit_search');
      this.productTitle = page.locator('h2.title.text-center');
      this.products = page.locator('.features_items .product');
      this.productNameLocator = '.features_items .productname';
    }
  
    async searchProduct(productName) {
      await this.searchInput.fill(productName);
      await this.submitSearchButton.click();
    }
  
    async getProductTitle() {
      return await this.productTitle.textContent();
    }
  
    async getProductNames() {
      const items = await this.products.count();
      const productNames = [];
      for (let i = 0; i < items; i++) {
        const productName = await this.page.locator(`${this.productNameLocator}:nth-child(${i + 1})`).textContent();
        productNames.push(productName);
      }
      return productNames;
    }
  }
  
  module.exports = SearchPage;
  