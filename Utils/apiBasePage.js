const axios = require("axios");
const apiData = require("../data/apiData.json");
require("dotenv").config();

class ApiBase {
  getHeaders(token) {
    return {
      Cookie: `token=${token}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
    };
  }

  async sendRequest(method, URI, token, data = undefined) {
    try {
      const headers = this.getHeaders(token);
      const response = await axios({ method, url: URI, headers, data, timeout: 10000 });
      return response;
    } catch (err) {
      console.error(`Error in ${method.toUpperCase()} request:`, err);
      throw err;
    }
  }

  async getApi(URI, token) {
    return this.sendRequest("get", URI, token);
  }

  async postApi(URI, token) {
    return this.sendRequest("post", URI, token, apiData.userData);
  }

  async putApi(URI, token) {
    return this.sendRequest("put", URI, token, apiData.updateData);
  }

  async patchApi(URI, token) {
    return this.sendRequest("patch", URI, token, apiData.patchData);
  }

  async deleteApi(URI, token) {
    return this.sendRequest("delete", URI, token);
  }
}

module.exports = new ApiBase();