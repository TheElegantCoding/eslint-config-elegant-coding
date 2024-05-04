import { astroDisabledRule } from '@module/astro/rule/astro_disabled_rule';
import { astroGeneralRule } from '@module/astro/rule/astro_general_rule';
import { astroOverride } from '@module/astro/rule/astro_override';
import parserTs from '@typescript-eslint/parser';
import parserAstro from 'astro-eslint-parser';
import pluginAstro from 'eslint-plugin-astro';

const astro =
[
  {
    files: [ '**/*.astro' ],
    languageOptions:
    {
      parser: parserAstro,
      parserOptions:
      {
        extraFileExtensions: [ '.astro' ],
        parser: parserTs
      }
    },
    name: 'astro',
    plugins:
    {
      astro: pluginAstro
    },
    rules:
    {
      ...astroGeneralRule,
      ...astroDisabledRule
    }
  },
  ...astroOverride
];

export { astro };