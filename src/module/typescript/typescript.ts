import { typescriptBestPractice } from '@module/typescript/rule/typescript_best_practice';
import { typescriptDisabledRule } from '@module/typescript/rule/typescript_disabled_rule';
import { typescriptOverrides } from '@module/typescript/rule/typescript_overrides';
import { typescriptStyle } from '@module/typescript/rule/typescript_style';
import pluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';

const typescript =
[
  {
    files: [ '**/*.?([cm])[jt]s?(x)' ],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: [ './tsconfig.json' ],
        sourceType: 'module'
      }
    },
    name: 'typescript',
    plugins: {
      ts: pluginTs
    },
    rules: {
      ...typescriptDisabledRule,
      ...typescriptStyle,
      ...typescriptBestPractice
    }
  },
  ...typescriptOverrides
];

export { typescript };