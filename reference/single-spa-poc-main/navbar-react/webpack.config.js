const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "bizp",
    projectName: "navbar",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    output: {
      ...defaultConfig.output,
      libraryTarget: "system",
    },
    externals: {
      ...defaultConfig.externals,
      react18: "react",
      "react-dom18": "react-dom",
    },
  });
};
