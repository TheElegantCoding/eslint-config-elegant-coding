/* eslint-disable ts/no-non-null-assertion */
import { style } from '@module/javascript/rule/style';

import type { Linter } from 'eslint';

const typescriptStylisticTypeChecked: Linter.RulesRecord =
{
  'dot-notation': 'off',
  'ts/dot-notation': style['dot-notation']!,
  'ts/non-nullable-type-assertion-style': 'error',
  'ts/prefer-nullish-coalescing': [ 'error', { ignoreTernaryTests: false } ],
  'ts/prefer-optional-chain': 'error',
  'ts/prefer-string-starts-ends-with': 'error'
};

export { typescriptStylisticTypeChecked };