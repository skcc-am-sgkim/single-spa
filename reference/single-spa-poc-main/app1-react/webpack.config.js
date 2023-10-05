const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "bizp",
    projectName: "app1-react",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    output: {
      libraryTarget: "system",
    },
    externals: {
      ...defaultConfig.externals,
      react17: "react",
      "react-dom17": "react-dom",
    },
  });
};
