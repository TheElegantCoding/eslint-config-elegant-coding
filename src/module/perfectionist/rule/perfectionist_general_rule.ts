import type { Linter } from 'eslint';

const perfectionistGeneralRule: Linter.RulesRecord =
{
  'perfectionist/sort-array-includes': [
    'error',
    {
      'ignore-case': true,
      type: 'natural'
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
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'unknown',
        'type',
        'builtin-type',
        'external-type',
        'internal-type',
        'parent-type',
        'sibling-type',
        'index-type',
        'side-effect',
        'object',
        'style'
      ],
      'newlines-between': 'always',
      order: 'asc',
      type: 'natural'
    }
  ],
  'perfectionist/sort-interfaces': [
    'error',
    {
      'ignore-case': true,
      type: 'line-length'
    }
  ],
  'perfectionist/sort-intersection-types': [
    'error',
    {
      order: 'asc',
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
  'perfectionist/sort-maps': [
    'error',
    {
      'ignore-case': true,
      type: 'natural'
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
      type: 'line-length'
    }
  ],
  'perfectionist/sort-objects': [
    'error',
    {
      'ignore-case': true,
      type: 'natural'
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