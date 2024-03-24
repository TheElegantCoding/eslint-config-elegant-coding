const variable =
{
  'block-scoped-var': 'error',
  'one-var': [ 'error', 'never' ],
  'require-atomic-updates': [ 'error', { allowProperties: true }],
  'vars-on-top': 'error'
};

export { variable };