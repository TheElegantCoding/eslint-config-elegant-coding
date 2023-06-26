import { unicornDisabledRule } from './rule/unicorn_disabled_rule';
import { unicornGeneralRule } from './rule/unicorn_general_rule';

const unicorn =
{
  plugins: [ 'unicorn' ],
  rules: {
    ...unicornDisabledRule,
    ...unicornGeneralRule
  }
};

export { unicorn };