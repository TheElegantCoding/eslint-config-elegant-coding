import { pluginSecurity } from '@global/plugin/plugin';
import { securityGeneralRule } from '@module/security/rule/security_general_rule';

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