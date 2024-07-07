import type { Linter } from 'eslint';

const typescriptDisabledRule: Linter.RulesRecord =
{
  'ts/explicit-function-return-type': 'off',
  'ts/explicit-member-accessibility': 'off',
  'ts/explicit-module-boundary-types': 'off',
  'ts/init-declarations': 'off',
  'ts/prefer-enum-initializers': 'off',
  'ts/prefer-readonly-parameter-types': [ 'off', { ignoreInferredTypes: true }],
  'ts/strict-boolean-expressions': 'off',
  'ts/typedef': 'off'
};

export { typescriptDisabledRule };