import { sonarGeneralRule } from './rule/sonar_general_rule';

const sonar =
{
  plugins: [ 'sonarjs' ],
  rules: {
    ...sonarGeneralRule
  }
};

export { sonar };