import type { Linter } from 'eslint';

const promiseDisabledRule: Linter.RulesRecord =
{
  'promise/no-native': 'off'
};

export { promiseDisabledRule };