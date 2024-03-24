const unicornOverride =
[
  {
    files: [ '**/pages/*.astro' ],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases:
          {
            camelCase: false,
            kebabCase: true,
            pascalCase: false,
            snakeCase: false
          }
        }
      ]
    }
  }
];

export { unicornOverride };