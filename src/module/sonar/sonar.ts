import { sonarDisabledRule } from '@module/sonar/rule/sonar_disabled_rule';
import { sonarGeneralRule } from '@module/sonar/rule/sonar_general_rule';
import pluginSonar from 'eslint-plugin-sonarjs';

import type { Linter } from 'eslint';

const sonar: Linter.FlatConfig =
{
  name: 'sonar',
  plugins:
  {
    sonar: pluginSonar as unknown as Plugin
  },
  rules:
  {
    ...sonarGeneralRule,
    ...sonarDisabledRule
  }
};

export { sonar };