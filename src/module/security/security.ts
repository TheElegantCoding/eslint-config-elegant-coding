/* eslint-disable ts/no-unsafe-assignment */
import { pluginSecurity } from '@global/plugin/plugin';

import { securityGeneralRule } from './rule/security_general_rule.js';

const security =
{
  plugins:
  {
    security: pluginSecurity
  },
  rules: {
    ...securityGeneralRule
  }
};

export { security };