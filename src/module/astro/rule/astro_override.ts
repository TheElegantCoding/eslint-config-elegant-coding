import { typescriptDisableTypeAware } from '@module/typescript/rule/typescript_disable_type_aware';

import type { Linter } from 'eslint';

const astroOverride: Linter.FlatConfig[] =
[
  {
    files:
    [
      '**/*.astro',
      '*.astro',
      '**/*.astro/*.js',
      '*.astro/*.js',
      '**/*.astro/*.ts',
      '*.astro/*.ts'
    ],
    name: 'astro:style',
    rules:
    {
      'style/eol-last': 'off',
      'style/indent': 'off',
      'style/jsx-closing-tag-location': 'off',
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
    rules:
    {
      'import/exports-last': 'off',
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off'
    }
  },
  {
    files: [ 'astro.config.mjs' ],
    name: 'astro:import:config',
    rules:
    {
      'import/no-anonymous-default-export': 'off'
    }
  },
  {
    files:
    [
      '**/pages/*.astro',
      '**/pages/**/*.astro',
      '**/api/*.astro',
      '**/api/**/*.astro'
    ],
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
  },
  {
    files: [ '**/*.astro/*.ts', '*.astro/*.ts' ],
    name: 'astro:typescript',
    rules:
    {
      ...typescriptDisableTypeAware
    }
  }
];

export { astroOverride };