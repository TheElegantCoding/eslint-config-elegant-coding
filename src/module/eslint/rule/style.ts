const indent = 2;
const maxLength = 120;

const style =
{
  'array-bracket-newline': [ 'error', 'consistent' ],
  'array-bracket-spacing': [ 'error', 'always' ],
  'array-element-newline': [
    'error',
    {
      minItems: 5,
      multiline: true
    }
  ],
  'arrow-body-style': [ 'error', 'as-needed', { requireReturnForObjectLiteral: false } ],
  'arrow-parens': [ 'error', 'always' ],
  'arrow-spacing': [
    'error',
    {
      after: true,
      before: true
    }
  ],
  'block-spacing': [ 'error', 'always' ],
  'brace-style': [ 'error', 'allman' ],
  camelcase: [
    'error',
    {
      ignoreDestructuring: false,
      properties: 'never'
    }
  ],
  'comma-dangle': [ 'error', 'never' ],
  'comma-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  'comma-style': [ 'error', 'last' ],
  'computed-property-spacing': [ 'error', 'never' ],
  curly: [ 'error', 'all' ],
  'dot-location': [ 'error', 'property' ],
  'dot-notation': 'error',
  'eol-last': [ 'error', 'never' ],
  'func-call-spacing': [ 'error', 'never' ],
  'func-style': [ 'error', 'expression' ],
  'function-call-argument-newline': [ 'error', 'never' ],
  'function-paren-newline': [ 'error', 'never' ],
  'generator-star-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  'implicit-arrow-linebreak': [ 'error', 'beside' ],
  indent: [ 'error', indent, { SwitchCase: 1 } ],
  'jsx-quotes': [ 'error', 'prefer-single' ],
  'key-spacing': [
    'error',
    {
      afterColon: true,
      mode: 'strict'
    }
  ],
  'keyword-spacing': [
    'error',
    {
      overrides:
      {
        case: {
          after: true
        },
        if:
        {
          after: false,
          before: true
        },
        return: {
          after: true
        },
        throw: {
          after: true
        }
      }
    }
  ],
  'line-comment-position': [
    'error',
    {
      applyDefaultPatterns: true,
      position: 'above'
    }
  ],
  'linebreak-style': [ 'error', 'unix' ],
  'lines-around-comment': [
    'error',
    {
      afterBlockComment: true,
      beforeBlockComment: true
    }
  ],
  'lines-between-class-members': [ 'error', 'always' ],
  'max-len': [
    'error',
    maxLength,
    indent,
    {
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreUrls: true
    }
  ],
  'max-statements-per-line': [ 'error', { max: 1 } ],
  'multiline-comment-style': [ 'error', 'starred-block' ],
  'multiline-ternary': [ 'error', 'never' ],
  'new-cap': [
    'error',
    {
      capIsNew: false,
      capIsNewExceptions: [
        'Immutable.Map', 'Immutable.Set', 'Immutable.List'
      ],
      newIsCap: true,
      newIsCapExceptions: []
    }
  ],
  'new-parens': 'error',
  'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 4 } ],
  'no-extra-parens': [
    'error',
    'all',
    {
      conditionalAssign: true,
      ignoreJSX: 'all'
    }
  ],
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-spaces': 'error',
  'no-multiple-empty-lines': [
    'error',
    {
      max: 1,
      maxBOF: 0,
      maxEOF: 0
    }
  ],
  'no-tabs': 'error',
  'no-trailing-spaces': [
    'error',
    {
      ignoreComments: false,
      skipBlankLines: false
    }
  ],
  'no-whitespace-before-property': 'error',
  'nonblock-statement-body-position': [ 'error', 'beside' ],
  'object-curly-newline': [
    'error',
    {
      ExportDeclaration: { consistent: true, minProperties: 4, multiline: true },
      ImportDeclaration: { consistent: true, minProperties: 4, multiline: true },
      ObjectExpression: { consistent: true, minProperties: 4, multiline: true },
      ObjectPattern: { consistent: true, minProperties: 4, multiline: true }
    }
  ],
  'object-curly-spacing': [ 'error', 'always' ],
  'object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: true } ],
  'operator-linebreak': [ 'error', 'after' ],
  'padded-blocks': [
    'error',
    {
      blocks: 'never',
      classes: 'never',
      switches: 'never'
    },
    { allowSingleLineBlocks: true }
  ],
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      next: '*',
      prev: [ 'const', 'let', 'var' ]
    },
    {
      blankLine: 'any',
      next: [ 'const', 'let', 'var' ],
      prev: [ 'const', 'let', 'var' ]
    }
  ],
  'quote-props': [
    'error',
    'as-needed',
    {
      keywords: false,
      numbers: false,
      unnecessary: true
    }
  ],
  quotes: [ 'error', 'single' ],
  'rest-spread-spacing': [ 'error', 'never' ],
  semi: [ 'error', 'always' ],
  'semi-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  'semi-style': [ 'error', 'last' ],
  'space-before-blocks': 'error',
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never'
    }
  ],
  'space-in-parens': [ 'error', 'never' ],
  'space-infix-ops': 'error',
  'space-unary-ops': [
    'error',
    {
      nonwords: false,
      words: true
    }
  ],
  'spaced-comment': [ 'error', 'always' ],
  'switch-colon-spacing': 'error',
  'template-curly-spacing': 'error',
  'template-tag-spacing': [ 'error', 'always' ],
  'unicode-bom': [ 'error', 'never' ],
  'wrap-iife': [ 'error', 'outside', { functionPrototypeMethods: false } ],
  'wrap-regex': 'error',
  'yield-star-spacing': [ 'error', 'after' ]
};

export { style };