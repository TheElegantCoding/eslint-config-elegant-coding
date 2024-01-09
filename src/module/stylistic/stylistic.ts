import { stylisticDisabledRule } from '@module/stylistic/rule/stylistic_disabled_rule';
import { stylisticGeneralRule } from '@module/stylistic/rule/stylistic_rule';
import pluginStylistic from '@stylistic/eslint-plugin';

const stylistic =
{
  plugins:
  {
    style: pluginStylistic
  },
  rules:
  {
    ...stylisticGeneralRule,
    ...stylisticDisabledRule
  }
};

export { stylistic };