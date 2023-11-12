import { bestPractice } from '../../eslint/rule/best_practice';
import { error } from '../../eslint/rule/error';
import { style } from '../../eslint/rule/style';

const typescriptStyle =
{
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/default-param-last': bestPractice['default-param-last'],
  '@typescript-eslint/dot-notation': style['dot-notation'],
  '@typescript-eslint/max-params': bestPractice['max-params'],
  '@typescript-eslint/no-array-constructor': error['no-array-constructor'],
  '@typescript-eslint/no-dupe-class-members': error['no-dupe-class-members'],
  '@typescript-eslint/no-empty-function': error['no-empty-function'],
  '@typescript-eslint/no-implied-eval': error['no-implied-eval'],
  '@typescript-eslint/no-invalid-this': error['no-invalid-this'],
  '@typescript-eslint/no-loop-func': error['no-loop-func'],
  '@typescript-eslint/no-loss-of-precision': error['no-loss-of-precision'],
  '@typescript-eslint/no-magic-numbers': error['no-magic-numbers'],
  '@typescript-eslint/no-redeclare': error['no-redeclare'],
  '@typescript-eslint/no-restricted-imports': error['no-restricted-imports'],
  '@typescript-eslint/no-shadow': error['no-shadow'],
  '@typescript-eslint/no-throw-literal': error['no-throw-literal'],
  '@typescript-eslint/no-unused-expressions': [ 'error', { enforceForJSX: true }],
  '@typescript-eslint/no-unused-vars': error['no-unused-vars'],
  '@typescript-eslint/no-use-before-define': error['no-use-before-define'],
  '@typescript-eslint/no-useless-constructor': error['no-useless-constructor'],
  '@typescript-eslint/require-await': bestPractice['require-await'],
  '@typescript-eslint/return-await': error['no-return-await'],
  'default-param-last': 'off',
  'dot-notation': 'off',
  'init-declarations': 'off',
  'max-params': 'off',
  'no-array-constructor': 'off',
  'no-dupe-class-members': 'off',
  'no-duplicate-imports': 'off',
  'no-empty-function': 'off',
  'no-implied-eval': 'off',
  'no-invalid-this': 'off',
  'no-loop-func': 'off',
  'no-loss-of-precision': 'off',
  'no-magic-numbers': 'off',
  'no-redeclare': 'off',
  'no-restricted-imports': 'off',
  'no-return-await': 'off',
  'no-shadow': 'off',
  'no-throw-literal': 'off',
  'no-unused-expressions': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
  'require-await': 'off'
};

export { typescriptStyle };