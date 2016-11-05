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
config.ts.compilerOptions.sourceMap = false;
config.ts.compilerOptions.inlineSourceMap = true;
delete config.entry;

module.exports = config;
