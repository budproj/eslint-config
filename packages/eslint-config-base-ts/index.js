module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["bud-base", "xo-typescript", "plugin:import/typescript"],
  plugins: ["@typescript-eslint", "import", "unused-imports"],
  rules: {
    "import/prefer-default-export": "off",
    "import/no-unresolved": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "alphabetize": { "order": "asc" },
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
        ]
      },
    ],
    "unused-imports/no-unused-imports-ts": "error",
    "unused-imports/no-unused-vars-ts": [
      "warn",
      { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
    ],
  },
  "settings": {
    "import/ignore": ["node_modules"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      },
    },
  },
}
