const webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  path = require("path");

const SRC = path.resolve(__dirname, "src"),
  NODE_MODULES = path.resolve(__dirname, "node_modules"),
  JS = path.resolve(__dirname, "src/js"),
  BUILD = path.resolve(__dirname, "build");

const loaderUtils = require("loader-utils");
isDevelopment = process.env.NODE_ENV == "development";

function getLocalIdent(context, localIdentName, localName, options) {
  const fileNameOrFolder = context.resourcePath.match(
    /index\.module\.(css|scss|sass)$/
  )
    ? "[folder]"
    : "[name]";
  const className = loaderUtils.interpolateName(
    context,
    fileNameOrFolder + "_" + localName,
    options
  );
  return className.replace(".module_", "_");
}

const config = {
  context: path.resolve(__dirname),
  devtool: "source-map",
  entry: "./src/js/index.js",
  output: {
    pathinfo: true,
    filename: "[name][hash].js",
    publicPath: "/",
    path: BUILD
  },
  resolve: {
    extensions: [".jsx", ".js", ".json", ".scss"],
    modules: [SRC, NODE_MODULES]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|svg|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{ loader: "file-loader" }]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{ loader: "url-loader", options: { limit: 10000 } }]
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                getLocalIdent: getLocalIdent
              },
              sourceMap: isDevelopment
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // camelCase: true,
              // localsConvention: 'camelCase',
              sourceMap: isDevelopment
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css"
    }),
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: "./public/index.html"
        },
        {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
        }
      )
    ),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
      }
    })
  ]
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(new UglifyJSPlugin({ sourceMap: true }));
} else {
  config.devServer = {
    port: 3000,
    host: "0.0.0.0",
    hot: true,
    inline: true,
    disableHostCheck: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    }
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
