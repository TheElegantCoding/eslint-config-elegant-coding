/* eslint-disable ts/no-unsafe-assignment */
import { pluginGithub } from '@global/plugin/plugin';
import { githubDisabledRule } from '@module/github/rule/github_disabled_rule';
import { githubRule } from '@module/github/rule/github_rule';

const github =
{
  name: 'github',
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