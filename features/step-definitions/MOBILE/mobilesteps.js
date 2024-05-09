const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const chai = require("chai");
const LoginPage = require("../../pageobjects/MOBILE/login.page");
const SearchPage=require("../../pageobjects/MOBILE/search.page");
const ProfilePage=require("../../pageobjects/MOBILE/profile.page");
const flightPage=require("../../pageobjects/MOBILE/flights.page");
require('dotenv').config();
const data=require("../../../data/data.json");

Given(/^I am navigating login page of Booking.com application$/, async() => {
	await LoginPage.Gotologinpage();
});

When(/^I login with <username> and <password>$/, async() => {
  await LoginPage.skipLoginPage();
});

Then(/^I can see landing page$/, async() => {
  await LoginPage.verifyingLandingPage();
});

When(/^I click on search and navigate to search page$/, async() => {
	await SearchPage.navigateToSearchPage();
});


Then(/^I can search for stay$/, async() => {
	await SearchPage.enterDestination();
  await SearchPage.selectDates();	
  await SearchPage.enterRoomDetails(); 
});


Then(/^I can sort the hotel list and add to my wishlist$/, async() => {
  await SearchPage.selectHotelHighRange();	
 
});

Then(/^I can verify WishList$/, async() => {
	await SearchPage.Wishlist();
});


Then(/^I can perform profile actions$/, async() => {
await ProfilePage.GotoProfilePage();
});


Then(/^I can search for flights$/, async() => {
	await flightPage.GotoFlights();
});

When(/^I login with invalid <username> and <password>$/, async() => {
  await LoginPage.loginIvalidCredentials(
    process.env.Invalid_username,
    process.env.Invalid_password,
    process.env.Incorrect_username,
    process.env.Incorrect_password,
    process.env.valid_username,
    process.env.valid_password
  );
});
