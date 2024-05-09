const axios = require('axios');
const apiData=require("../data/apiData.json");
require("dotenv").config();
class AuthenticationPage {
  async generateToken() {
    try {
      const response = await axios.post('https://restful-booker.herokuapp.com/auth', apiData.data, {
        headers: {
          'Content-Type': 'application/json'
        }, timeout: 10000
      });
      const token = response.data.token;
      return token;
     
     
    } catch (error) {
      console.error('Error generating token:', error);
     
    }
  }
}

module.exports = new AuthenticationPage();
