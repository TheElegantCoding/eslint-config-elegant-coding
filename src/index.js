module.exports =
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
  extends: [
    './rule/style',
    './rule/best_practice',
    './rule/error',
    './rule/variable',
    './rule/import',
    './rule/strict'
  ].map(require.resolve),
  rules: {}
};