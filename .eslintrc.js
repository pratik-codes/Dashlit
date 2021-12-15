module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      typescript: {
        alwaysTryTypes: true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },

      // use <root>/path/to/folder/tsconfig.json
      typescript: {
        directory: "path/to/folder"
      },

      // Multiple tsconfigs (Useful for monorepos)

      // use a glob pattern
      typescript: {
        directory: "packages/*/tsconfig.json"
      },

      // use an array
      typescript: {
        directory: [
          "packages/module-a/tsconfig.json",
          "packages/module-b/tsconfig.json"
        ]
      },

      // use an array of glob patterns
      typescript: {
        directory: [
          "packages/*/tsconfig.json",
          "other-packages/*/tsconfig.json"
        ]
      }
    }
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    semi: 0,
    quotes: 0
  }
};
