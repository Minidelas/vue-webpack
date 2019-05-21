import axios from "axios";

const SERVER_URL = "http://localhost:3000";

export default {
  get: function(url) {
    return axios.get(SERVER_URL + url);
  },

  post: function(url, body) {
    return axios.post(SERVER_URL + url, body);
  }
};
