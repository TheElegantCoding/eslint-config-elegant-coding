import { qwikGeneralRule } from './module/qwik/rule/qwik_general_rule';

const qwik =
{
  plugins: [ 'qwik' ],
  rules: {
    ...qwikGeneralRule
  }
};

export { qwik };