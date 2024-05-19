import { astroDisabledRule } from '@module/astro/rule/astro_disabled_rule';
import { astroGeneralRule } from '@module/astro/rule/astro_general_rule';
import { astroOverride } from '@module/astro/rule/astro_override';
import parserTs from '@typescript-eslint/parser';
import parserAstro from 'astro-eslint-parser';
import pluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

const astro =
[
  {
    name: 'astro',
    plugins:
    {
      astro: pluginAstro
    }
  },
  {
    files: [ '**/*.astro', '*.astro' ],
    languageOptions:
    {
      globals:
      {
        ...globals.node,
        Astro: false,
        Fragment: false
      },
      parser: parserAstro,
      parserOptions:
      {
        extraFileExtensions: [ '.astro' ],
        parser: parserTs
      },
      sourceType: 'module'
    },
    name: 'astro:setup',
    processor: 'astro/client-side-ts',
    rules:
    {
      ...astroGeneralRule,
      ...astroDisabledRule
    }
  },
  {
    files: [ '**/*.astro/*.js', '*.astro/*.js' ],
    languageOptions:
    {
      globals:
      {
        ...globals.browser
      },
      sourceType: 'module'
    },
    name: 'astro:javascript'
  },
  {
    files: [ '**/*.astro/*.ts', '*.astro/*.ts' ],
    languageOptions:
    {
      globals: {
        ...globals.browser
      },
      parser: parserTs,
      parserOptions:
      {
        // eslint-disable-next-line unicorn/no-null
        project: null
      },
      sourceType: 'module'
    },
    name: 'astro:typescript'
  },
  ...astroOverride
];

export { astro };