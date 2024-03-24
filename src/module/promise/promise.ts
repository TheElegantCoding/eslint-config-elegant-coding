/* eslint-disable ts/no-unsafe-assignment */
import { pluginPromise } from '@global/plugin/plugin';
import { promiseGeneralRule } from '@module/promise/rule/promise_general_rule';
import { promiseOverride } from '@module/promise/rule/promise_override';

const promise =
[
  {
    name: 'promise',
    plugins:
    {
      promise: pluginPromise
    },
    rules: {
      ...promiseGeneralRule
    }
  },
  ...promiseOverride
];

export { promise };