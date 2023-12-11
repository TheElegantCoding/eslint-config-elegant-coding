/* eslint-disable ts/no-unsafe-assignment */
import { importDisabledRule } from './rule/import_disabled_rule';
import { importGeneralRule } from './rule/import_general_rule';
import { importOverride } from './rule/import_overrides';
import { pluginImport } from '@global/plugin/plugin';

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