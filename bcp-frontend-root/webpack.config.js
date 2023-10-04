const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "bcp";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "frontend-root",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  // console.log(defaultConfig);

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.css$/,
          // eslint-disable-next-line no-undef
          include: path.resolve(__dirname, "src"),
          use: ["postcss-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });
};
