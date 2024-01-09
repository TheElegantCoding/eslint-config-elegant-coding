/* eslint-disable ts/no-unsafe-assignment */
import { parserTs, parserAstro, pluginAstro } from '@global/plugin/plugin';

import { astroDisabledRule } from './rule/astro_disabled_rule';
import { astroGeneralRule } from './rule/astro_general_rule';

const astro =
{
  files: [ '*.astro' ],
  languageOptions: {
    globals: {
      'astro/astro': true,
      es2020: true,
      node: true
    },
    parser: parserAstro,
    parserOptions: {
      extraFileExtensions: [ '.astro' ],
      parser: parserTs,
      sourceType: 'module'
    }
  },
  plugins:
  {
    astro: pluginAstro
  },
  rules:
  {
    ...astroGeneralRule,
    ...astroDisabledRule
  }
};

export default astro;