import type { Linter } from 'eslint';

const typescriptOverrides: Linter.FlatConfig[] =
[
  {
    files: [ '**/env.d.ts' ],
    name: 'typescript:definitions',
    rules:
    {
      'ts/consistent-type-definitions': 'off'
    }
  }
];

export { typescriptOverrides };