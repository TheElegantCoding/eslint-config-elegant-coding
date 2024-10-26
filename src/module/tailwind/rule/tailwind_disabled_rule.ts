import type { Linter } from 'eslint';

const tailwindDisabledRule: Linter.RulesRecord =
{
  'tailwind/no-arbitrary-value': 'off',
  'tailwind/no-custom-classname': 'off'
};

export { tailwindDisabledRule };