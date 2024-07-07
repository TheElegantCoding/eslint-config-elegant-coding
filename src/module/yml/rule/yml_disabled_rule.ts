import type { Linter } from 'eslint';

const ymlDisabledRule: Linter.RulesRecord =
{
  'yml/key-name-casing': 'off',
  'yml/sort-keys': 'off',
  'yml/sort-sequence-values': 'off'
};

export { ymlDisabledRule };