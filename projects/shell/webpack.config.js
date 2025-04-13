const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const config = withModuleFederationPlugin({
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

module.exports = {
  ...config,
  output: {
    ...config.output,
    publicPath:
      process.env.NODE_ENV === "production" ? "/container/latest/" : "/",
  },
};
