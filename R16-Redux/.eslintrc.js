module.exports = {
    "extends": "airbnb",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
          "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "comma-dangle": ["error", "never"],
        "semi": ["error", "never"],
      },
    "env": {
        "browser": true,
        "node": true
      }
};