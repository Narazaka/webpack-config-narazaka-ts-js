const webpack = require("webpack");
const config = require("./webpack.config.node.base");

config.target = "web";
config.output.filename = "web/lib/[name].js";
config.output.libraryTarget = "umd";

config.plugins.push(
  new webpack.ProvidePlugin({
    BrowserFS: "bfsGlobal",
    process:   "processGlobal",
    Buffer:    "bufferGlobal",
  })
);
config.resolve.alias = {
  "eventEmitter/EventEmitter": "wolfy87-eventemitter/EventEmitter",
  fs:                          "browserfs/dist/shims/fs.js",
  buffer:                      "browserfs/dist/shims/buffer.js",
  path:                        "browserfs/dist/shims/path.js",
  processGlobal:               "browserfs/dist/shims/process.js",
  bufferGlobal:                "browserfs/dist/shims/bufferGlobal.js",
  bfsGlobal:                   require.resolve("browserfs"),
};
config.node = {
  process: false,
  Buffer:  false,
};

module.exports = config;
