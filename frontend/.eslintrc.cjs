module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './src',
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages', {
      js: 'always',
      ts: 'never',
    }],
    'max-len': 'off',
    'no-console': 'off',
    'no-restricted-syntax': ['error', 'BinaryExpression[operator="of"]'],
    'no-underscore-dangle': ['error', { allow: ['_id', '__dirname', '__filename'] }],
  },
};
