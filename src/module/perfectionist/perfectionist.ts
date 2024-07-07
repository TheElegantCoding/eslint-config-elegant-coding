/* eslint-disable ts/no-unsafe-assignment */
import { pluginPerfectionist } from '@global/plugin/plugin';
import { perfectionistGeneralRule } from '@module/perfectionist/rule/perfectionist_general_rule';

import type { Linter } from 'eslint';

const perfectionist: Linter.FlatConfig =
{
  name: 'perfectionist',
  plugins:
  {
    perfectionist: pluginPerfectionist
  },
  rules:
  {
    ...perfectionistGeneralRule
  }
};

export { perfectionist };