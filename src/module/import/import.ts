import { eslintImportSetting } from './import_setting';
import { importDisabledRule } from './rule/import_disabled_rule';
import { importGeneralRule } from './rule/import_general_rule';

const eslintImport =
{
  plugins: [ 'import' ],
  rules:
  {
    ...importDisabledRule,
    ...importGeneralRule
  },
  settings:
  {
    ...eslintImportSetting
  }
};

export { eslintImport };