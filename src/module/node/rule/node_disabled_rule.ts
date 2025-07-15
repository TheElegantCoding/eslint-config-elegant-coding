import type { Linter } from 'eslint';

const nodeDisabledRule: Linter.RulesRecord =
{
  'node/file-extension-in-import': [ 'off', 'always' ],
  'node/no-extraneous-import': 'off',
  'node/no-missing-import': 'off',
  'node/no-process-env': 'off',
  'node/no-restricted-import': 'off',
  'node/no-restricted-require': 'off',
  'node/no-sync': 'off',
  'node/no-top-level-await': 'off',
  'node/no-unpublished-bin': 'off',
  'node/no-unsupported-features/node-builtins':
  [
    'off',
    {
      ignores: [ 'navigator', 'localStorage' ],
      version: '20.10.0'
    }
  ]
};

export { nodeDisabledRule };