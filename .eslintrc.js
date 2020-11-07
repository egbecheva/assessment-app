module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "@babel/eslint-parser",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": [2, "always"],
        "quotes": ["error", "double"]
    }
};
