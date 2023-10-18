const typescriptOverrides =
[
  {
    files: [ '*.ts', '*.tsx' ],
    rules: {
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off'
    }
  },
  {
    files: [ '*.ts', '*.mts', '*.cts' ],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error'
    }
  }
];

export { typescriptOverrides };