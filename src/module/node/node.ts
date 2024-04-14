import { pluginNode } from '@global/plugin/plugin';
import { nodeDisabledRule } from '@module/node/rule/node_disabled_rule';
import { nodeGeneralRule } from '@module/node/rule/node_general_rule';

const node =
{
  name: 'node',
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