const typescriptOverrides =
[
  {
    files: [ 'vite.config.ts', 'vite.config.js', 'astro.config.mjs' ],
    rules: {
      'import/no-anonymous-default-export': 'off'
    }
  },
  {
    files: [ '*.ts', '*.tsx' ],
    rules: {
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off'
    }
  },
  {
    files: [ 'env.d.ts' ],
    rules:
    {
      '@typescript-eslint/consistent-type-definitions': 'off'
    }
  }
];

export { typescriptOverrides };