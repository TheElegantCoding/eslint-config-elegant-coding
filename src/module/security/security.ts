import { securityGeneralRule } from '@module/security/rule/security_general_rule';
import pluginSecurity from 'eslint-plugin-security';

const security =
{
  name: 'security',
  plugins:
  {
    security: pluginSecurity
  },
  rules: {
    ...securityGeneralRule
  }
};

export { security };