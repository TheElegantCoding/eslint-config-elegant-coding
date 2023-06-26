const { promiseGeneralRule } = require('./rule/promise_general_rule');

const promise =
{
  plugins: [ 'promise' ],
  rules: {
    ...promiseGeneralRule
  }
};

module.exports = { promise };