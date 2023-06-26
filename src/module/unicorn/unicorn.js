const { unicornDisabledRule } = require('./rule/unicorn_disabled_rule');
const { unicornGeneralRule } = require('./rule/unicorn_general_rule');

const unicorn =
{
  plugins: [ 'unicorn' ],
  rules: {
    ...unicornDisabledRule,
    ...unicornGeneralRule
  }
};

module.exports = { unicorn };