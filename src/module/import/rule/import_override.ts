const importOverride =
[
  {
    files: [ 'vite.config.ts', 'vite.config.js' ],
    name: 'import:vite',
    rules: {
      'import/no-anonymous-default-export': 'off'
    }
  },
  {
    files: [ '*.ts', '*.tsx' ],
    name: 'import:typescript',
    rules: {
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off'
    }
  }
];

export { importOverride };