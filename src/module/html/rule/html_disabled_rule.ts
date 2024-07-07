import type { Linter } from 'eslint';

const htmlDisabledRule: Linter.RulesRecord =
{
  'html/no-restricted-attr-values': 'off',
  'html/no-restricted-attrs': 'off',
  'html/require-attrs': 'off',
  'html/require-button-type': 'off'
};

export { htmlDisabledRule };