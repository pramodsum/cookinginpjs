module.exports = {
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 6,
        'ecmaFeatures': {
            'jsx': true,
            'experimentalObjectRestSpread': true
        }
    },
    plugins: ['ghost', 'react'],
    extends: [
        'plugin:ghost/node',
        'plugin:ghost/ember',
        'plugin:react/recommended'
    ],
    "settings": {
        "react": {
            "createClass": "createReactClass",
            "pragma": "React",
            "version": "16.0",
            "flowVersion": "0.53"
        },
        "propWrapperFunctions": ["forbidExtraProps"]
    },
    "rules": {
        "ghost/sort-imports-es6-autofix/sort-imports-es6": "off",
        "ghost/ember/use-ember-get-and-set": "off",
        "comma-dangle": 0,
        "eol-last": "error",
        "keyword-spacing": "error",
        "max-len": [
          "error",
          {
            "code": 100,
            "ignoreUrls": true
          }
        ],
        "no-console": [2, { "allow": ["warn", "error"] }],
        "no-unused-vars": [
          2,
          {
            "varsIgnorePattern": "^_",
            "argsIgnorePattern": "^_"
          }
        ],
        "object-curly-spacing": [2, "always"],
        "semi": ["error", "always"]
      }
    }
};
