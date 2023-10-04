const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "bcp",
    projectName: "frontend-snb",
    webpackConfigEnv,
    argv,
  });

  const cssRule = {
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
  };

  // console.log(defaultConfig);

  return merge(defaultConfig, cssRule);
};
