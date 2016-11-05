const webpack = require("webpack");

module.exports = {
  module: {
    preLoaders: [
      {
        test:   /\.js$/,
        loader: "eslint",
      },
      {
        test:   /\.ts$/,
        loader: "tslint",
      },
    ],
    loaders: [
      {
        test:    /\.js$/,
        loader:  "babel",
        exclude: /node_modules/,
      },
      {
        test:    /\.ts$/,
        loader:  "babel!ts",
        exclude: /node_modules/,
      },
      {
        test:   /\.json$/,
        loader: "json",
      },
    ],
  },
  target: "node",
  entry:  {},
  ts:     {
    compilerOptions: {
      rootDir:        "src",
      outDir:         "dist",
      declarationDir: "dist",
    },
  },
  output: {
    path:          __dirname,
    filename:      "dist/lib/[name].js",
    library:       null,
    libraryTarget: "commonjs2",
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
  devtool: "source-map",
  resolve: {extensions: ["", ".ts", ".js"]},
};
