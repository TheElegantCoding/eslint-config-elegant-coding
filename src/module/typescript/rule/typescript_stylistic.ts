/* eslint-disable ts/no-non-null-assertion */
import { error } from '@module/javascript/rule/error';

import type { Linter } from 'eslint';

const typescriptStylistic: Linter.RulesRecord =
{
  'no-empty-function': 'off',
  'ts/adjacent-overload-signatures': 'error',
  'ts/array-type': 'error',
  'ts/ban-tslint-comment': 'error',
  'ts/class-literal-property-style': 'error',
  'ts/consistent-generic-constructors': 'error',
  'ts/consistent-indexed-object-style': 'error',
  'ts/consistent-type-assertions': 'error',
  'ts/consistent-type-definitions': [ 'error', 'type' ],
  'ts/no-empty-function': error['no-empty-function']!,
  'ts/no-inferrable-types': 'error',
  'ts/prefer-for-of': 'error',
  'ts/prefer-function-type': 'error',
  'ts/prefer-namespace-keyword': 'error'
};

export { typescriptStylistic };