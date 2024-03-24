/* eslint-disable ts/no-unsafe-assignment */
import { pluginUnicorn } from '@global/plugin/plugin';

import { unicornDisabledRule } from './rule/unicorn_disabled_rule.js';
import { unicornGeneralRule } from './rule/unicorn_general_rule.js';
import { unicornOverride } from './rule/unicorn_overrides.js';

const unicorn =
[
  ...unicornOverride,
  {
    plugins:
    {
      unicorn: pluginUnicorn
    },
    rules:
    {
      ...unicornDisabledRule,
      ...unicornGeneralRule
    }
  }
];

export { unicorn };