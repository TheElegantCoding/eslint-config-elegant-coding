import type { Linter } from 'eslint';

const regexDisabledRule: Linter.RulesRecord =
{
  'regex/require-unicode-sets-regexp': 'off'
};

export { regexDisabledRule };