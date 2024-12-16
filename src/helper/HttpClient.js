import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
console.log(baseUrl);
const HttpClient = {
  async request(method, url, data = null) {
    try {
      const response = await axios({
        method: method,
        url: baseUrl + url,
        data: data,
      });
      return response.data; // Return the response data
    } catch (error) {
      console.error("HTTP Request Error:", error);
      throw error.response?.data || error.message;
    }
  },

  get(url) {
    return this.request("GET", url);
  },

  post(url, data = {}) {
    return this.request("POST", url, data);
  },

  put(url, data = {}) {
    return this.request("PUT", url, data);
  },

  delete(url) {
    return this.request("DELETE", url);
  },
};

export default HttpClient;
