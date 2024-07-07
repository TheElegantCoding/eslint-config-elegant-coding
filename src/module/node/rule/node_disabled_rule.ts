import type { Linter } from 'eslint';

const nodeDisabledRule: Linter.RulesRecord =
{
  'node/file-extension-in-import': [ 'off', 'always' ],
  'node/no-missing-import': 'off',
  'node/no-process-env': 'off',
  'node/no-restricted-import': 'off',
  'node/no-restricted-require': 'off',
  'node/no-sync': 'off',
  'node/no-unpublished-bin': 'off'
};

export { nodeDisabledRule };