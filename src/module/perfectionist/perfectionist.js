const { perfectionistGeneralRule } = require('./rule/perfectionist_general_rule');

const perfectionist =
{
  plugins: [ 'perfectionist' ],
  rules:
  {
    ...perfectionistGeneralRule
  }
};

module.exports = { perfectionist };