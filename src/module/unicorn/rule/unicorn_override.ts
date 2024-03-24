const unicornOverride =
[
  {
    files: [ '**/pages/*' ],
    name: 'unicorn:pages',
    rules: {
      'unicorn/filename-case': [
        'off',
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