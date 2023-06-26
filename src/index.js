const { eslint } = require('./module/eslint/eslint');
const { eslintImport } = require('./module/import/import');
const { eslintUnicorn } = require('./module/unicorn/unicorn');

const config =
{
  env:
  {
    browser: true,
    node: true,
    es6: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    ...eslintImport.plugins, ...eslintUnicorn.plugins
  ],
  settings: {
    ...eslintImport.settings
  },
  rules: {
    ...eslint.rules,
    ...eslintImport.rules,
    ...eslintUnicorn.rules
  }
};

module.exports = config;