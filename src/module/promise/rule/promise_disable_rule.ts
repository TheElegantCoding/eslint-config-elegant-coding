import type { Linter } from 'eslint';

const promiseDisabledRule: Linter.RulesRecord =
{
  'promise/no-native': 'off',
  'promise/spec-only': 'off'
};

export { promiseDisabledRule };