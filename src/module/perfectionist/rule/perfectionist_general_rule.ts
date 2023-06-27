const perfectionistGeneralRule =
{
  'perfectionist/sort-array-includes': [
    'error',
    {
      'ignore-case': true,
      type: 'line-length'
    }
  ],
  'perfectionist/sort-classes': [
    'error',
    {
      groups: [
        'static-property',
        'private-property',
        'property',
        'constructor',
        'static-method',
        'private-method',
        'method'
      ],
      order: 'asc',
      type: 'natural'
    }
  ],
  'perfectionist/sort-enums': [
    'error',
    {
      'ignore-case': true,
      type: 'line-length'
    }
  ],
  'perfectionist/sort-exports': [
    'error',
    {
      order: 'asc',
      type: 'line-length'
    }
  ],
  'perfectionist/sort-imports': [
    'error',
    {
      groups: [
        'type',
        'react',
        'nanostores',
        [ 'builtin', 'external' ],
        'internal-type',
        'internal',
        [ 'parent-type', 'sibling-type', 'index-type' ],
        [ 'parent', 'sibling', 'index' ],
        'side-effect',
        'style',
        'object',
        'unknown'
      ],
      'newlines-between': 'always',
      order: 'asc',
      type: 'line-length'
    }
  ],
  'perfectionist/sort-interfaces': [
    'error',
    {
      'ignore-case': true,
      type: 'line-length'
    }
  ],
  'perfectionist/sort-jsx-props': [
    'error',
    {
      'ignore-case': true,
      type: 'line-length'
    }
  ],
  'perfectionist/sort-map-elements': [
    'error',
    {
      'ignore-case': true,
      type: 'line-length'
    }
  ],
  'perfectionist/sort-named-exports': [
    'error',
    {
      order: 'asc',
      type: 'line-length'
    }
  ],
  'perfectionist/sort-named-imports': [
    'error',
    {
      order: 'asc',
      type: 'line-length'
    }
  ],
  'perfectionist/sort-object-types': [
    'error',
    {
      'ignore-case': true,
      order: 'asc',
      type: 'line-length'
    }
  ],
  'perfectionist/sort-objects': [
    'error',
    {
      'ignore-case': true,
      type: 'line-length'
    }
  ],
  'perfectionist/sort-union-types': [
    'error',
    {
      order: 'asc',
      type: 'line-length'
    }
  ]
};

export { perfectionistGeneralRule };