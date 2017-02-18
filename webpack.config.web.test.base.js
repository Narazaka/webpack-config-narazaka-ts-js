const clone = require("clone");
const config = clone(require("./webpack.config.web.base"));
const path = require("path");

if (!config.module.postLoaders) config.module.postLoaders = [];
config.module.postLoaders.push({
  test:    /\.js|\.ts$/,
  include: path.resolve("./src/"),
  loader:  "istanbul-instrumenter",
});
config.devtool = "inline-source-map";
config.module.rules[3].use[1].options.compilerOptions.sourceMap = false;
config.module.rules[3].use[1].options.compilerOptions.inlineSourceMap = true;
delete config.entry;

module.exports = config;
