module.exports = {
  extends: ["xo-react", "xo-react/space"],
  rules: {
    "react/jsx-tag-spacing": [
      "error",
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "never",
      },
    ],
  },
}
