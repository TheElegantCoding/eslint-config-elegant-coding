import { jsonDisabledRule } from '@module/json/rule/json_disabled_rule';
import { jsonGeneralRule } from '@module/json/rule/json_general_rule';
import { jsonOverride } from '@module/json/rule/json_override';
import pluginJson from 'eslint-plugin-jsonc';
import parserJson from 'jsonc-eslint-parser';

const json =
[
  {
    files: [ '**/*.json', '**/*.json5', '**/*.jsonc' ],
    languageOptions:
    {
      parser: parserJson
    },
    name: 'json',
    plugins:
    {
      json: pluginJson
    },
    rules:
    {
      ...jsonGeneralRule,
      ...jsonDisabledRule
    }
  },
  ...jsonOverride
];

export { json };