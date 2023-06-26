const { unicornDisabledRule } = require('./rule/unicorn_disabled_rule');
const { unicornGeneralRule } = require('./rule/unicorn_general_rule');

const eslintUnicorn =
{
  plugins: [ 'unicorn' ],
  rules: {
    ...unicornDisabledRule,
    ...unicornGeneralRule
  }
};

module.exports = { eslintUnicorn };