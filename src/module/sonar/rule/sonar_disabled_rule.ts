import type { Linter } from 'eslint';

const sonarDisabledRule: Linter.RulesRecord =
{
  'sonarjs/no-duplicate-string': 'off'
};

export { sonarDisabledRule };