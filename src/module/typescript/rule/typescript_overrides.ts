const typescriptOverrides =
[
  {
    files: [ 'vite.config.ts', 'vite.config.js', 'astro.config.mjs' ],
    name: 'typescript:vite',
    rules: {
      'import/no-anonymous-default-export': 'off'
    }
  },
  {
    files: [ '*.ts', '*.tsx', '*.astro' ],
    name: 'typescript:import',
    rules: {
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off'
    }
  },
  {
    files: [ 'env.d.ts' ],
    name: 'typescript:definitions',
    rules:
    {
      'ts/consistent-type-definitions': 'off'
    }
  }
];

export { typescriptOverrides };