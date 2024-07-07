import { solidDisabledRule } from '@module/solid/rule/solid_disabled_rule';
import { solidGeneralRule } from '@module/solid/rule/solid_general_rule';
import pluginSolid from 'eslint-plugin-solid';

import type { Linter } from 'eslint';

const solid: Linter.FlatConfig =
{
  name: 'solid',
  plugins:
  {
    solid: pluginSolid as unknown as Plugin
  },
  rules:
  {
    ...solidGeneralRule,
    ...solidDisabledRule
  }
};

export { solid };