import pluginStylistic from '@stylistic/eslint-plugin';

import { stylisticDisabledRule } from './rule/stylistic_disabled_rule.js';
import { stylisticRule } from './rule/stylistic_rule.js';

const stylistic =
{
  plugins:
  {
    style: pluginStylistic
  },
  rules:
  {
    ...stylisticRule,
    ...stylisticDisabledRule
  }
};

export { stylistic };