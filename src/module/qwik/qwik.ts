/* eslint-disable ts/no-unsafe-assignment */
import { pluginQwik } from '@global/plugin/plugin';
import { qwikDisabledRule } from '@module/qwik/rule/qwik_disabled_rule';
import { qwikGeneralRule } from '@module/qwik/rule/qwik_general_rule';

const qwik =
{
  plugins:
  {
    qwik: pluginQwik
  },
  rules: {
    ...qwikGeneralRule,
    ...qwikDisabledRule
  }
};

export { qwik };