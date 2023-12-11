import { pluginSonar } from '@global/plugin/plugin.js';

import { sonarDisabledRule } from './rule/sonar_disabled_rule.js';
import { sonarGeneralRule } from './rule/sonar_general_rule.js';

const sonar =
{
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