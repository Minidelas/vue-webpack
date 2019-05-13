module.exports = {
  root: true,

  env: {
    node: true,
    mocha: true
  },

  extends: ["plugin:vue/essential", "@vue/prettier"],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    "vue/require-v-for-key": "off"
  },

  parserOptions: {
    parser: "babel-eslint"
  }
};
