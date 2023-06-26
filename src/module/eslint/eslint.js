const { bestPractice } = require('./rule/best_practice');
const { disabledRule } = require('./rule/disabled_rule');
const { error } = require('./rule/error');
const { strict } = require('./rule/strict');
const { style } = require('./rule/style');
const { variable } = require('./rule/variable');

const eslint =
{
  rules:
  {
    ...disabledRule,
    ...style,
    ...error,
    ...strict,
    ...bestPractice,
    ...variable
  }
};

module.exports = { eslint };