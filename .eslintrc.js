module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // allow IProps
    '@typescript-eslint/interface-name-prefix': 'off',
    // false positives; ts will catch real violations of this
    '@typescript-eslint/no-use-before-define': 'off',
    // unused import = error
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    // prevent " and ' from erroring, but error on > and } which are less common
    '@typescript-eslint/ban-ts-ignore': 'off',
    'no-console': 'error',
    '@typescript-eslint/camelcase': 'off',
    // prevent " and ' from erroring, but error on > and } which are less common
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    // no need for propTypes, these are type checked
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', //
      },
    },
  ],
};
