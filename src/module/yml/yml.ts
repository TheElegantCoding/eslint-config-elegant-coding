import { ymlDisabledRule } from '@module/yml/rule/yml_disabled_rule';
import { ymlGeneralRule } from '@module/yml/rule/yml_general_rule';
import pluginYml from 'eslint-plugin-yml';
import parserYml from 'yaml-eslint-parser';

const yml =
{
  files: [ '**/*.y?(a)ml' ],
  languageOptions:
  {
    parser: parserYml
  },
  name: 'yml',
  plugins:
  {
    yml: pluginYml
  },
  rules:
  {
    ...ymlGeneralRule,
    ...ymlDisabledRule
  }
};

export { yml };