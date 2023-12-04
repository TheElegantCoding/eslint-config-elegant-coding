import { astroOverride } from './module/astro/astro_overrides';
import { astroDisabledRule } from './module/astro/rule/astro_disabled_rule';
import { astroGeneralRule } from './module/astro/rule/astro_general_rule';

const astro =
{
  overrides: [ ...astroOverride ],
  plugins: [ 'astro' ],
  rules: {
    ...astroGeneralRule,
    ...astroDisabledRule
  }
};

export = astro;