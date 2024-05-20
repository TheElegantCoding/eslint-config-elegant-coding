const regexStylisticRule =
{
  'regex/grapheme-string-literal': 'error',
  'regex/hexadecimal-escape': 'error',
  'regex/letter-case':
  [
    'error',
    {
      caseInsensitive: 'lowercase',
      controlEscape: 'lowercase',
      hexadecimalEscape: 'lowercase',
      unicodeEscape: 'lowercase'
    }
  ],
  'regex/match-any': 'error',
  'regex/no-useless-escape': 'error',
  'regex/no-useless-non-capturing-group': 'error',
  'regex/prefer-character-class': 'error',
  'regex/prefer-d': 'error',
  'regex/prefer-lookaround': 'error',
  'regex/prefer-named-backreference': 'error',
  'regex/prefer-named-capture-group': 'error',
  'regex/prefer-named-replacement': 'error',
  'regex/prefer-plus-quantifier': 'error',
  'regex/prefer-question-quantifier': 'error',
  'regex/prefer-result-array-groups': 'error',
  'regex/prefer-star-quantifier': 'error',
  'regex/prefer-unicode-codepoint-escapes': 'error',
  'regex/prefer-w': 'error',
  'regex/sort-character-class-elements': 'error',
  'regex/sort-flags': 'error',
  'regex/unicode-escape': 'error',
  'regex/unicode-property': 'error'
};

export { regexStylisticRule };