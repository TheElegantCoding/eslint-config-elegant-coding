const { eslintImportSetting } = require('./import_setting');
const { importDisabledRule } = require('./rule/import_disabled_rule');
const { importGeneralRule } = require('./rule/import_general_rule');

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

module.exports = { eslintImport };