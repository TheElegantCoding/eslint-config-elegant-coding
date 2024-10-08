import { importDisabledRule } from '@module/import/rule/import_disabled_rule';
import { importGeneralRule } from '@module/import/rule/import_general_rule';
import { importOverride } from '@module/import/rule/import_override';
import pluginImport from 'eslint-plugin-import-x';

import type { Linter } from 'eslint';

const imports: Linter.Config[] =
[
  {
    name: 'import',
    plugins:
    {
      import: pluginImport as unknown as Plugin
    },
    rules:
    {
      ...importGeneralRule,
      ...importDisabledRule
    }
  },
  ...importOverride
];

export { imports };