const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",

  webpackFinal: async (config) => {
    config.resolve.alias["@components"] = path.resolve(
      __dirname,
      "../src/components"
    );
    config.resolve.alias["@utils"] = path.resolve(__dirname, "../src/utils");
    config.resolve.alias["@pages"] = path.resolve(__dirname, "../src/pages");
    config.resolve.alias["@design-system"] = path.resolve(
      __dirname,
      "../src/design-system"
    );
    return config;
  },
};
