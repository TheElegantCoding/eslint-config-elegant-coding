import { sonarDisabledRule } from './rule/sonar_disabled_rule';
import { sonarGeneralRule } from './rule/sonar_general_rule';

const sonar =
{
  plugins: [ 'sonarjs' ],
  rules: {
    ...sonarGeneralRule,
    ...sonarDisabledRule
  }
};

export { sonar };