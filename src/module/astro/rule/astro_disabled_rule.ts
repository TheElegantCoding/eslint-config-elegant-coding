import type { Linter } from 'eslint';

const astroDisabledRule: Linter.RulesRecord =
{
  'astro/jsx-a11y/media-has-caption': 'off',
  'astro/no-set-html-directive': 'off',
  'astro/no-set-text-directive': 'off',
  'astro/prefer-object-class-list': 'off',
  'astro/prefer-split-class-list': 'off',
  'no-duplicate-imports': 'off'
};

export { astroDisabledRule };