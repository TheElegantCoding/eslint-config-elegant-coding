const importDisabledRule =
{
  'import/dynamic-import-chunkname': 'off',
  'import/max-dependencies': 'off',
  'import/no-commonjs': 'off',
  'import/no-default-export': 'off',
  'import/no-dynamic-require': [ 'off', { esmodule: true }],
  'import/no-internal-modules': 'off',
  'import/no-named-export': 'off',
  'import/no-nodejs-modules': 'off',
  'import/no-relative-parent-imports': 'off',
  'import/no-restricted-paths': 'off',
  'import/no-unassigned-import': 'off',
  'import/no-unresolved': [
    'off',
    {
      caseSensitive: true,
      commonjs: true
    }
  ],
  'import/no-unused-modules': 'off',
  'import/order': 'off',
  'import/prefer-default-export': 'off',
  'import/unambiguous': 'off'
};

export { importDisabledRule };