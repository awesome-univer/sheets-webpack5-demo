module.exports = {
  presets: [["@babel/preset-env"]],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-transform-parameters",
    "@babel/plugin-transform-classes",
  ],
};
