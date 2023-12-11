/* eslint-disable ts/no-unsafe-assignment */
import { parserTs, pluginAstro } from '@global/plugin/plugin';

import { astroDisabledRule } from './rule/astro_disabled_rule';
import { astroGeneralRule } from './rule/astro_general_rule';

const astro =
{
  files: [ '*.astro' ],
  languageOptions: {
    parser: 'astro-eslint-parser',
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
    ...astroDisabledRule
  }
};

export default astro;