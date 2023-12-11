import { pluginPromise } from '@global/plugin/plugin';
import { promiseGeneralRule } from './rule/promise_general_rule';

const promise =
{
  plugins:
  {
    promise: pluginPromise
  },
  rules: {
    ...promiseGeneralRule
  }
};

export { promise };