/* eslint-disable ts/no-unsafe-assignment */
import { pluginGithub } from '@global/plugin/plugin';
import { githubDisabledRule } from '@module/github/rule/github_disabled_rule';
import { githubOverride } from '@module/github/rule/github_override';
import { githubRule } from '@module/github/rule/github_rule';

const github = [
  {
    plugins:
    {
      github: pluginGithub
    },
    rules: {
      ...githubRule,
      ...githubDisabledRule
    }
  },
  ...githubOverride
];

export { github };