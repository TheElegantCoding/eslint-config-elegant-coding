import type { Linter } from 'eslint';

const stylisticDisabledRule: Linter.RulesRecord =
{
  'style/indent-binary-ops': 'off',
  'style/jsx-sort-props': 'off'
};

export { stylisticDisabledRule };