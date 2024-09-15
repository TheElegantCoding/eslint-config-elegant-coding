import { bestPractice } from '@module/javascript/rule/best_practice';
import { disabledRule } from '@module/javascript/rule/disabled_rule';
import { error } from '@module/javascript/rule/error';
import { strict } from '@module/javascript/rule/strict';
import { style } from '@module/javascript/rule/style';
import { variable } from '@module/javascript/rule/variable';
import globals from 'globals';

import type { Linter } from 'eslint';

const javascript: Linter.Config =
{
  languageOptions:
  {
    ecmaVersion: 2022,
    globals:
    {
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
      ecmaVersion: 2022,
      sourceType: 'module'
    },
    sourceType: 'module'
  },
  linterOptions: {
    reportUnusedDisableDirectives: true
  },
  name: 'javascript',
  rules:
  {
    ...strict,
    ...disabledRule,
    ...style,
    ...error,
    ...bestPractice,
    ...variable
  }
};

export { javascript };