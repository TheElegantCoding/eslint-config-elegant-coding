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