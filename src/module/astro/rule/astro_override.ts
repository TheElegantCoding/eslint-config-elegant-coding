const astroOverride =
[
  {
    files: [ '**/*.astro' ],
    name: 'astro:promise',
    rules:
    {
      'promise/no-native': 'off'
    }
  },
  {
    files: [ '**/*.astro' ],
    name: 'astro:style',
    rules:
    {
      'style/indent': 'off',
      'style/jsx-closing-tag-location': 'off',
      'style/jsx-indent': 'off',
      'style/jsx-one-expression-per-line': 'off',
      'style/no-multiple-empty-lines': 'off'
    }
  },
  {
    files: [ '**/*.astro' ],
    name: 'astro:github',
    rules:
    {
      'github/a11y-aria-label-is-well-formatted': 'off',
      'github/a11y-no-visually-hidden-interactive-element': 'off',
      'github/a11y-role-supports-aria-props': 'off',
      'github/a11y-svg-has-accessible-name': 'off',
      'github/unescaped-html-literal': 'off'
    }
  },
  {
    files: [ '**/*.astro' ],
    name: 'astro:import',
    rules: {
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off'
    }
  },
  {
    files: [ 'astro.config.mjs' ],
    name: 'astro-config:import',
    rules: {
      'import/no-anonymous-default-export': 'off'
    }
  },
  {
    files: [ '**/pages/*.astro', '**/pages/**/*.astro' ],
    name: 'astro:unicorn',
    rules:
    {
      'unicorn/filename-case':
      [
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

export { astroOverride };