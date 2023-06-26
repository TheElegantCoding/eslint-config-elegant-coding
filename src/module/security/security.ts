import { securityGeneralRule } from './rule/security_general_rule';

const security =
{
  plugins: [ 'security' ],
  rules: {
    ...securityGeneralRule
  }
};

export { security };