/* eslint-disable ts/no-unsafe-assignment */
import { parserHtml, pluginHtml } from '@global/plugin/plugin';
import { htmlDisabledRule } from '@module/html/rule/html_disabled_rule';
import { htmlGeneralRule } from '@module/html/rule/html_general_rule';

const html =
{
  files: [ '*.html' ],
  languageOptions:
  {
    parser: parserHtml,
    plugins:
    {
      ts: pluginHtml
    },
    rules: {
      ...htmlGeneralRule,
      ...htmlDisabledRule
    }
  }
};

export { html };