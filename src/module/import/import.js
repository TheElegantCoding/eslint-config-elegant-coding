const { eslintImportSetting } = require('./import_setting');
const { importDisabledRule } = require('./rule/import_disabled_rule');
const { importGeneralRule } = require('./rule/import_general_rule');

const eslintImport =
{
  plugins: [ 'import' ],
  settings:
  {
    ...eslintImportSetting
  },
  rules:
  {
    ...importDisabledRule,
    ...importGeneralRule
  }
};

module.exports = { eslintImport };