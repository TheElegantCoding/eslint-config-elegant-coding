const complexity = 20;
const maxDepth = 4;
const maxParameters = 4;
const maxStatements = 10;

const bestPractice =
{
  'array-callback-return': [ 'error', { allowImplicit: true } ],
  'use-isnan': 'error',
  'valid-typeof': [ 'error', { requireStringLiterals: true } ],
  'accessor-pairs': 'error',
  'class-methods-use-this': [
    'error',
    {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'UNSAFE_componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'UNSAFE_componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'UNSAFE_componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'componentDidCatch',
        'getSnapshotBeforeUpdate'
      ]
    }
  ],
  complexity: [ 'error', complexity ],
  'consistent-return': 'error',
  'consistent-this': 'error',
  'default-case': 'error',
  'default-case-last': 'error',
  'default-param-last': 'error',
  eqeqeq: [ 'error', 'always' ],
  'func-name-matching': [
    'off',
    'always',
    {
      'includeCommonJSModulemodule.exports =s': false,
      considerPropertyDescriptor: true
    }
  ],
  'grouped-accessor-pairs': 'error',
  'guard-for-in': 'error',
  'id-denylist': 'off',
  'id-length': [ 'error', { min: 3 } ],
  'id-match': 'off',
  'init-declarations': 'off',
  'logical-assignment-operators': [ 'error', 'always', { enforceForIfStatements: true } ],
  'max-classes-per-file': [ 'error', 1 ],
  'max-depth': [ 'error', maxDepth ],
  'max-lines': [
    'error',
    {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }
  ],
  'max-lines-per-function': [
    'error',
    {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true
    }
  ],
  'max-nested-callbacks': [ 'error', { max: 3 } ],
  'max-params': [ 'error', maxParameters ],
  'max-statements': [ 'error', maxStatements ],
  'object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: false,
      avoidQuotes: true
    }
  ],
  'operator-assignment': [ 'error', 'always' ],
  'prefer-arrow-callback': [
    'error',
    {
      allowNamedFunctions: false,
      allowUnboundThis: true
    }
  ],
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true
    }
  ],
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: false,
        object: true
      },
      AssignmentExpression: {
        array: true,
        object: false
      }
    },
    {
      enforceForRenamedProperties: false
    }
  ],
  'prefer-exponentiation-operator': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': [ 'error', { allowEmptyReject: true } ],
  'prefer-regex-literals': [ 'error', { disallowRedundantWrapping: true } ],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  radix: 'error',
  'require-await': 'error',
  'require-unicode-regexp': 'off',
  'require-yield': 'error',
  yoda: 'error',
  'symbol-description': 'error'
};

module.exports = { bestPractice };