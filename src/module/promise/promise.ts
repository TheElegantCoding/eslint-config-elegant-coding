/* eslint-disable ts/no-unsafe-assignment */
import { pluginPromise } from '@global/plugin/plugin';
import { promiseDisabledRule } from '@module/promise/rule/promise_disable_rule';
import { promiseGeneralRule } from '@module/promise/rule/promise_general_rule';

import type { Linter } from 'eslint';

const promise: Linter.Config =
{
  name: 'promise',
  plugins:
  {
    promise: pluginPromise
  },
  rules:
  {
    ...promiseGeneralRule,
    ...promiseDisabledRule
  }
};

export { promise };