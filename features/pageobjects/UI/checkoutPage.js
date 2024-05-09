const expect = require("chai").expect;

class CheckoutPage {
  get firstNameInput() {
    return $('input[data-test="firstName"]');
  }
  get lastNameInput() {
    return $('input[data-test="lastName"]');
  }
  get zipCodeInput() {
    return $('input[data-test="postalCode"]');
  }
  get continueButton() {
    return $("//input[@value='CONTINUE']");
  }
  get finishButton() {
    return $("//a[text()='FINISH']");
  }
  get confirmation(){
    return $("//h2[text()='THANK YOU FOR YOUR ORDER']")
  }

  async fillCheckoutInfo(firstName, lastName, zipCode) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.zipCodeInput.setValue(zipCode);
    await this.continueButton.click();
  }

  async completeCheckout() {
    expect(await this.finishButton.isExisting()).to.be.true;
    await this.finishButton.click();
  }
 
}

module.exports = new CheckoutPage();
