import pluginHtml from '@html-eslint/eslint-plugin';
import parserHtml from '@html-eslint/parser';
import { htmlDisabledRule } from '@module/html/rule/html_disabled_rule';
import { htmlGeneralRule } from '@module/html/rule/html_general_rule';

const html =
{
  files: [ '**/*.html' ],
  languageOptions:
  {
    parser: parserHtml
  },
  name: 'html',
  plugins:
  {
    html: pluginHtml
  },
  rules: {
    ...htmlGeneralRule,
    ...htmlDisabledRule
  }
};

export { html };