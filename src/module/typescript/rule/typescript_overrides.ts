const typescriptOverrides =
[
  {
    files: [ '*.ts', '*.tsx' ],
    rules: {
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off'
    }
  }
];

export { typescriptOverrides };