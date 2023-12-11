/* eslint-disable ts/no-unsafe-assignment */
import { pluginQwik } from '@global/plugin/plugin';

import { qwikGeneralRule } from './rule/qwik_general_rule';

const qwik =
{
  plugins:
  {
    qwik: pluginQwik
  },
  rules: {
    ...qwikGeneralRule
  }
};

export { qwik };