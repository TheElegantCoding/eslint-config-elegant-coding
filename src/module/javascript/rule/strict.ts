import type { Linter } from 'eslint';

const strict: Linter.RulesRecord =
{
  strict: [ 'error', 'never' ]
};

export { strict };