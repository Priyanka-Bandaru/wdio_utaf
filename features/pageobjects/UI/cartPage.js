class CartPage {
  get checkoutButton() {
    return $("//a[text()='CHECKOUT']");
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

module.exports = new CartPage();
