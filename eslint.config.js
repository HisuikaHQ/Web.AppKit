import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintReact from "@eslint-react/eslint-plugin";
import storybook from "eslint-plugin-storybook";

export default tseslint.config(
  { ignores: ["dist/", "storybook-static/", "node_modules/", "büng/", "TestApp/"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintReact.configs["recommended-typescript"],
  ...storybook.configs["flat/recommended"],
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true, argsIgnorePattern: "^_" }],
    },
  },
);
