const indent = 2;
const maxLen = 100;

module.exports =
{
  rules:
  {
    'arrow-body-style':
  [
    'error',
    'as-needed',
    {
      requireReturnForObjectLiteral: false
    }
  ],
    camelcase:
  [
    'error',
    {
      properties: 'never',
      ignoreDestructuring: false
    }
  ],
    'capitalized-comments': [
      'off',
      'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true
        }
      }
    ],
    curly: ['error', 'all'],
    'dot-notation': 'error',
    'func-style': [
      'error',
      'expression'
    ],
    'multiline-comment-style': [
      'error',
      'starred-block'
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List'
        ]
      }
    ],
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false
      }
    ],
    'sort-imports': ['off', {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
    }],
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],
    'sort-vars': 'off',
    'spaced-comment': [
      'error',
      'always'
    ],
    'array-bracket-newline': [
      'off',
      'consistent'
    ],
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'array-element-newline': [
      'off',
      {
        multiline: true,
        minItems: 3
      }
    ],
    'arrow-parens': [
      'error',
      'always'
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'block-spacing': [
      'error',
      'always'
    ],
    'brace-style': [
      'error',
      'allman'
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [
      'error',
      'last'
    ],
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'dot-location': [
      'error',
      'property'
    ],
    'eol-last': [
      'error',
      'never'
    ],
    'func-call-spacing': [
      'error',
      'never'
    ],
    'function-call-argument-newline': [
      'error',
      'never'
    ],
    'function-paren-newline': [
      'error',
      'never'
    ],
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'implicit-arrow-linebreak': [
      'error',
      'beside'
    ],
    indent: [
      'error', indent,
      {
        SwitchCase: 1
      }
    ],
    'jsx-quotes': [
      'error',
      'prefer-single'
    ],
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
        overrides: {
          if: {
            after: false,
            before: true
          },
          return: {
            after: true
          },
          throw: {
            after: true
          },
          case: {
            after: true
          }
        }
      }
    ],
    'line-comment-position': [
      'error',
      {
        position: 'above',
        applyDefaultPatterns: true
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'lines-around-comment': 'off',
    'lines-between-class-members': [
      'error',
      'always'
    ],
    'max-len': [
      'error',
      maxLen,
      indent,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: false,
        ignoreTemplateLiterals: false
      }
    ],
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-ternary': [
      'error',
      'never'
    ],
    'new-parens': 'error',
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4
      }
    ],
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
        skipBlankLines: false,
        ignoreComments: false
      }
    ],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': [
      'error',
      'beside'
    ],
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true }
    }],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true
      }
    ],
    'operator-linebreak': [
      'error',
      'after'
    ],
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never'
      },
      {
        allowSingleLineBlocks: true
      }
    ],
    'padding-line-between-statements': 'off',
    quotes: [
      'error',
      'single'
    ],
    'rest-spread-spacing': [
      'error',
      'never'
    ],
    semi: [
      'error',
      'always'
    ],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'semi-style': [
      'error',
      'last'
    ],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': [
      'error',
      'always'
    ],
    'unicode-bom': [
      'error',
      'never'
    ],
    'wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false
      }
    ],
    'wrap-regex': 'error',
    'yield-star-spacing': [
      'error',
      'after'
    ]
  }
};