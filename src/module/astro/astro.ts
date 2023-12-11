/* eslint-disable ts/no-unsafe-assignment */
import { parserTs } from '@global/plugin/plugin';

import { astroDisabledRule } from './rule/astro_disabled_rule';
import { astroGeneralRule } from './rule/astro_general_rule';

const astro =
{
  files: [ '*.astro' ],
  languageOptions: {
    parser: '',
    parserOptions: {
      extraFileExtensions: [ '.astro' ],
      parser: parserTs,
      sourceType: 'module'
    }
  },
  plugins:
  {
    astro: 'astro'
  },
  rules:
  {
    ...astroGeneralRule,
    ...astroDisabledRule
  }
};

export default astro;