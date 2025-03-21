// pages/CartPage.js

class CartPage {
    constructor(page) {
      this.page = page;
      this.cartQuantityInput = page.locator('input#quantity');
      this.addToCartButton = page.locator('button:has-text("Add to cart")');
      this.viewCartButton = page.locator('#cartModal a:has-text("View Cart")');
      this.cartProduct = page.locator('tr#product-1 button.disabled');
    }
  
    async setQuantity(quantity) {
      await this.cartQuantityInput.fill(quantity);
    }
  
    async clickAddToCart() {
      await this.addToCartButton.click();
    }
  
    async clickViewCart() {
      await this.viewCartButton.click();
    }
  
    async getCartQuantity() {
      return await this.cartProduct.textContent();
    }
  }
  
  module.exports = CartPage;
  