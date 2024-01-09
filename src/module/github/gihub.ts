/* eslint-disable ts/no-unsafe-assignment */
import { pluginGithub } from '@global/plugin/plugin';

import { githubDisabledRule } from './rule/github_disabled_rule';
import { githubRule } from './rule/github_rule';

const github =
{
  plugins:
  {
    github: pluginGithub
  },
  rules: {
    ...githubRule,
    ...githubDisabledRule
  }
};

export { github };