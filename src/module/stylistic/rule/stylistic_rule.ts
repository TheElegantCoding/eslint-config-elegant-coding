/* eslint-disable max-lines */
const indent = 2;
const maxLength = 120;

const stylisticRule =
{
  '@stylistic/array-bracket-newline': [
    'error',
    {
      minItems: 5,
      multiline: true
    }
  ],
  '@stylistic/array-bracket-spacing': [
    'error',
    'always',
    {
      arraysInArrays: false,
      objectsInArrays: false
    }
  ],
  '@stylistic/array-element-newline': [
    'error',
    {
      ArrayExpression: 'consistent',
      ArrayPattern: {
        minItems: 5,
        multiline: true
      }
    }
  ],
  '@stylistic/arrow-parens': [ 'error', 'always' ],
  '@stylistic/arrow-spacing': [
    'error',
    {
      after: true,
      before: true
    }
  ],
  '@stylistic/block-spacing': [ 'error', 'always' ],
  '@stylistic/brace-style': [
    'error',
    'allman',
    { allowSingleLine: true }
  ],
  '@stylistic/comma-dangle': [ 'error', 'never' ],
  '@stylistic/comma-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  '@stylistic/comma-style': [ 'error', 'last' ],
  '@stylistic/computed-property-spacing': [ 'error', 'never' ],
  '@stylistic/dot-location': [ 'error', 'property' ],
  '@stylistic/eol-last': [ 'error', 'never' ],
  '@stylistic/func-call-spacing': [ 'error', 'never' ],
  '@stylistic/function-call-argument-newline': [ 'error', 'consistent' ],
  '@stylistic/function-paren-newline': [ 'error', 'never' ],
  '@stylistic/generator-star-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  '@stylistic/implicit-arrow-linebreak': [ 'error', 'beside' ],
  '@stylistic/indent': [
    'error',
    indent,
    { SwitchCase: 1 }
  ],
  '@stylistic/jsx-child-element-spacing': 'error',
  '@stylistic/jsx-closing-bracket-location': 'error',
  '@stylistic/jsx-closing-tag-location': 'error',
  '@stylistic/jsx-curly-brace-presence': 'error',
  '@stylistic/jsx-curly-newline': [
    'error',
    {
      multiline: 'forbid',
      singleline: 'forbid'
    }
  ],
  '@stylistic/jsx-curly-spacing': [
    'error',
    {
      allowMultiline: false,
      children: false,
      objectLiterals: 'never',
      when: 'never'
    }
  ],
  '@stylistic/jsx-equals-spacing': 'error',

  '@stylistic/jsx-first-prop-new-line': [ 'error', 'multiline-multiprop' ],
  '@stylistic/jsx-indent': [
    indent,
    indent,
    {
      checkAttributes: false,
      indentLogicalExpressions: true
    }
  ],
  '@stylistic/jsx-indent-props': [
    indent,
    {
      ignoreTernaryOperator: false,
      indentMode: 2
    }
  ],
  '@stylistic/jsx-max-props-per-line': [
    1,
    {
      maximum: 1,
      when: 'always'
    }
  ],
  '@stylistic/jsx-newline': [
    'error',
    {
      allowMultilines: false,
      prevent: true
    }
  ],
  '@stylistic/jsx-one-expression-per-line': [ 'error', { allow: 'single-child' }],
  '@stylistic/jsx-props-no-multi-spaces': 'error',
  '@stylistic/jsx-quotes': [ 'error', 'prefer-single' ],
  '@stylistic/jsx-self-closing-comp': [
    'error',
    {
      component: true,
      html: true
    }
  ],
  '@stylistic/jsx-tag-spacing': [
    'error',
    {
      afterOpening: 'never',
      beforeClosing: 'allow',
      beforeSelfClosing: 'always',
      closingSlash: 'never'
    }
  ],
  '@stylistic/jsx-wrap-multilines': [
    'error',
    {
      arrow: 'parens-new-line',
      assignment: 'parens-new-line',
      condition: 'parens-new-line',
      declaration: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
      return: 'parens-new-line'
    }
  ],
  '@stylistic/key-spacing': [
    'error',
    {
      afterColon: true,
      mode: 'strict'
    }
  ],
  '@stylistic/keyword-spacing': [
    'error',
    {
      overrides:
      {
        as:
        {
          after: true,
          before: true
        },
        case: { after: true },
        for: { after: false },
        if:
        {
          after: false,
          before: true
        },
        return: { after: true },
        static: { after: false },
        throw: { after: true },
        while: { after: false }
      }
    }
  ],
  '@stylistic/linebreak-style': [ 'error', 'unix' ],
  '@stylistic/lines-around-comment': [
    'error',
    {
      afterBlockComment: true,
      beforeBlockComment: true
    }
  ],
  '@stylistic/lines-between-class-members': [ 'error', 'always' ],
  '@stylistic/max-len': [
    'error',
    maxLength,
    indent,
    {
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true
    }
  ],

  '@stylistic/max-statements-per-line': [ 'error', { max: 1 }],

  '@stylistic/member-delimiter-style': 'error',
  '@stylistic/multiline-ternary': [ 'error', 'always-multiline' ],
  '@stylistic/new-parens': 'error',
  '@stylistic/newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 3 }],
  '@stylistic/no-confusing-arrow': [ 'error', { allowParens: true }],
  '@stylistic/no-extra-parens': [
    'error',
    'all',
    {
      conditionalAssign: true,
      ignoreJSX: 'all'
    }
  ],
  '@stylistic/no-extra-semi': 'error',
  '@stylistic/no-floating-decimal': 'error',
  '@stylistic/no-mixed-operators': [
    'error',
    {
      allowSamePrecedence: false,
      groups: [
        [ '%', '**' ],
        [ '%', '+' ],
        [ '%', '-' ],
        [ '%', '*' ],
        [ '%', '/' ],
        [ '/', '*' ],
        [
          '&',
          '|',
          '<<',
          '>>',
          '>>>'
        ],
        [
          '==',
          '!=',
          '===',
          '!=='
        ],
        [ '&&', '||' ]
      ]
    }
  ],
  '@stylistic/no-mixed-spaces-and-tabs': 'error',
  '@stylistic/no-multi-spaces': 'error',
  '@stylistic/no-multiple-empty-lines': [
    'error',
    {
      max: 1,
      maxBOF: 0,
      maxEOF: 0
    }
  ],
  '@stylistic/no-tabs': 'error',
  '@stylistic/no-trailing-spaces': [
    'error',
    {
      ignoreComments: false,
      skipBlankLines: false
    }
  ],
  '@stylistic/no-whitespace-before-property': 'error',
  '@stylistic/nonblock-statement-body-position': [ 'error', 'beside' ],
  '@stylistic/object-curly-newline':
  [
    'error',
    {
      ExportDeclaration: {
        consistent: true,
        minProperties: 4,
        multiline: true
      },
      ImportDeclaration: {
        consistent: true,
        minProperties: 4,
        multiline: true
      },
      ObjectExpression: {
        consistent: true,
        minProperties: 4,
        multiline: true
      },
      ObjectPattern: {
        consistent: true,
        minProperties: 4,
        multiline: true
      }
    }
  ],
  '@stylistic/object-curly-spacing': [ 'error', 'always' ],
  '@stylistic/object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: false }],

  '@stylistic/one-var-declaration-per-line': [ 'error', 'initializations' ],
  '@stylistic/operator-linebreak': [ 'error', 'after' ],
  '@stylistic/padded-blocks': [
    'error',
    {
      blocks: 'never',
      classes: 'never',
      switches: 'never'
    },
    { allowSingleLineBlocks: true }
  ],
  '@stylistic/padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      next: '*',
      prev: '*'
    },
    {
      blankLine: 'any',
      next: 'expression',
      prev: 'expression'
    },
    {
      blankLine: 'always',
      next: 'iife',
      prev: 'iife'
    },
    {
      blankLine: 'any',
      next: [ 'case' ],
      prev: '*'
    },
    {
      blankLine: 'any',
      next: 'directive',
      prev: 'directive'
    },
    {
      blankLine: 'any',
      next: 'const',
      prev: 'const'
    },
    {
      blankLine: 'any',
      next: 'let',
      prev: 'let'
    },
    {
      blankLine: 'any',
      next: 'var',
      prev: 'var'
    },
    {
      blankLine: 'any',
      next: 'import',
      prev: 'import'
    },
    {
      blankLine: 'any',
      next: 'export',
      prev: 'export'
    }
  ],
  '@stylistic/quote-props': [
    'error',
    'as-needed',
    {
      keywords: false,
      numbers: false,
      unnecessary: true
    }
  ],
  '@stylistic/quotes': [ 'error', 'single' ],
  '@stylistic/rest-spread-spacing': [ 'error', 'never' ],

  '@stylistic/semi': [ 'error', 'always' ],
  '@stylistic/semi-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  '@stylistic/semi-style': [ 'error', 'last' ],
  '@stylistic/space-before-blocks': 'error',
  '@stylistic/space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never'
    }
  ],
  '@stylistic/space-in-parens': [ 'error', 'never' ],
  '@stylistic/space-infix-ops': 'error',
  '@stylistic/space-unary-ops': [
    'error',
    {
      nonwords: false,
      words: true
    }
  ],
  '@stylistic/spaced-comment': [
    'error',
    'always',
    { markers: [ '/' ] }
  ],
  '@stylistic/switch-colon-spacing': 'error',
  '@stylistic/template-curly-spacing': 'error',
  '@stylistic/template-tag-spacing': [ 'error', 'always' ],
  '@stylistic/type-annotation-spacing': 'error',
  '@stylistic/wrap-iife': [
    'error',
    'outside',
    { functionPrototypeMethods: false }
  ],
  '@stylistic/wrap-regex': 'error',
  '@stylistic/yield-star-spacing': [ 'error', 'after' ]
};

export { stylisticRule };