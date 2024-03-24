import { solidDisabledRule } from '@module/solid/rule/solid_disabled_rule';
import { solidGeneralRule } from '@module/solid/rule/solid_general_rule';
import pluginSolid from 'eslint-plugin-solid';

const solid =
{
  name: 'solid',
  plugins:
  {
    solid: pluginSolid
  },
  rules:
  {
    ...solidGeneralRule,
    ...solidDisabledRule
  }
};

export { solid };