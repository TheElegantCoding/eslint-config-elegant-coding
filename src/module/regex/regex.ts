import { regexBestPracticeRule } from '@module/regex/rule/regex_best_practice_rule';
import { regexErrorRule } from '@module/regex/rule/regex_error_rule';
import { regexStylisticRule } from '@module/regex/rule/regex_stylistic';
import * as pluginRegex from 'eslint-plugin-regexp';

const regex =
{
  name: 'regex',
  plugins:
  {
    regex: pluginRegex
  },
  rules:
  {
    ...regexBestPracticeRule,
    ...regexErrorRule,
    ...regexStylisticRule
  }
};

export { regex };