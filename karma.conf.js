// karma.conf.js
// https://karma-runner.github.io/1.0/config/configuration-file.html

var webpackConfig = require("@vue/cli-service/webpack.config.js");

module.exports = function(config) {
  config.set({
    frameworks: ["mocha"],

    files: ["src/**/*.spec.js"],

    preprocessors: {
      "**/*.spec.js": ["webpack", "sourcemap"]
    },

    webpack: webpackConfig,

    reporters: ["spec"],
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false
  });
};
