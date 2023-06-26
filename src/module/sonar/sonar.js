const { sonarGeneralRule } = require('./rule/sonar_general_rule');

const sonar =
{
  plugins: [ 'sonarjs' ],
  rules: {
    ...sonarGeneralRule
  }
};

module.exports = { sonar };