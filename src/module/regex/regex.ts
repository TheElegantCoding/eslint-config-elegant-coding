import { regexBestPracticeRule } from '@module/regex/rule/regex_best_practice_rule';
import { regexDisabledRule } from '@module/regex/rule/regex_disabled_rule';
import { regexErrorRule } from '@module/regex/rule/regex_error_rule';
import { regexStylisticRule } from '@module/regex/rule/regex_stylistic';
import pluginRegex from 'eslint-plugin-regexp';

import type { Linter } from 'eslint';

const regex: Linter.Config =
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
    ...regexStylisticRule,
    ...regexDisabledRule
  }
};

export { regex };