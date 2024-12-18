import type { Linter } from 'eslint';

const importOverride: Linter.Config[] =
[
  {
    files:
    [
      'vite.config.ts',
      'vite.config.js',
      'eslint.config.js',
      'tsup.config.ts',
      'astro.config.ts',
      'tailwind.config.js'
    ],
    name: 'import:vite',
    rules:
    {
      'import/no-anonymous-default-export': 'off'
    }
  },
  {
    files: [ '*.ts', '*.tsx' ],
    name: 'import:typescript',
    rules:
    {
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off'
    }
  }
];

export { importOverride };