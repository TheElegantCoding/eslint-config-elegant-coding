const variable =
{
  'block-scoped-var': 'error',
  'one-var': [ 'error', 'never' ],
  'one-var-declaration-per-line': [ 'error', 'initializations' ],
  'require-atomic-updates': [ 'error', { allowProperties: true } ],
  'vars-on-top': 'error'
};

export { variable };