const { bestPractice } = require('./rule/best_practice');
const { error } = require('./rule/error');
const { strict } = require('./rule/strict');
const { style } = require('./rule/style');
const { variable } = require('./rule/variable');

const eslint =
{
  rules:
  {
    ...style,
    ...error,
    ...strict,
    ...bestPractice,
    ...variable
  }
};

module.exports = { eslint };