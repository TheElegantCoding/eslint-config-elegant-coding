import { jsonDisabledRule } from '@module/json/rule/json_disabled_rule';
import { jsonGeneralRule } from '@module/json/rule/json_general_rule';
import { sortPackageJson } from '@module/json/rule/sort_package';
import { sortTsconfig } from '@module/json/rule/sort_tsconfig';
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
  ...sortPackageJson,
  ...sortTsconfig
];

export { json };