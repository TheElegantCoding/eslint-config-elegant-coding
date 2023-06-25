const variable =
{
  'require-atomic-updates': 'error',
  'block-scoped-var': 'error',
  'one-var': [ 'error', 'never' ],
  'one-var-declaration-per-line': [ 'error', 'initializations' ],
  'vars-on-top': 'error'
};

module.exports = { variable };