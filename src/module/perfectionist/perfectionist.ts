/* eslint-disable ts/no-unsafe-assignment */
import { pluginPerfectionist } from '@global/plugin/plugin';

import { perfectionistGeneralRule } from './rule/perfectionist_general_rule.js';

const perfectionist =
{
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