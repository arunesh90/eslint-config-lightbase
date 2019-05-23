module.exports = {
  extends: ["@react-native-community", "plugin:react/recommended", "plugin:prettier/recommended"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: false,
      },
    ],
    curly: 1,
    "@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
    "default-case": ["error", { commentPattern: "^no default$" }],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "no-console": "off",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "no-useless-return": "error",
    "prefer-destructuring": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/display-name": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
    "react/no-array-index-key": "warn",
    "react/no-unused-state": "error",
  },
};
