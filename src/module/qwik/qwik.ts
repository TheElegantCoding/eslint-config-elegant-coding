/* eslint-disable ts/no-unsafe-assignment */
import { pluginQwik } from '@global/plugin/plugin';
import { qwikDisabledRule } from '@module/qwik/rule/qwik_disabled_rule';
import { qwikGeneralRule } from '@module/qwik/rule/qwik_general_rule';

import type { Linter } from 'eslint';

const qwik: Linter.Config =
{
  name: 'qwik',
  plugins:
  {
    qwik: pluginQwik
  },
  rules:
  {
    ...qwikGeneralRule,
    ...qwikDisabledRule
  }
};

export { qwik };