import type { Linter } from 'eslint';

const stylisticDisabledRule: Linter.RulesRecord =
{
  'style/curly-newline':
  [
    'off',
    {
      minElements: 2
    }
  ],
  'style/indent-binary-ops': 'off',
  'style/jsx-sort-props': 'off'
};

export { stylisticDisabledRule };