const { $, browser } = require("@wdio/globals");
require("dotenv").config();
const { assert, expect } = require("chai");
const data=require("../../../data/data.json")
class SearchPage {
  locators = {
    android: {
      Searchicon: "//android.widget.FrameLayout[@content-desc='Search']",
      gotoStays:
        "//androidx.recyclerview.widget.RecyclerView[@resource-id='com.booking:id/facet_index_section_search_header']/android.widget.LinearLayout[1]",

      destination:
        '//android.widget.Button[@content-desc="Enter your destination"]',
      enterdestination:
        '//android.widget.EditText[@resource-id="com.booking:id/facet_with_bui_free_search_booking_header_toolbar_content"]',
      firstOptn:
        '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.booking:id/facet_disambiguation_content"]/android.view.ViewGroup[1]',
      flexible: "(//android.widget.TextView)[3]",
      currentmonth:
        "//android.widget.ScrollView/android.widget.HorizontalScrollView/android.view.View[1]",
      nextmonth:
        "//android.widget.ScrollView/android.widget.HorizontalScrollView/android.view.View[2]",
      dateConfirmBtn: "//android.widget.Button",
      room: '//android.widget.Button[@content-desc="1 room, 2 adults, 0 children"]',
      addRoom: '(//android.widget.Button[@content-desc="Increase"])[1]',
      roomCount: '(//android.widget.TextView[@text="2"])[1]',

      addAdult: '(//android.widget.Button[@content-desc="Increase"])[2]',
      adultCount:
        '(//android.widget.TextView[@resource-id="com.booking:id/bui_input_stepper_value"])[2]',
      addchild: '(//android.widget.Button[@content-desc="Increase"])[3]',
      selectDropdown:
        '//android.widget.ImageView[@resource-id="com.booking:id/bui_input_container_icon"]',
      childAge:
        '//android.widget.EditText[@resource-id="android:id/numberpicker_input"]',
      okBtn: '//android.widget.Button[@resource-id="android:id/button1"]',
      applyBtn:
        '//android.widget.Button[@resource-id="com.booking:id/group_config_apply_button"]',
      searchBtn:
        '//android.view.View[@content-desc="Accommodation search box"]/android.view.View/android.widget.Button',
      sort: '//android.widget.TextView[@text="Sort"]',
      hightolowFilter:
        '//android.widget.CheckedTextView[@text="Property rating (high to low)"]',
      Like: '//android.view.View[@resource-id="sr_list"]/android.view.View[1]/android.view.View[3]',
      hotel:
        '//android.view.View[@resource-id="sr_list"]/android.view.View[1]/android.view.View[1]',
      seeOptions:
        '//android.widget.FrameLayout[@resource-id="com.booking:id/property_availability_cta_facetframe"]/android.view.ViewGroup',
      selectOption:
        '//android.widget.Button[@resource-id="com.booking:id/recommended_block_reserve_button"]',
      confirm:
        '//android.widget.Button[@resource-id="com.booking:id/main_action"]',
      backBtn: '//android.widget.ImageButton[@content-desc="Navigate up"]',
      wishlistOptn: '//android.widget.FrameLayout[@content-desc="Saved"]',
      threeDots: "(//android.widget.Button)[1]",
      model:
        '//android.view.ViewGroup[@resource-id="android:id/content"]/android.view.View/android.view.View/android.view.View',
      rename: "//android.widget.ScrollView/android.view.View[1]",
      nameFeild: '//android.widget.EditText[@text="List name"]',
      name_okBtn: '//android.widget.Button[@resource-id="android:id/button1"]',
      new_name: '//android.widget.TextView[@text="Calangute"]',
      delete: "//android.widget.ScrollView/android.view.View[2]",
      confirmDelete:
        "//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button",
    },
  };

  platform() {
    return driver.isAndroid ? "android" : "ios";
  }
  get Search_icon() {
    return $(this.locators[this.platform()].Searchicon);
  }
  get goto_Stays() {
    return $(this.locators[this.platform()].gotoStays);
  }

  get destination() {
    return $(this.locators[this.platform()].destination);
  }
  get enter_destination() {
    return $(this.locators[this.platform()].enterdestination);
  }
  get first_Optn() {
    return $(this.locators[this.platform()].firstOptn);
  }
  get flexible() {
    return $(this.locators[this.platform()].flexible);
  }
  get currentmonth() {
    return $(this.locators[this.platform()].currentmonth);
  }
  get nextmonth() {
    return $(this.locators[this.platform()].nextmonth);
  }
  get dateConfirm_Btn() {
    return $(this.locators[this.platform()].dateConfirmBtn);
  }
  get room() {
    return $(this.locators[this.platform()].room);
  }

  get add_Room() {
    return $(this.locators[this.platform()].addRoom);
  }

  get room_Count() {
    return $(this.locators[this.platform()].roomCount);
  }

