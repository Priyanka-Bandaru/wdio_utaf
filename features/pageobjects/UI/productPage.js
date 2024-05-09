class ProductPage {
  get addToCartButtons() {
    return $$("button.btn_primary.btn_inventory");
  }
  get shoppingCartLink() {
    return $("a.shopping_cart_link");
  }

  async addAllItemsToCart() {
    const buttons = await this.addToCartButtons;
    for (const button of buttons) {
      await button.click();
    }
  }

  async openCart() {
    await this.shoppingCartLink.click();
  }
}

module.exports = new ProductPage();
