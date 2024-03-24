const typescriptOverrides =
[
  {
    files: [ 'vite.config.ts', 'vite.config.js', 'astro.config.mjs' ],
    rules: {
      'import/no-anonymous-default-export': 'off'
    }
  },
  {
    files: [ '*.ts', '*.tsx', '*.astro' ],
    rules: {
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
      'no-duplicate-imports': 'off'
    }
  },
  {
    files: [ 'env.d.ts' ],
    rules:
    {
      'ts/consistent-type-definitions': 'off'
    }
  }
];

export { typescriptOverrides };