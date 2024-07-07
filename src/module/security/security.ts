import { securityDisableRule } from '@module/security/rule/security_disabled_rule';
import { securityGeneralRule } from '@module/security/rule/security_general_rule';
import pluginSecurity from 'eslint-plugin-security';

import type { Linter } from 'eslint';

const security: Linter.FlatConfig =
{
  name: 'security',
  plugins:
  {
    security: pluginSecurity
  },
  rules:
  {
    ...securityGeneralRule,
    ...securityDisableRule
  }
};

export { security };