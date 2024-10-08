import type { Linter } from 'eslint';

const nodeGeneralRule: Linter.RulesRecord =
{
  'node/callback-return': 'error',
  'node/exports-style': [ 'error', 'module.exports' ],
  'node/global-require': 'error',
  'node/handle-callback-err': 'error',
  'node/no-callback-literal': 'error',
  'node/no-deprecated-api': 'error',
  'node/no-exports-assign': 'error',
  'node/no-extraneous-import': 'error',
  'node/no-extraneous-require': 'error',
  'node/no-missing-require': 'error',
  'node/no-mixed-requires': 'error',
  'node/no-new-require': 'error',
  'node/no-path-concat': 'error',
  'node/no-process-exit': 'error',
  'node/no-unpublished-import': 'error',
  'node/no-unpublished-require': 'error',
  'node/no-unsupported-features/es-builtins': 'error',
  'node/no-unsupported-features/es-syntax': 'error',
  'node/prefer-global/buffer': [ 'error', 'always' ],
  'node/prefer-global/console': [ 'error', 'always' ],
  'node/prefer-global/process': [ 'error', 'always' ],
  'node/prefer-global/text-decoder': [ 'error', 'always' ],
  'node/prefer-global/text-encoder': [ 'error', 'always' ],
  'node/prefer-global/url': [ 'error', 'always' ],
  'node/prefer-global/url-search-params': [ 'error', 'always' ],
  'node/prefer-node-protocol': 'error',
  'node/prefer-promises/dns': 'error',
  'node/prefer-promises/fs': 'error',
  'node/process-exit-as-throw': 'error'
};

export { nodeGeneralRule };