/* eslint-disable ts/no-unsafe-assignment */
import { parserTs } from '@global/plugin/plugin';
import { astroDisabledRule } from '@module/astro/rule/astro_disabled_rule';
import { astroGeneralRule } from '@module/astro/rule/astro_general_rule';
import parserAstro from 'astro-eslint-parser';
import pluginAstro from 'eslint-plugin-astro';

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
  name: 'astro',
  plugins:
  {
    astro: pluginAstro
  },
  rules:
  {
    ...astroGeneralRule,
    ...astroDisabledRule,
    'promise/no-native': 'off',
    'style/indent': 'off',
    'style/jsx-closing-tag-location': 'off',
    'style/jsx-indent': 'off',
    'style/jsx-one-expression-per-line': 'off',
    'style/no-multiple-empty-lines': 'off'
  }
};

export { astro };