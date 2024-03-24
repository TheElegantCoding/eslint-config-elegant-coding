import { stylisticDisabledRule } from '@module/stylistic/rule/stylistic_disabled_rule';
import { stylisticGeneralRule } from '@module/stylistic/rule/stylistic_general_rule';
import pluginStylistic from '@stylistic/eslint-plugin';

const stylistic =
{
  name: 'stylistic',
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