  get add_Adult() {
    return $(this.locators[this.platform()].addAdult);
  }
  get adult_Count() {
    return $(this.locators[this.platform()].adultCount);
  }
  get add_child() {
    return $(this.locators[this.platform()].addchild);
  }
  get select_Dropdown() {
    return $(this.locators[this.platform()].selectDropdown);
  }
  get child_Age() {
    return $(this.locators[this.platform()].childAge);
  }

  get ok_Btn() {
    return $(this.locators[this.platform()].okBtn);
  }
  get apply_Btn() {
    return $(this.locators[this.platform()].applyBtn);
  }
  get search_Btn() {
    return $(this.locators[this.platform()].searchBtn);
  }
  get sort() {
    return $(this.locators[this.platform()].sort);
  }
  get hightolow_Filter() {
    return $(this.locators[this.platform()].hightolowFilter);
  }
  get Like() {
    return $(this.locators[this.platform()].Like);
  }
  get hotel() {
    return $(this.locators[this.platform()].hotel);
  }

  get seeOptions_btn() {
    return $(this.locators[this.platform()].seeOptions);
  }
  get selectOption_btn() {
    return $(this.locators[this.platform()].selectOption);
  }
  get confirm_btn() {
    return $(this.locators[this.platform()].confirm);
  }
  get back_Btn() {
    return $(this.locators[this.platform()].backBtn);
  }

  get wishlist_Optn() {
    return $(this.locators[this.platform()].wishlistOptn);
  }
  get three_Dots() {
    return $(this.locators[this.platform()].threeDots);
  }
  get model_3optns() {
    return $(this.locators[this.platform()].model);
  }

  get rename() {
    return $(this.locators[this.platform()].rename);
  }

  get name_Feild() {
    return $(this.locators[this.platform()].nameFeild);
  }

  get name_okBtn() {
    return $(this.locators[this.platform()].name_okBtn);
  }

  get new_name() {
    return $(this.locators[this.platform()].new_name);
  }
  get delete() {
    return $(this.locators[this.platform()].delete);
  }
  get confirm_Delete() {
    return $(this.locators[this.platform()].confirmDelete);
  }

  async navigateToSearchPage() {
    expect(await this.Search_icon.isDisplayed()).to.be.true;
    await browser.pause(process.env.small_wait);
    (await this.Search_icon).click();
  }

  async enterDestination() {
    await this.goto_Stays.waitForDisplayed();
    expect(await this.goto_Stays.isDisplayed()).to.be.true;
    (await this.destination).click();
    await this.enter_destination.setValue(data.LoginPageData.destination_stay);
    (await this.first_Optn).click();
  }
  async selectDates() {
    expect(await this.flexible.isDisplayed()).to.be.true;
    (await this.flexible).click();
    expect(await this.currentmonth.isDisplayed()).to.be.true;
    (await this.currentmonth).click();
    expect(await this.nextmonth.isDisplayed()).to.be.true;
    (await this.nextmonth).click();
    (await this.dateConfirm_Btn).click();
  }

  async enterRoomDetails() {
    (await this.room).click();
    (await this.add_Room).click();
    expect(await this.room_Count.isDisplayed()).to.be.true;
    (await this.add_Adult).click();
    expect(await this.adult_Count.isDisplayed()).to.be.true;
    (await this.add_child).click();
    (await this.select_Dropdown).click();
    await browser.pause(process.env.small_wait);
    (await this.child_Age).click();
    await browser.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 500, x: 832, y: 1048 },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 1000 },
          { type: "pointerMove", duration: 500, x: -832, y: -1048 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
    (await this.ok_Btn).click();
    (await this.apply_Btn).click();
    (await this.search_Btn).click();
  }

  async selectHotelHighRange() {
    (await this.sort).click();
    await browser.pause(process.env.small_wait);
    expect(await this.hightolow_Filter.isDisplayed()).to.be.true;
    (await this.hightolow_Filter).click();
    await browser.pause(process.env.small_wait);
    (await this.Like).click();
    await browser.pause(process.env.small_wait);
    (await this.hotel).click();
    await browser.pause(process.env.small_wait);
    await browser.back();
    await browser.back();
  }

  async Wishlist() {
    (await this.wishlist_Optn).click();
    await browser.pause(process.env.small_wait);
    (await this.three_Dots).click();
    await browser.pause(process.env.small_wait);
    expect(await this.model_3optns.isDisplayed()).to.be.true;
    (await this.rename).click();
    await this.name_Feild.clearValue();
    await this.name_Feild.setValue(data.LoginPageData.wishlistName);
    (await this.name_okBtn).click();
    await browser.pause(process.env.small_wait);
    (await this.three_Dots).click();
    (await this.delete).click();
    await browser.pause(process.env.small_wait);
    (await this.confirm_Delete).click();
    await browser.pause(process.env.small_wait);
    await browser.back();
  }
}

module.exports = new SearchPage();
