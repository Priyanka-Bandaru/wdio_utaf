const { $, driver, browser } = require("@wdio/globals");
require("dotenv").config();
const { assert, expect } = require("chai");
const data = require("../../../data/data.json");
class LoginPage {
  locators = {
    android: {
      Title: "//android.widget.ImageView[@content-desc='Booking.com']",
      notification_text:
        '//android.widget.TextView[@text="Please turn on notifications"]',
      notification: "(//android.widget.Button)[2]",
      allow:
        '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]',
      signinPage:
        '//android.widget.TextView[@text="Sign in for easier access to your trip details"]',
      closeSignInPage:
        '//android.widget.ImageButton[@content-desc="Navigate up"]',
      continuemail: '//android.widget.TextView[@text="Continue with email"]',
      emailPage:
        '(//android.widget.TextView[@text="Enter your email address"])[1]',
      Email: "//android.widget.EditText",
      EnterEmailMsg:
        '//android.widget.TextView[@text="Enter an email address to continue"]',
      accountdiableMsg: '//android.widget.TextView[@text="Account disabled"]',
      continueBtn: "//android.widget.Button",
      passwordPage:
        '//android.widget.TextView[@resource-id="com.booking:id/identity_header_title"]',
      password:
        '//android.widget.EditText[@resource-id="com.booking:id/identity_text_input_edit_text"]',
      pwdErrorMsg:
        '//android.widget.TextView[@resource-id="com.booking:id/textinput_error"]',
      signinBtn: '//android.widget.TextView[@text="Sign in"]',
      startSearching: "//android.widget.Button",
      landingPageTitle:
        '//android.view.ViewGroup[@resource-id="com.booking:id/facet_with_bui_booking_header_toolbar"]/android.widget.LinearLayout[1]/android.widget.ImageView',
      landingPageTitle1:
        '//android.widget.TextView[@resource-id="com.booking:id/bui_title_title"]',
      moreOptions: '//android.widget.TextView[@text="More for you"]',
      learnMorePopUp: "//android.widget.TextView[@text='Learn more']",
      learnMoreBackBtn:
        "//android.widget.ImageButton[@content-desc='Navigate up']",
    },
  };
  platform() {
    return driver.isAndroid ? "android" : "ios";
  }
  get Main_title() {
    return $(this.locators[this.platform()].Title);
  }
  get notification_text() {
    return $(this.locators[this.platform()].notification_text);
  }
  get notification_ok_btn() {
    return $(this.locators[this.platform()].notification);
  }
  get allow_btn() {
    return $(this.locators[this.platform()].allow);
  }
  get signinPage() {
    return $(this.locators[this.platform()].signinPage);
  }
  get closeSignInPage() {
    return $(this.locators[this.platform()].closeSignInPage);
  }
  get continuemail_btn() {
    return $(this.locators[this.platform()].continuemail);
  }
  get emailPage() {
    return $(this.locators[this.platform()].emailPage);
  }
  get Email_feild() {
    return $(this.locators[this.platform()].Email);
  }
  get EnterEmailMsg() {
    return $(this.locators[this.platform()].EnterEmailMsg);
  }
  get accountdiableMsg() {
    return $(this.locators[this.platform()].accountdiableMsg);
  }
  get continue_Btn() {
    return $(this.locators[this.platform()].continueBtn);
  }
  get passwordPage() {
    return $(this.locators[this.platform()].passwordPage);
  }
  get password_feild() {
    return $(this.locators[this.platform()].password);
  }
  get pwdErrorMsg() {
    return $(this.locators[this.platform()].pwdErrorMsg);
  }
  get signin_Btn() {
    return $(this.locators[this.platform()].signinBtn);
  }
  get landingPage_Title() {
    return $(this.locators[this.platform()].landingPageTitle);
  }
  get landingPage_Title1() {
    return $(this.locators[this.platform()].landingPageTitle1);
  }

  get startSearching_btn() {
    return $(this.locators[this.platform()].startSearching);
  }
  get more_Options() {
    return $(this.locators[this.platform()].moreOptions);
  }
  get learnMorePopUp() {
    return $(this.locators[this.platform()].learnMorePopUp);
  }
  get learnMoreBackBtn() {
    return $(this.locators[this.platform()].learnMoreBackBtn);
  }

