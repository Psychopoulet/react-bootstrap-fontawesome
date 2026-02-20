// deps

    // externals
    const { defineConfig } = require("eslint/config");
    const personnallinter = require("eslint-plugin-personnallinter");
    const globals = require("globals");

// module

module.exports = defineConfig({
    "plugins": {
        personnallinter
    },
    "extends": [ personnallinter.configs["react"] ],
    "languageOptions": {
        "globals": {
            ...personnallinter.configs["react"].languageOptions.globals,
            ...globals.browser
        }
    }
});
