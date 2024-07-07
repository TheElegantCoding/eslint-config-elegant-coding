import pluginHtml from '@html-eslint/eslint-plugin';
import parserHtml from '@html-eslint/parser';
import { htmlDisabledRule } from '@module/html/rule/html_disabled_rule';
import { htmlGeneralRule } from '@module/html/rule/html_general_rule';

import type { Linter } from 'eslint';

const html: Linter.FlatConfig =
{
  files: [ '**/*.html' ],
  languageOptions:
  {
    parser: parserHtml
  },
  name: 'html',
  plugins:
  {
    html: pluginHtml as unknown as Plugin
  },
  rules:
  {
    ...htmlGeneralRule,
    ...htmlDisabledRule
  }
};

export { html };