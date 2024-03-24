import { pluginImport } from '@global/plugin/plugin';
import { importGeneralRule } from '@module/import/rule/import_general_rule';

const imports =
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
};

export { imports };