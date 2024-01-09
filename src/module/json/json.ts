import { parserJson, pluginJson } from '@global/plugin/plugin';
import { jsonDisabledRule } from '@module/json/rule/json_disabled_rule';
import { jsonGeneralRule } from '@module/json/rule/json_general_rule';
import { sortPackageJson } from '@module/json/rule/sort_package';
import { sortTsconfig } from '@module/json/rule/sort_tsconfig';

const json = [
  {
    files: [ '**/*.json', '**/*.json5', '**/*.jsonc' ],
    languageOptions:
    {
      parser: parserJson
    },
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