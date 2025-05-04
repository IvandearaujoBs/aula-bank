module.exports = {
    root: true,
    env: {
      browser: false,
      es2023: true,
      node: true,
      jest: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      project: "./tsconfig.json",
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
    ],
    plugins: ["@typescript-eslint", "prettier", "markdown", "import"],
    rules: {
      // ESLint Rules
      "no-unused-vars": "warn",
      "no-console": "warn",
      "no-debugger": "error",
  
      // TypeScript Rules
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/explicit-module-boundary-types": "off",
  
      // Prettier Rules
      "prettier/prettier": [
        "error",
        {
          semi: false,
          singleQuote: true,
          trailingComma: "es5",
          printWidth: 120,
          tabWidth: 2,
        },
      ],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
        },
      ],
    },
    overrides: [
      {
        files: ["**/*.md"],
        processor: "markdown/markdown",
      },
    ],
    ignorePatterns: ["build", "coverage", "dist", "node_modules"],
  };