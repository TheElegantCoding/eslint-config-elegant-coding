const style =
{
  'arrow-body-style': [ 'error', 'as-needed', { requireReturnForObjectLiteral: false }],
  camelcase: [
    'error',
    {
      ignoreDestructuring: false,
      properties: 'never'
    }
  ],
  curly: [ 'error', 'all' ],
  'dot-notation': 'error',
  'func-style': [ 'error', 'expression' ],
  'line-comment-position': [
    'error',
    {
      applyDefaultPatterns: true,
      position: 'above'
    }
  ],
  'multiline-comment-style': [ 'error', 'starred-block' ],
  'new-cap': [
    'error',
    {
      capIsNew: false,
      capIsNewExceptions: [ 'Immutable.Map', 'Immutable.Set', 'Immutable.List' ],
      newIsCap: true,
      newIsCapExceptions: []
    }
  ],
  'unicode-bom': [ 'error', 'never' ]
};

export { style };