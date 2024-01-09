const typescriptBestPractice =
{
  'ts/array-type': 'error',
  'ts/await-thenable': 'error',
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
  'ts/ban-tslint-comment': 'error',
  'ts/ban-types': 'error',
  'ts/class-literal-property-style': 'error',
  'ts/consistent-generic-constructors': 'error',
  'ts/consistent-indexed-object-style': 'error',
  'ts/consistent-type-assertions': 'error',
  'ts/consistent-type-definitions': [ 'error', 'type' ],
  'ts/consistent-type-exports': 'error',
  'ts/consistent-type-imports': [
    'error',
    {
      fixStyle: 'separate-type-imports',
      prefer: 'type-imports'
    }
  ],
  'ts/member-ordering': 'error',
  'ts/method-signature-style': 'error',
  'ts/naming-convention': [
    'error',
    {
      format: null,
      modifiers: [ 'requiresQuotes' ],
      selector: [
        'classProperty',
        'objectLiteralProperty',
        'typeProperty',
        'classMethod',
        'objectLiteralMethod',
        'typeMethod',
        'accessor',
        'enumMember'
      ]
    }
  ],
  'ts/no-base-to-string': 'error',
  'ts/no-confusing-non-null-assertion': 'error',
  'ts/no-confusing-void-expression': 'error',
  'ts/no-duplicate-enum-values': 'error',
  'ts/no-duplicate-type-constituents': 'error',
  'ts/no-dynamic-delete': 'error',
  'ts/no-empty-interface': 'error',
  'ts/no-explicit-any': 'error',
  'ts/no-extra-non-null-assertion': 'error',
  'ts/no-extraneous-class': 'error',
  'ts/no-floating-promises': 'error',
  'ts/no-for-in-array': 'error',
  'ts/no-import-type-side-effects': 'error',
  'ts/no-inferrable-types': 'error',
  'ts/no-invalid-void-type': 'error',
  'ts/no-meaningless-void-operator': 'error',
  'ts/no-misused-new': 'error',
  'ts/no-misused-promises': [
    'error',
    {
      checksVoidReturn: {
        arguments: false,
        attributes: false
      }
    }
  ],
  'ts/no-mixed-enums': 'error',
  'ts/no-namespace': 'error',
  'ts/no-non-null-asserted-nullish-coalescing': 'error',
  'ts/no-non-null-asserted-optional-chain': 'error',
  'ts/no-require-imports': 'error',
  'ts/no-this-alias': 'error',
  'ts/no-unnecessary-boolean-literal-compare': 'error',
  'ts/no-unnecessary-condition': 'error',
  'ts/no-unnecessary-qualifier': 'error',
  'ts/no-unnecessary-type-arguments': 'error',
  'ts/no-unnecessary-type-assertion': 'error',
  'ts/no-unnecessary-type-constraint': 'error',
  'ts/no-unsafe-argument': 'error',
  'ts/no-unsafe-assignment': 'error',
  'ts/no-unsafe-call': 'error',
  'ts/no-unsafe-declaration-merging': 'error',
  'ts/no-unsafe-enum-comparison': 'error',
  'ts/no-unsafe-member-access': 'error',
  'ts/no-unsafe-return': 'error',
  'ts/no-unsafe-unary-minus': 'error',
  'ts/no-useless-empty-export': 'error',
  'ts/no-useless-template-literals': 'error',
  'ts/no-var-requires': 'error',
  'ts/non-nullable-type-assertion-style': 'error',
  'ts/parameter-properties': 'error',
  'ts/prefer-as-const': 'error',
  'ts/prefer-for-of': 'error',
  'ts/prefer-function-type': 'error',
  'ts/prefer-includes': 'error',
  'ts/prefer-literal-enum-member': 'error',
  'ts/prefer-namespace-keyword': 'error',
  'ts/prefer-nullish-coalescing': [ 'error', { ignoreTernaryTests: false }],
  'ts/prefer-optional-chain': 'error',
  'ts/prefer-readonly': 'error',
  'ts/prefer-reduce-type-parameter': 'error',
  'ts/prefer-regexp-exec': 'error',
  'ts/prefer-return-this-type': 'error',
  'ts/prefer-string-starts-ends-with': 'error',
  'ts/promise-function-async': 'error',
  'ts/require-array-sort-compare': 'error',
  'ts/restrict-plus-operands': 'error',
  'ts/restrict-template-expressions': 'error',
  'ts/switch-exhaustiveness-check': 'error',
  'ts/triple-slash-reference': 'error',
  'ts/unbound-method': 'error',
  'ts/unified-signatures': 'error'
};

export { typescriptBestPractice };