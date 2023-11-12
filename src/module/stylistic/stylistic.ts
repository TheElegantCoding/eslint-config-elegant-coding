import { stylisticDisabledRule } from './rule/stylistic_disabled_rule';
import { stylisticRule } from './rule/stylistic_rule';

const stylistic =
{
  plugins: [ '@stylistic' ],
  rules:
  {
    ...stylisticRule,
    ...stylisticDisabledRule
  }
};

export { stylistic };