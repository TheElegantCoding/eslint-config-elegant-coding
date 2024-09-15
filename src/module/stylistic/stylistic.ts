import { stylisticDisabledRule } from '@module/stylistic/rule/stylistic_disabled_rule';
import { stylisticGeneralRule } from '@module/stylistic/rule/stylistic_general_rule';
import pluginStylistic from '@stylistic/eslint-plugin';

import type { Linter } from 'eslint';

const stylistic: Linter.Config =
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