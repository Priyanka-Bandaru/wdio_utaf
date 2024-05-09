module.exports = class Page {
  open(path) {
    browser.maximizeWindow();
    return browser.url(`https://www.saucedemo.com/${path}`);
  }
};
