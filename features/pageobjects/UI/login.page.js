const expect = require("chai").expect;
const Page = require('./page');
class LoginPage extends Page {
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }
    get swagLabsLogo(){
        return $(".app_logo")
    }

    async login (username, password) {
        expect(await this.inputUsername.isExisting()).to.be.true;
        expect(await this.inputPassword.isExisting()).to.be.true;
        expect(await this.btnSubmit.isExisting()).to.be.true;
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('v1/');
    }
}

module.exports = new LoginPage();
