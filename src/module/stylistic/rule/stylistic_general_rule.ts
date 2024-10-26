import type { Linter } from 'eslint';

const indent = 2;
const maxLength = 120;

const stylisticGeneralRule: Linter.RulesRecord =
{
  'style/array-bracket-newline': [
    'error',
    {
      minItems: 5,
      multiline: true
    }
  ],
  'style/array-bracket-spacing': [ 'error', 'always' ],
  'style/array-element-newline': [
    'error',
    {
      minItems: 3,
      multiline: true
    }
  ],
  'style/arrow-parens': [ 'error', 'always' ],
  'style/arrow-spacing': [
    'error',
    {
      after: true,
      before: true
    }
  ],
  'style/block-spacing': [ 'error', 'always' ],
  'style/brace-style': [
    'error',
    'allman',
    { allowSingleLine: true }
  ],
  'style/comma-dangle': [ 'error', 'never' ],
  'style/comma-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  'style/comma-style': [ 'error', 'last' ],
  'style/computed-property-spacing': [ 'error', 'never' ],
  'style/dot-location': [ 'error', 'property' ],
  'style/eol-last': [ 'error', 'never' ],
  'style/func-call-spacing': [ 'error', 'never' ],
  'style/function-call-argument-newline': [ 'error', 'consistent' ],
  'style/function-paren-newline': [ 'error', 'multiline-arguments' ],
  'style/generator-star-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  'style/implicit-arrow-linebreak': [ 'error', 'beside' ],
  'style/indent': [
    'error',
    indent,
    { SwitchCase: 1 }
  ],
  'style/jsx-child-element-spacing': 'error',
  'style/jsx-closing-bracket-location': 'error',
  'style/jsx-closing-tag-location': [ 'error', 'tag-aligned' ],
  'style/jsx-curly-brace-presence': 'error',
  'style/jsx-curly-newline': [
    'error',
    {
      multiline: 'forbid',
      singleline: 'forbid'
    }
  ],
  'style/jsx-curly-spacing': [
    'error',
    {
      allowMultiline: false,
      children: false,
      objectLiterals: 'never',
      when: 'never'
    }
  ],
  'style/jsx-equals-spacing': 'error',
  'style/jsx-first-prop-new-line': [ 'error', 'multiline-multiprop' ],
  'style/jsx-function-call-newline': [ 'error', 'multiline' ],
  'style/jsx-indent-props': [
    indent,
    {
      ignoreTernaryOperator: false,
      indentMode: 2
    }
  ],
  'style/jsx-max-props-per-line': [
    'error',
    {
      maximum:
      {
        multi: 1,
        single: 2
      }
    }
  ],
  'style/jsx-newline': [
    'error',
    {
      allowMultilines: false,
      prevent: true
    }
  ],
  'style/jsx-one-expression-per-line': [ 'error', { allow: 'single-child' } ],
  'style/jsx-pascal-case': 'error',
  'style/jsx-props-no-multi-spaces': 'error',
  'style/jsx-quotes': [ 'error', 'prefer-single' ],
  'style/jsx-self-closing-comp': [
    'error',
    {
      component: true,
      html: true
    }
  ],
  'style/jsx-tag-spacing': [
    'error',
    {
      afterOpening: 'never',
      beforeClosing: 'allow',
      beforeSelfClosing: 'always',
      closingSlash: 'never'
    }
  ],
  'style/jsx-wrap-multilines': [
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
  'style/key-spacing': [
    'error',
    {
      afterColon: true,
      beforeColon: false,
      mode: 'strict'
    }
  ],
  'style/keyword-spacing': [
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
  'style/line-comment-position': [
    'error',
    {
      applyDefaultPatterns: true,
      position: 'above'
    }
  ],
  'style/linebreak-style': [ 'error', 'unix' ],
  'style/lines-around-comment': [
    'error',
    {
      afterBlockComment: true,
      beforeBlockComment: true
    }
  ],
  'style/lines-between-class-members': [ 'error', 'always' ],
  'style/max-len': [
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
  'style/max-statements-per-line': [ 'error', { max: 1 } ],
  'style/member-delimiter-style': 'error',
  'style/multiline-comment-style': [ 'error', 'bare-block' ],
  'style/multiline-ternary': [ 'error', 'always-multiline' ],
  'style/new-parens': 'error',
  'style/newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 3 } ],
  'style/no-confusing-arrow': [ 'error', { allowParens: true } ],
  'style/no-extra-parens':
  [
    'error',
    'all',
    {
      ignoreJSX: 'all'
    }
  ],
  'style/no-extra-semi': 'error',
  'style/no-floating-decimal': 'error',
  'style/no-mixed-operators': [
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
  'style/no-mixed-spaces-and-tabs': 'error',
  'style/no-multi-spaces': 'error',
  'style/no-multiple-empty-lines': [
    'error',
    {
      max: 1,
      maxBOF: 0,
      maxEOF: 0
    }
  ],
  'style/no-tabs': 'error',
  'style/no-trailing-spaces': [
    'error',
    {
      ignoreComments: false,
      skipBlankLines: false
    }
  ],
  'style/no-whitespace-before-property': 'error',
  'style/nonblock-statement-body-position': [ 'error', 'beside' ],
  'style/object-curly-newline':
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
  'style/object-curly-spacing': [ 'error', 'always' ],
  'style/object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: false } ],
  'style/one-var-declaration-per-line': [ 'error', 'initializations' ],
  'style/operator-linebreak': [
    'error',
    'after',
    {
      overrides:
      {
        ':': 'before',
        '?': 'before'
      }
    }
  ],
  'style/padded-blocks': [
    'error',
    {
      blocks: 'never',
      classes: 'never',
      switches: 'never'
    },
    { allowSingleLineBlocks: true }
  ],
  'style/padding-line-between-statements': [
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
  'style/quote-props': [
    'error',
    'as-needed',
    {
      keywords: false,
      numbers: false,
      unnecessary: true
    }
  ],
  'style/quotes': [ 'error', 'single' ],
  'style/rest-spread-spacing': [ 'error', 'never' ],
  'style/semi': [ 'error', 'always' ],
  'style/semi-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  'style/semi-style': [ 'error', 'last' ],
  'style/space-before-blocks': 'error',
  'style/space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never'
    }
  ],
  'style/space-in-parens': [ 'error', 'never' ],
  'style/space-infix-ops': 'error',
  'style/space-unary-ops': [
    'error',
    {
      nonwords: false,
      words: true
    }
  ],
  'style/spaced-comment': [
    'error',
    'always',
    { markers: [ '/' ] }
  ],
  'style/switch-colon-spacing': 'error',
  'style/template-curly-spacing': 'error',
  'style/template-tag-spacing': [ 'error', 'always' ],
  'style/type-annotation-spacing': 'error',
  'style/type-generic-spacing': 'error',
  'style/type-named-tuple-spacing': 'error',
  'style/wrap-iife': [
    'error',
    'outside',
    { functionPrototypeMethods: false }
  ],
  'style/wrap-regex': 'error',
  'style/yield-star-spacing': [ 'error', 'after' ]
};

export { stylisticGeneralRule };