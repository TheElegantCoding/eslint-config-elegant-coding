import { error } from '@module/javascript/rule/error';

const typescriptStrict =
{
  'no-array-constructor': 'off',
  'no-loss-of-precision': 'off',
  'no-unused-vars': 'off',
  'no-useless-constructor': 'off',
  'ts/ban-ts-comment': [
    'error',
    {
      minimumDescriptionLength: 3,
      'ts-check': false,
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true
    }
  ],
  'ts/ban-types': 'error',
  'ts/no-array-constructor': error['no-array-constructor'],
  'ts/no-duplicate-enum-values': 'error',
  'ts/no-dynamic-delete': 'error',
  'ts/no-explicit-any': 'error',
  'ts/no-extra-non-null-assertion': 'error',
  'ts/no-extraneous-class': 'error',
  'ts/no-invalid-void-type': 'error',
  'ts/no-loss-of-precision': error['no-loss-of-precision'],
  'ts/no-misused-new': 'error',
  'ts/no-namespace': 'error',
  'ts/no-non-null-asserted-nullish-coalescing': 'error',
  'ts/no-non-null-asserted-optional-chain': 'error',
  'ts/no-non-null-assertion': 'error',
  'ts/no-this-alias': 'error',
  'ts/no-unnecessary-type-constraint': 'error',
  'ts/no-unsafe-declaration-merging': 'error',
  'ts/no-unused-vars': error['no-unused-vars'],
  'ts/no-useless-constructor': error['no-useless-constructor'],
  'ts/no-var-requires': 'error',
  'ts/prefer-as-const': 'error',
  'ts/prefer-literal-enum-member': 'error',
  'ts/triple-slash-reference': 'error',
  'ts/unified-signatures': 'error'
};

export { typescriptStrict };