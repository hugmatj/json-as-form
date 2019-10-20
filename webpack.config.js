const path = require("path");
const WEBPACK_DEV_SERVER = process.env.WEBPACK_DEV_SERVER;

let externals = {
  react: "react",
  "react-dom": "reactDOM"
};

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
    app: path.resolve(__dirname, "example/app.js")
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: chunkData => {
      // console.log(chunkData.chunk.name)
      return chunkData.chunk.name === "index"
        ? "dist/index.js"
        : "example/index.js";
    },
    library: "json-as-form",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: WEBPACK_DEV_SERVER ? {} : externals,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader?cacheDirectory"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "example"),
    compress: true,
    port: 9000
  }
};
