const { $, driver, browser } = require("@wdio/globals");
require('dotenv').config();
const { assert, expect } = require("chai");
const data=require("../../../data/data.json")
class flightPage {
  locators = {
    android: {
      flights: '//android.widget.TextView[@resource-id="com.booking:id/facet_entry_point_item_label" and @text="Flights"]',
      roundTrip:'//android.widget.TextView[@text="Round-trip"]',
      oneway:'//android.widget.TextView[@text="One-way"]',
      multiCity:'//android.widget.TextView[@text="Multi-city"]',
      from:'//android.widget.Button[@content-desc="Departing from HYD Rajiv Gandhi International Airport"]',
      cancel:'//android.view.View[@content-desc="Remove HYD Hyderabad"]',
      fromoptn:'//androidx.recyclerview.widget.RecyclerView[@resource-id="com.booking:id/destination_recycler_view"] ',
      destination:'//android.widget.Button[@content-desc="Flying to "]',
      destinationValue:'//android.widget.EditText[@resource-id="com.booking:id/search_destination_query_input"]',
      destinationoptn:'//androidx.recyclerview.widget.RecyclerView[@resource-id="com.booking:id/destination_recycler_view"]', 
   date:'(//android.widget.Button)[4]',
   selectDate :'(//android.widget.TextView)[11]',
   done:'//android.widget.Button[@resource-id="com.booking:id/flights_calendar_cta"]',
   search:'(//android.widget.Button)[6]'
  },
  };

  platform() {
    return driver.isAndroid ? "android" : "ios";
  }
  get flights() {
    return $(this.locators[this.platform()].flights);
  }
  get roundTrip() {
    return $(this.locators[this.platform()].roundTrip);
  }
  get oneway() {
    return $(this.locators[this.platform()].oneway);
  }
  get multiCity() {
    return $(this.locators[this.platform()].multiCity);
  }
  get from() {
    return $(this.locators[this.platform()].from);
  }
  get cancel() {
    return $(this.locators[this.platform()].cancel);
  }
  get fromoptn() {
    return $(this.locators[this.platform()].fromoptn);
  }
  get destination() {
    return $(this.locators[this.platform()].destination);
  }
  get destination_value() {
    return $(this.locators[this.platform()].destinationValue);
  }
  
  get destinationoptn() {
    return $(this.locators[this.platform()].destinationoptn);
  }
  get date() {
    return $(this.locators[this.platform()].date);
  }
  
  
  get selectDate() {
    return $(this.locators[this.platform()].selectDate);
  }
  get done() {
    return $(this.locators[this.platform()].done);
  }
  get search() {
    return $(this.locators[this.platform()].search);
  }
   
  async GotoFlights() {
    expect(await this.flights.isDisplayed()).to.be.true;
    await browser.pause(process.env.small_wait);
    (await this.flights).click();
    expect(await this.roundTrip.isDisplayed()).to.be.true;
   // expect(await this.multiCity.isDisplayed()).to.be.true;
    expect(await this.oneway.isDisplayed()).to.be.true;
    await browser.pause(process.env.small_wait);
    (await this.roundTrip).click(); 
    // (await this.from).click(); 
    // (await this.cancel).click(); 
    //(await this.fromoptn).click(); 
    (await this.destination).click();
    await browser.pause(process.env.small_wait);
    (await this.destination_value).setValue(data.LoginPageData.destination_flight);
    await browser.pause(process.env.small_wait);
    (await this.destinationoptn).click(); 
    await browser.pause(process.env.small_wait);
    (await this.date).click(); 
    (await this.selectDate).click(); 
    await browser.pause(process.env.small_wait);
    (await this.done).click(); 
    await browser.pause(process.env.small_wait);
    // (await this.search).click(); 
    // await browser.back();
      
    
  }

 
  

}

module.exports = new flightPage();
