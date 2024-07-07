/* eslint-disable ts/no-unsafe-assignment */
import { pluginPromise } from '@global/plugin/plugin';
import { promiseDisabledRule } from '@module/promise/rule/promise_disable_rule';
import { promiseGeneralRule } from '@module/promise/rule/promise_general_rule';

const promise =
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