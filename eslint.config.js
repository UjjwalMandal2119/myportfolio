import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    // Never lint build output, dependencies or static assets.
    ignores: ["dist/**", "node_modules/**", "public/**", "coverage/**"],
  },
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // @vitejs/plugin-react uses the automatic JSX runtime — no import needed.
      "react/react-in-jsx-scope": "off",
      // This codebase does not use PropTypes (plain JS, no runtime type checks).
      "react/prop-types": "off",
    },
  },
]);
