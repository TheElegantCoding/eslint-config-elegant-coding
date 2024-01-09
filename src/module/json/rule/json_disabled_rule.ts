const jsonDisabledRule =
{
  'json/auto': 'off',
  'json/key-name-casing': [
    'off',
    {
      camelCase: true,
      ignores: [],
      'kebab-case': true,
      PascalCase: false,
      SCREAMING_SNAKE_CASE: false,
      snake_case: true
    }
  ],
  'json/sort-array-values': 'off'
};

export { jsonDisabledRule };