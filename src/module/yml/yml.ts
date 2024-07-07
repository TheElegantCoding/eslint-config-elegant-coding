import { ymlDisabledRule } from '@module/yml/rule/yml_disabled_rule';
import { ymlGeneralRule } from '@module/yml/rule/yml_general_rule';
import pluginYml from 'eslint-plugin-yml';
import parserYml from 'yaml-eslint-parser';

import type { Linter } from 'eslint';

const yml: Linter.FlatConfig =
{
  files: [ '**/*.y?(a)ml' ],
  languageOptions:
  {
    parser: parserYml
  },
  name: 'yml',
  plugins:
  {
    yml: pluginYml as unknown as Plugin
  },
  rules:
  {
    ...ymlGeneralRule,
    ...ymlDisabledRule
  }
};

export { yml };