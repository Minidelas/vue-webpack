import axios from "axios";

const SERVER_URL = "http://localhost:3000";

axios.interceptors.response.use(
  function(response) {
    // console.log("INTERCEPTOR success");
    // console.log(response);
    return response;
  },

  function(error) {
    console.log("INTERCEPTOR error");
    if (error.response) {
      console.log(error.response);
    }
  }
);

export default {
  get: function(url) {
    return axios.get(SERVER_URL + url);
  },

  post: function(url, body) {
    return axios.post(SERVER_URL + url, body);
  }
};
