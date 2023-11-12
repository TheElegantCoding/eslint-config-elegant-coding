import { eslintImportSetting } from './import_setting';
import { importDisabledRule } from './rule/import_disabled_rule';
import { importGeneralRule } from './rule/import_general_rule';
import { importOverride } from './rule/import_overrides';

const eslintImport =
{
  overrides: [ ...importOverride ],
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