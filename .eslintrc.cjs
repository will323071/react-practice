import js  from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import {defineConfig, globalIgnores} from "eslint/config";
import { rule } from "postcss";

export default defineConfig([
globalIgnores(["dist"]),
{
  files: ["**/*.jsx", "**/*.js"],
  extends: [
    js.configs.recommended,
    reactHooks.configs["recommended-latest"],
    reactRefresh.configs.vite,
  ],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parserOptions: {
      ecmaVersion: "latest",
      ecmaFeatures: {
        jsx: true,
      },
      sourceType: "module",
    },
  },
  rules: {
    "no-unused-vars": false
  },
},
]);