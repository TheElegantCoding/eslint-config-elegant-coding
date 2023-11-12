import { githubDisabledRule } from './rule/github_disabled_rule';
import { githubRule } from './rule/github_rule';

const github =
{
  plugins: [ 'github' ],
  rules: {
    ...githubRule,
    ...githubDisabledRule
  }
};

export { github };