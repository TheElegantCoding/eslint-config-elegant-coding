import { promiseGeneralRule } from './rule/promise_general_rule';

const promise =
{
  plugins: [ 'promise' ],
  rules: {
    ...promiseGeneralRule
  }
};

export { promise };