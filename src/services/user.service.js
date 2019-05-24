import $_axios from "@/axios-config";

export default {
  getUsers: function() {
    return $_axios.get("/users");
  },

  getUser: function(id) {
    return $_axios.get(`/users/${id}`);
  },

  searchUser: function(name) {
    return $_axios.get(`/users/search?name=${name}`);
  }
};
