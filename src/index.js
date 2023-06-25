const { bestPractice } = require('./rule/best_practice');
const { error } = require('./rule/error');
const { eslintImport } = require('./rule/import');
const { strict } = require('./rule/strict');
const { style } = require('./rule/style');
const { variable } = require('./rule/variable');

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
  settings:
  {
    ...eslintImport.settings
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    ...eslintImport.plugins
  ],
  rules: {
    ...style,
    ...error,
    ...eslintImport.rules,
    ...strict,
    ...bestPractice,
    ...variable
  }
};

module.exports = config;