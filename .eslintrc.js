module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    // allow reassigning param
    'prefer-template': 'off',
    'func-names': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'no-spaced-comment': 'off',
    'spaced-comment': 'off',
    'no-param-reassign': [2, { props: false }],
    'linebreak-style': ['error', 'unix'],
    'import/extensions': [
      'error',
      {
        js: 'always',
      },
    ],
  },
};
