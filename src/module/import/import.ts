import { pluginImport } from '@global/plugin/plugin';
import { importGeneralRule } from '@module/import/rule/import_general_rule';
import { importOverride } from '@module/import/rule/import_override';

const imports =
[
  {
    name: 'import',
    plugins:
    {
      import: pluginImport as unknown
    },
    rules:
    {
      ...importGeneralRule
    }
  },
  ...importOverride
];

export { imports };