import { perfectionistGeneralRule } from './rule/perfectionist_general_rule';

const perfectionist =
{
  plugins: [ 'perfectionist' ],
  rules:
  {
    ...perfectionistGeneralRule
  }
};

export { perfectionist };