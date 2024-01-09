import { parserYml, pluginYml } from '@global/plugin/plugin';
import { ymlDisabledRule } from '@module/yml/rule/yml_disabled_rule';
import { ymlGeneralRule } from '@module/yml/rule/yml_general_rule';

const yml =
{
  files: [ '**/*.y?(a)ml' ],
  languageOptions:
  {
    parser: parserYml
  },
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