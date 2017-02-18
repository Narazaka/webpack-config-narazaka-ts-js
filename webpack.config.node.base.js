const webpack = require("webpack");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        enforce: "pre",
        test:   /\.js$/,
        loader: ["eslint-loader"],
      },
      {
        enforce: "pre",
        test:   /\.ts$/,
        use: ["tslint-loader"],
      },
      {
        test:    /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test:    /\.ts$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options:     {
              compilerOptions: {
                rootDir:        "src",
                outDir:         "dist",
                declarationDir: "dist",
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  target: "node",
  entry:  {},
  output: {
    path:          path.resolve("."),
    filename:      "dist/lib/[name].js",
    library:       null,
    libraryTarget: "commonjs2",
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
  devtool:   "source-map",
  resolve:   {extensions: [".ts", ".js"]},
  externals: /^(?!^\.\/)/,
};
