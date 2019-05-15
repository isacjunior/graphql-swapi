module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": ["standard", "plugin:@typescript-eslint/recommended"],
  'env': {
    'es6': true
  },
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  "rules": {
    "comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/member-delimiter-style": ["error", {
        "multiline": {
            "delimiter": "comma",
            "requireLast": true
        },
    }]
  }
}