  async Gotologinpage() {
    //await browser.pause(process.env.small_wait);
    expect(await this.Main_title.isDisplayed()).to.be.true;
    await browser.pause(process.env.small_wait);
    // let notificationText = await this.notification_text.getText();
    // expect(notificationText).to.contain(data.LoginPageData.notification);
    expect(await this.notification_ok_btn.isDisplayed()).to.be.true;
    (await this.notification_ok_btn).click();
    (await this.allow_btn).click();
  }

  async skipLoginPage() {
    await this.closeSignInPage.click();
  }

  async loginfunction(username, password) {
    // (await this.continuemail_btn).click();
    // await this.Email_feild.waitForDisplayed();
    // expect(await this.Email_feild.isDisplayed()).to.be.true;
    // await this.Email_feild.setValue(username);
    // await browser.pause(process.env.small_wait);
    // await this.continue_Btn.click();
    // await browser.pause(process.env.medium_wait);
    // expect(await this.password_feild.isDisplayed()).to.be.true;
    // await this.password_feild.setValue(password);
    // expect(await this.signin_Btn.isDisplayed()).to.be.true;
    // await this.signin_Btn.click();
    await browser.pause(process.env.medium_wait);
    //   try {
    //     const isDisplayed = await this.startSearching_btn.isDisplayed();
    //     if (isDisplayed) {
    //         // If the element is visible, click on it
    //         await this.startSearching_btn.click();
    //     } else {
    //         console.log('Element is not visible, skipping click action.');
    //     }
    // } catch (error) {
    //     console.error('An error occurred:', error);
    // }
  }
  async loginIvalidCredentials(
    Invalidusername,
    Invalidpassword,
    Incorrectusername,
    IncorrectPassword,
    Cusername,
    Cpassword
  ) {
    await browser.pause(process.env.small_wait);
    (await this.continuemail_btn).click();
    await browser.pause(process.env.small_wait);
    await this.Email_feild.waitForDisplayed();
    expect(await this.Email_feild.isDisplayed()).to.be.true;
    await this.Email_feild.setValue(Invalidusername);
    await browser.pause(process.env.small_wait);
    await this.continue_Btn.click();
    expect(await this.EnterEmailMsg.isDisplayed()).to.be.true;
    (await this.Email_feild).clearValue();
    await this.Email_feild.setValue(Incorrectusername);
    await this.continue_Btn.click();
    await browser.pause(process.env.small_wait);
    expect(await this.accountdiableMsg.isDisplayed()).to.be.true;
    await browser.pause(process.env.small_wait);
    await browser.back();
    await this.Email_feild.setValue(Incorrectusername);
    (await this.Email_feild).clearValue();
    await this.Email_feild.setValue(Cusername);
    await this.continue_Btn.click();
    await browser.pause(process.env.small_wait);
    expect(await this.password_feild.isDisplayed()).to.be.true;
    await this.password_feild.setValue(Invalidpassword);
    expect(await this.signin_Btn.isDisplayed()).to.be.true;
    await this.signin_Btn.click();
    await browser.pause(process.env.small_wait);
    expect(await this.pwdErrorMsg.isDisplayed()).to.be.true;
    await this.password_feild.clearValue();
    await browser.pause(process.env.small_wait);
    await this.password_feild.setValue(IncorrectPassword);
    expect(await this.signin_Btn.isDisplayed()).to.be.true;
    await this.signin_Btn.click();
    await browser.pause(process.env.small_wait);
    expect(await this.pwdErrorMsg.isDisplayed()).to.be.true;
    await this.password_feild.clearValue();
    await browser.pause(process.env.small_wait);
    await this.password_feild.setValue(Cpassword);
    await this.signin_Btn.click();
  }
  async verifyingLandingPage() {
    await this.learnMorePopUp.click();
    await this.learnMoreBackBtn.click();
    expect(await this.landingPage_Title.isDisplayed()).to.be.true;
    // const actualText = await this.landingPage_Title.getText();
    // console.log(actualText);
    // expect(actualText).to.equal(data.LoginPageData.travel);
    await browser.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 500, x: 1000, y: 500 },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 1000 },
          { type: "pointerMove", duration: 500, x: -500, y: -500 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
    await browser.pause(process.env.medium_wait);
    const actualText1 = await this.more_Options.getText();
    console.log(actualText1);
    expect(actualText1).to.equal(data.LoginPageData.more);
  }
}

module.exports = new LoginPage();
