import type { Linter } from 'eslint';

const variable: Linter.RulesRecord =
{
  'block-scoped-var': 'error',
  'one-var': [ 'error', 'never' ],
  'require-atomic-updates': [ 'error', { allowProperties: true }],
  'vars-on-top': 'error'
};

export { variable };