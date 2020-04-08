module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
    },
    extends: [
        // https://eslint.org/docs/rules/
        "eslint:recommended",
        // Vue.js 公式のA〜Cのルールを適用
        "plugin:vue/recommended",
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
        "@nuxtjs/eslint-config-typescript",
    ],
    plugins: [
        "vue"
    ],
    rules: {
        // require semicolons
        "semi": ["error", "always"],
        // allow console
        "no-console": "off",
        // allow many attributes per line
        "vue/max-attributes-per-line": "off",
        // disallow a space before function parenthesis
        "space-before-function-paren": 'off',
        // disallow multiple spaces if(x  === "x") {}
        "no-multi-spaces": "error",
        // disallow multiple empty lines
        "no-multiple-empty-lines": ["error", {"max": 1}],
        // disallow spacing between function identifiers and their invocations (alert ('x');)
        "func-call-spacing": ["error", "never"],
        // disallow var
        "no-var": "error",
        "space-in-parens": ["error", "never"],
        // require spacing before and after comma
        "comma-spacing": "error",
        // disallow spacing before and after index of array (hogehoge[ x ];)
        "computed-property-spacing": "error",
        // require spacing before and after keywords
        "keyword-spacing": "error",
        // require 2 spacing for indent
        "indent": ["error", 2],
        // require double-quotes
        "quotes": "off",
        "@typescript-eslint/quotes": "error",
        // require define array with T[]
        "@typescript-eslint/array-type": ["error", {"options": "array-simple"}]
      }
};