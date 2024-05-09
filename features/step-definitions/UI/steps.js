const { Given, When, Then } = require('@wdio/cucumber-framework');
const expect = require("chai").expect;
const LoginPage = require('../../pageobjects/UI/login.page');
const ProductPage = require('../../pageobjects/UI//productPage')
const CartPage = require('../../pageobjects/UI/cartPage')
const CheckoutPage = require('../../pageobjects/UI/checkoutPage')

const pages = {
    login: LoginPage
}
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
    expect(await LoginPage.swagLabsLogo.isDisplayed()).to.be.true;
    const loginPageTitle = await browser.getTitle();
    expect(loginPageTitle).to.equal('Swag Labs');
});


When(/^I add all items to the cart$/, async() => {
	await ProductPage.addAllItemsToCart()
});


When(/^I proceed to checkout$/, async() => {
	await ProductPage.openCart()
    await CartPage.checkout()
});

When(/^I fill the checkout information with '(.*)', '(.*)', and '(.*)'$/, async(firstName, lastName, zipCode) => {
    await CheckoutPage.fillCheckoutInfo(firstName, lastName, zipCode)
});

When(/^I complete the checkout process$/,async () => {
    await CheckoutPage.completeCheckout()
});

Then(/^I should see the order confirmation page$/, async() => {
    expect(await CheckoutPage.confirmation.isDisplayed()).to.be.true;
});


