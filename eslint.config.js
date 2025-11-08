import { globalIgnores } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import stylistic from "@stylistic/eslint-plugin";
import tseslint from "typescript-eslint";

export default tseslint.config(
  globalIgnores(["dist/", "node_modules/", "**/.tmp/"]),

  // Базовые настройки для всех JS/TS файлов
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.es2022 },
    },
    rules: { "prefer-const": "error", "no-var": "error", "no-unused-vars": "off" },
  },

  // Настройки для TypeScript файлов (только app)
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: { parserOptions: { project: "./tsconfig.app.json" } },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
    },
  },

  // React специфичные настройки
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: { "react-hooks": reactHooks },
    rules: { ...reactHooks.configs.recommended.rules },
  },

  // React Refresh
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: { "react-refresh": reactRefresh },
    rules: { "react-refresh/only-export-components": ["warn", { allowConstantExport: true }] },
  },

  // ✅ Исключаем ESLint config из проверки TypeScript
  {
    files: ["eslint.config.js"],
    languageOptions: { sourceType: "module", globals: { ...globals.node } },
    rules: {
      // Отключаем все TypeScript правила для ESLint config
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
    },
  },

  // Настройки для конфигурационных файлов
  {
    files: ["vite.config.ts"],
    languageOptions: { parserOptions: { project: "./tsconfig.node.json" }, globals: { ...globals.node } },
    rules: { "@typescript-eslint/no-explicit-any": "off", "@typescript-eslint/no-var-requires": "off" },
  },

  // Stylistic правила
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { "@stylistic": stylistic },
    rules: {
      ...stylistic.configs.customize({ indent: 2, quotes: "double", semi: true, jsx: true }).rules,
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/array-bracket-spacing": ["error", "never"],
    },
  },
);
