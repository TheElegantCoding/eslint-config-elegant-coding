import { nodeDisabledRule } from '@module/node/rule/node_disabled_rule';
import { nodeGeneralRule } from '@module/node/rule/node_general_rule';
import pluginNode from 'eslint-plugin-n';

import type { Linter } from 'eslint';

const node: Linter.FlatConfig =
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