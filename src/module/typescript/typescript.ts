/* eslint-disable ts/no-unsafe-assignment */
import { parserTs, pluginTs } from '@global/plugin/plugin.js';

import { typescriptBestPractice } from './rule/typescript_best_practice.js';
import { typescriptDisabledRule } from './rule/typescript_disabled_rule.js';
import { typescriptOverrides } from './rule/typescript_overrides.js';
import { typescriptStyle } from './rule/typescript_style.js';

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