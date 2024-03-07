module.exports = {

    "extends": [ "plugin:eslint-plugin-personnallinter/react" ],

    "rules": {

        // specific to this package
        "n/no-sync": "off",

        // API stuff
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unsafe-argument": "warn",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/no-unsafe-return": "warn"

    }

};