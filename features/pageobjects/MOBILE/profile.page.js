const { $, driver, browser } = require("@wdio/globals");
require("dotenv").config();
const { assert, expect } = require("chai");
const { faker } = require("@faker-js/faker");
const fs = require("fs");
const utils = require("../../../Utils/utilites");
let Fname = faker.person.firstName();
let Lname = faker.person.lastName();
let num = faker.phone.number();
let city = faker.location.city();
let pin = faker.finance.pin(6);
let companyName = faker.company.buzzNoun();
let address = faker.location.streetAddress();
let VAT = faker.helpers.fromRegExp(/[A-Z0-9]{4}-[A-Z0-9]{4}/);
let userData = utils.readJson(`${process.cwd()}\\data\\data.json`);

class ProfilePage {
  locators = {
    android: {
      profileOptn: "//android.widget.FrameLayout[@content-desc='Profile']",
      userName:
        "//android.widget.TextView[@resource-id='com.booking:id/facet_profile_header_name']",
      manageAccount: '//android.widget.TextView[@text="Manage your account"]',
      displayName:
        '//android.widget.EditText[@resource-id="com.booking:id/edit_profile_public_detail_user_name"]',
      DOB: '//android.widget.EditText[@resource-id="com.booking:id/edit_profile_public_detail_user_dob"]',
      firstName:
        '//android.widget.EditText[@resource-id="com.booking:id/edit_profile_personal_detail_first_name"]',
      lastName:
        '//android.widget.EditText[@resource-id="com.booking:id/edit_profile_personal_detail_last_name"]',
      mobilenumber:
        '//android.widget.EditText[@resource-id="com.booking:id/edit_profile_personal_detail_phone"]',
      city: '//android.widget.EditText[@resource-id="com.booking:id/edit_profile_personal_detail_city"]',
      pincode:
        '//android.widget.EditText[@resource-id="com.booking:id/edit_profile_personal_detail_postcode"]',
      business:
        '//android.widget.Switch[@resource-id="com.booking:id/edit_profile_personal_detail_business_switch"]',
      companyName:
        '//android.widget.EditText[@resource-id="com.booking:id/edit_profile_personal_detail_company_name"]',
      companyAddress:
        '//android.widget.EditText[@resource-id="com.booking:id/edit_profile_personal_detail_company_address"]',
      companyCity:
        '//android.widget.EditText[@resource-id="com.booking:id/edit_profile_personal_detail_company_city"]',
      companyCountry:
        '//android.widget.AutoCompleteTextView[@resource-id="com.booking:id/edit_profile_personal_detail_company_country"]',
      companyPincode:
        '//android.widget.EditText[@resource-id="com.booking:id/edit_profile_personal_detail_company_postcode"]',
      companyNumber:
        '//android.widget.EditText[@resource-id="com.booking:id/edit_profile_personal_detail_company_phone"]',
      companyVAT:
        '//android.widget.EditText[@resource-id="com.booking:id/edit_profile_personal_detail_company_vat"]',
      signOut:
        '//android.widget.Button[@resource-id="com.booking:id/edit_profile_sign_off_action"]',
      confirmSignout:
        '//android.widget.Button[@resource-id="android:id/button1"]',
      signInBtn: "//android.widget.Button[@text='Sign in']",
    },
  };

  platform() {
    return driver.isAndroid ? "android" : "ios";
  }
  get profile_Optn() {
    return $(this.locators[this.platform()].profileOptn);
  }
  get userName() {
    return $(this.locators[this.platform()].userName);
  }
  get manageAccount() {
    return $(this.locators[this.platform()].manageAccount);
  }
  get displayName() {
    return $(this.locators[this.platform()].displayName);
  }
  get DOB() {
    return $(this.locators[this.platform()].DOB);
  }
  get firstName() {
    return $(this.locators[this.platform()].firstName);
  }
  get lastName() {
    return $(this.locators[this.platform()].lastName);
  }
  get mobilenumber() {
    return $(this.locators[this.platform()].mobilenumber);
  }
  get city() {
    return $(this.locators[this.platform()].city);
  }
  get pincode() {
    return $(this.locators[this.platform()].pincode);
  }
  get business() {
    return $(this.locators[this.platform()].business);
  }
  get companyName() {
    return $(this.locators[this.platform()].companyName);
  }
  get companyAddress() {
    return $(this.locators[this.platform()].companyAddress);
  }
  get companyCity() {
    return $(this.locators[this.platform()].companyCity);
  }
  get companyCountry() {
    return $(this.locators[this.platform()].companyCountry);
  }
  get companyNumber() {
    return $(this.locators[this.platform()].companyNumber);
  }
  get companyPincode() {
    return $(this.locators[this.platform()].companyPincode);
  }
  get companyVAT() {
    return $(this.locators[this.platform()].companyVAT);
  }
  get signOut() {
    return $(this.locators[this.platform()].signOut);
  }
  get confirmSignout() {
    return $(this.locators[this.platform()].confirmSignout);
  }

  get signInBtn() {
    return $(this.locators[this.platform()].signInBtn);
  }

  async GotoProfilePage() {
    await browser.pause(process.env.small_wait);
    expect(await this.profile_Optn.isDisplayed()).to.be.true;
    await browser.pause(process.env.small_wait);
    (await this.profile_Optn).click();
    expect(await this.userName.isDisplayed()).to.be.true;
    (await this.manageAccount).click();

    userData.fakerData.Fname = Fname;
    userData.fakerData.Lname = Lname;
    userData.fakerData.number = num;

    await this.displayName.setValue(Fname);
    await this.firstName.setValue(Fname);
    await this.lastName.setValue(Lname);
    await this.mobilenumber.setValue(num);
    await browser.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 500, x: 870, y: 500 },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 1000 },
          { type: "pointerMove", duration: 500, x: -500, y: -500 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
    userData.fakerData.city = city;
    userData.fakerData.pin = pin;
    userData.fakerData.companyName = companyName;

    await this.city.setValue(city);
    await this.pincode.setValue(pin);
    (await this.business).click();
    await this.companyName.setValue(companyName);
    await browser.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 500, x: 870, y: 500 },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 1000 },
          { type: "pointerMove", duration: 500, x: -500, y: -500 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
    userData.fakerData.address = address;
    await this.companyAddress.setValue(address);
    await this.companyCity.setValue(city);
    await this.companyCountry.setValue(Fname);
    await this.companyNumber.setValue(num);
    await this.companyPincode.setValue(pin);
    await browser.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 500, x: 870, y: 500 },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 1000 },
          { type: "pointerMove", duration: 500, x: -500, y: -500 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
    userData.fakerData.VAT = VAT;
    await this.companyVAT.setValue(VAT);
    (await this.signOut).click();
    await browser.pause(process.env.small_wait);
    (await this.confirmSignout).click();
    await browser.pause(process.env.small_wait);

    expect(await this.signInBtn.isDisplayed()).to.be.true;
    fs.writeFileSync(
      `${process.cwd()}\\Data\\data.json`,
      JSON.stringify(userData)
    );
  }
}

module.exports = new ProfilePage();
