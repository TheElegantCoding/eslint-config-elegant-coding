import { sonarDisabledRule } from '@module/sonar/rule/sonar_disabled_rule';
import { sonarGeneralRule } from '@module/sonar/rule/sonar_general_rule';
import pluginSonar from 'eslint-plugin-sonarjs';

const sonar =
{
  name: 'sonar',
  plugins:
  {
    sonarjs: pluginSonar
  },
  rules:
  {
    ...sonarGeneralRule,
    ...sonarDisabledRule
  }
};

export { sonar };