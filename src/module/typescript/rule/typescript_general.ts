import { bestPractice } from '@module/javascript/rule/best_practice';
import { error } from '@module/javascript/rule/error';

import type { Linter } from 'eslint';

const typescriptGeneralRule: Linter.RulesRecord =
{
  'consistent-return': 'off',
  'default-param-last': 'off',
  'init-declarations': 'off',
  'max-params': 'off',
  'no-dupe-class-members': 'off',
  'no-duplicate-imports': 'off',
  'no-invalid-this': 'off',
  'no-loop-func': 'off',
  'no-magic-numbers': 'off',
  'no-redeclare': 'off',
  'no-restricted-imports': 'off',
  'no-shadow': 'off',
  'no-unused-expressions': 'off',
  'no-use-before-define': 'off',
  'ts/consistent-return': bestPractice['consistent-return'] ?? 'off',
  'ts/consistent-type-exports': 'error',
  'ts/consistent-type-imports':
  [
    'error',
    {
      fixStyle: 'separate-type-imports',
      prefer: 'type-imports'
    }
  ],
  'ts/default-param-last': bestPractice['default-param-last'] ?? 'off',
  'ts/max-params': bestPractice['max-params'] ?? 'off',
  'ts/member-ordering': 'error',
  'ts/method-signature-style': 'error',
  'ts/naming-convention':
  [
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
  'ts/no-confusing-non-null-assertion': 'error',
  'ts/no-dupe-class-members': error['no-dupe-class-members'] ?? 'off',
  'ts/no-import-type-side-effects': 'error',
  'ts/no-invalid-this': error['no-invalid-this'] ?? 'off',
  'ts/no-loop-func': error['no-loop-func'] ?? 'off',
  'ts/no-magic-numbers': error['no-magic-numbers'] ?? 'off',
  'ts/no-redeclare': error['no-redeclare'] ?? 'off',
  'ts/no-require-imports': 'error',
  'ts/no-restricted-imports': error['no-restricted-imports'] ?? 'off',
  'ts/no-shadow': error['no-shadow'] ?? 'off',
  'ts/no-unnecessary-parameter-property-assignment': 'error',
  'ts/no-unnecessary-qualifier': 'error',
  'ts/no-unsafe-unary-minus': 'error',
  'ts/no-unused-expressions': [ 'error', { enforceForJSX: true } ],
  'ts/no-use-before-define': error['no-use-before-define'] ?? 'off',
  'ts/no-useless-empty-export': 'error',
  'ts/only-throw-error': 'error',
  'ts/parameter-properties': 'error',
  'ts/prefer-find': 'error',
  'ts/prefer-readonly': 'error',
  'ts/prefer-regexp-exec': 'error',
  'ts/promise-function-async': 'error',
  'ts/require-array-sort-compare': 'error',
  'ts/switch-exhaustiveness-check': 'error'
};

export { typescriptGeneralRule };