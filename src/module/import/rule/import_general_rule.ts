import type { Linter } from 'eslint';

const importGeneralRule: Linter.RulesRecord =
{
  'import/consistent-type-specifier-style': [ 'error', 'prefer-top-level' ],
  'import/default': 'error',
  'import/export': 'error',
  'import/exports-last': 'error',
  'import/first': 'error',
  'import/group-exports': 'error',
  'import/named': [ 'error', { commonjs: true } ],
  'import/namespace': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-amd': 'error',
  'import/no-anonymous-default-export': [ 'error', { allowCallExpression: false } ],
  'import/no-cycle': [ 'error', { commonjs: true } ],
  'import/no-deprecated': 'error',
  'import/no-duplicates': [ 'error', { 'prefer-inline': false } ],
  'import/no-empty-named-blocks': 'error',
  'import/no-import-module-exports': [ 'error', { exceptions: [] } ],
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'error',
  'import/no-named-as-default-member': 'error',
  'import/no-named-default': 'error',
  'import/no-namespace': 'error',
  'import/no-relative-packages': 'error',
  'import/no-self-import': 'error',
  'import/no-useless-path-segments': [ 'error', { commonjs: true } ],
  'import/no-webpack-loader-syntax': 'error'
};

export { importGeneralRule };