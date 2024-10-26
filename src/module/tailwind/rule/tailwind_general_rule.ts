import type { Linter } from 'eslint';

const tailwindGeneralRule: Linter.RulesRecord =
{
  'tailwind/classnames-order': 'error',
  'tailwind/enforces-negative-arbitrary-values': 'error',
  'tailwind/enforces-shorthand': 'error',
  'tailwind/migration-from-tailwind-2': 'error',
  'tailwind/no-contradicting-classname': 'error'
};

export { tailwindGeneralRule };