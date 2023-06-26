const { eslint } = require('./module/eslint/eslint');
const { eslintImport } = require('./module/import/import');
const { perfectionist } = require('./module/perfectionist/perfectionist');
const { promise } = require('./module/promise/promise');
const { sonar } = require('./module/sonar/sonar');
const { unicorn } = require('./module/unicorn/unicorn');

const config =
{
  env:
  {
    amd: false,
    browser: true,
    es6: true,
    jasmine: false,
    mocha: false,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    ...eslintImport.plugins,
    ...unicorn.plugins,
    ...sonar.plugins,
    ...perfectionist.plugins,
    ...promise.plugins
  ],
  rules: {
    ...eslint.rules,
    ...eslintImport.rules,
    ...unicorn.rules,
    ...sonar.rules,
    ...perfectionist.rules,
    ...promise.rules
  },
  settings: {
    ...eslintImport.settings
  }
};

module.exports = config;