import type { Linter } from 'eslint';

const typescriptOverrides: Linter.Config[] =
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