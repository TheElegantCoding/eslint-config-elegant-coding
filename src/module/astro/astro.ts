/* eslint-disable ts/no-unsafe-assignment */
import { parserTs } from '@global/plugin/plugin';
import parserAstro from 'astro-eslint-parser';
import pluginAstro from 'eslint-plugin-astro';

import { astroDisabledRule } from './rule/astro_disabled_rule';
import { astroGeneralRule } from './rule/astro_general_rule';

const astro =
{
  files: [ '**/*.astro' ],
  languageOptions: {
    parser: parserAstro,
    parserOptions: {
      extraFileExtensions: [ '.astro' ],
      parser: parserTs
    }
  },
  plugins:
  {
    astro: pluginAstro
  },
  rules:
  {
    ...astroGeneralRule,
    ...astroDisabledRule,
    'style/indent': 'off',
    'style/jsx-closing-tag-location': 'off',
    'style/jsx-indent': 'off',
    'style/jsx-one-expression-per-line': 'off',
    'style/no-multiple-empty-lines': 'off'
  }
};

export { astro };