/* eslint-disable ts/no-unsafe-assignment */
import { pluginImport } from '@global/plugin/plugin';

import { importDisabledRule } from './rule/import_disabled_rule';
import { importGeneralRule } from './rule/import_general_rule';
import { importOverride } from './rule/import_overrides';

const eslintImport =
[
  {
    plugins:
    {
      import: pluginImport
    },
    rules:
    {
      ...importDisabledRule,
      ...importGeneralRule
    }
  },
  ...importOverride
];

export { eslintImport };