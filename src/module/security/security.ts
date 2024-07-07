import { securityDisableRule } from '@module/security/rule/security_disabled_rule';
import { securityGeneralRule } from '@module/security/rule/security_general_rule';
import pluginSecurity from 'eslint-plugin-security';

const security =
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