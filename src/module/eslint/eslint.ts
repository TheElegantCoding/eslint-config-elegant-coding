import globals from 'globals';

import { bestPractice } from './rule/best_practice';
import { disabledRule } from './rule/disabled_rule';
import { error } from './rule/error';
import { strict } from './rule/strict';
import { style } from './rule/style';
import { variable } from './rule/variable';

const eslint =
{

  languageOptions: {
    ecmaVersion: 'latest',
    globals: {
      ...globals.browser,
      ...globals.es2021,
      ...globals.node,
      document: 'readonly',
      navigator: 'readonly',
      window: 'readonly'
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    sourceType: 'module'
  },
  linterOptions: {
    reportUnusedDisableDirectives: true
  },
  rules:
  {
    ...disabledRule,
    ...style,
    ...error,
    ...strict,
    ...bestPractice,
    ...variable
  }
};

export { eslint };