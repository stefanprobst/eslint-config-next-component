module.exports = {
  root: true,
  parserOptions: {
    project: ["./tsconfig.json"],
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  plugins: ["simple-import-sort"],
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-restricted-globals": [
      "error",
      {
        name: "isNaN",
        message: "Use Number.isNaN instead.",
      },
    ],
    "no-var": ["error"],
    "prefer-const": ["error"],
    "sort-imports": "off",
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "generic",
      },
    ],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "import/first": "error",
    "import/namespace": "off",
    "import/newline-after-import": "error",
    "import/no-anonymous-default-export": "error",
    "import/no-duplicates": "error",
    "import/no-named-as-default": "off",
    "import/order": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/no-autofocus": [
      "warn",
      {
        ignoreNonDOM: true,
      },
    ],
    "jsx-a11y/no-onchange": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
