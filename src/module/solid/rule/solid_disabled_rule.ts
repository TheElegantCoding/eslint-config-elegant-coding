import type { Linter } from 'eslint';

const solidDisabledRule: Linter.RulesRecord =
{
  'solid/prefer-classlist': 'off',
  'solid/self-closing-comp': 'off'
};

export { solidDisabledRule };