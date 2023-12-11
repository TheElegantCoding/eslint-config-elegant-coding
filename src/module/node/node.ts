/* eslint-disable ts/no-unsafe-assignment */
import { pluginNode } from '@global/plugin/plugin';

import { nodeDisabledRule } from './rule/node_disabled_rule';
import { nodeGeneralRule } from './rule/node_general_rule';

const node =
{
  plugins:
  {
    node: pluginNode
  },
  rules:
  {
    ...nodeGeneralRule,
    ...nodeDisabledRule
  }

};

export { node };