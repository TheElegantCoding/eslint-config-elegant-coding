import { etcDisabledRule } from './rule/etc_disabled_rule';
import { etcGeneralRule } from './rule/etc_general_rule';

const etc =
{
  plugins: [ 'etc' ],
  rules: {
    ...etcDisabledRule,
    ...etcGeneralRule
  }
};

export { etc };