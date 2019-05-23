import $_axios from "@/axios-config";

export default {
  getUsers: function() {
    return $_axios.get("/users");
  }
};
