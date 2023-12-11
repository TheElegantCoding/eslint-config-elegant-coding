/* eslint-disable ts/no-unsafe-assignment */
import { pluginUnicorn } from '@global/plugin/plugin';

import { unicornDisabledRule } from './rule/unicorn_disabled_rule.js';
import { unicornGeneralRule } from './rule/unicorn_general_rule.js';

const unicorn =
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
};

export { unicorn };