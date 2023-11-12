const indent = 2;

const stylisticRule =
{
  '@stylistic/array-bracket-newline': [ 'error', 'consistent' ],
  '@stylistic/array-bracket-spacing': [ 'error', 'always' ],

   '@stylistic/array-element-newline': [
    'error',
    {
        "ArrayExpression": "consistent",
        "ArrayPattern": { "minItems": 5, multiline: true },
    }
  ],
  '@stylistic/arrow-parens': [ 'error', 'always' ],
  '@stylistic/arrow-spacing': [
    'error',
    {
      after: true,
      before: true
    }
  ],  '@stylistic/block-spacing': [ 'error', 'always' ],
  '@stylistic/brace-style': [ 'error', 'allman' , { "allowSingleLine": true } ],
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
  '@stylistic/function-call-argument-newline': [ 'error', '@stylistic/consistent' ],
  '@stylistic/function-paren-newline': [ 'error', 'never' ],
  '@stylistic/generator-star-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  '@stylistic/implicit-arrow-linebreak': [ 'error', 'beside' ],
  '@stylistic/indent': [ 'error', indent, { SwitchCase: 1 } ],
  '@stylistic/jsx-quotes': [ 'error', 'prefer-single' ],
  '@stylistic/jsx-wrap-multilines': [ 'error',
    {
      arrow: "parens-new-line",
      assignment: "parens-new-line",
      condition: "parens-new-line",
      declaration: "parens-new-line",
      logical: "parens-new-line",
      prop: "parens-new-line",
      return: "parens-new-line"
    } ],





}

export { stylisticRule };