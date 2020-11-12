module.exports = {
  plugins: ["formatjs"],
  rules: {
    "formatjs/enforce-description": ["error", "literal"],
    "formatjs/enforce-default-message": ["error", "literal"],
    "formatjs/no-camel-case": "error",
    "formatjs/enforce-id": [
      "error",
      { "idInterpolationPattern": "[sha512:contenthash:base64:6]" }
    ],
  },
}
