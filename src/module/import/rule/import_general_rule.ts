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
  'import/no-extraneous-dependencies':
  [
    'error',
    {
      bundledDependencies: false,
      devDependencies: [
        '**/test/**',
        '**/script/**',
        '**/tes**',
        '**/spec/**',
        '**/__tests__/**',
        '**/__mocks__/**',
        '**/*.test.*',
        '**/*.spec.*',
        '**/*.e2e.*',
        '**/*.e2e-spec.*',
        '**/jest.config.{js,cjs,mjs,ts,cts,mts}',
        '**/jest.setup.{js,cjs,mjs,ts,cts,mts}',
        '**/setupTests.{js,cjs,mjs,ts,cts,mts}',
        '**/cypress.config.{js,cjs,mjs,ts,cts,mts}',
        '**/playwright.config.{js,cjs,mjs,ts,cts,mts}',
        '**/vue.config.{js,cjs,mjs,ts,cts,mts}',
        '**/next.config.{js,cjs,mjs,ts,cts,mts}',
        '**/nuxt.config.{js,cjs,mjs,ts,cts,mts}',
        '**/webpack.config.{js,cjs,mjs,ts,cts,mts}',
        '**/webpack.config.*.{js,cjs,mjs,ts,cts,mts}',
        '**/rollup.config.{js,cjs,mjs,ts,cts,mts}',
        '**/rollup.config.*.{js,cjs,mjs,ts,cts,mts}',
        '**/vite.config.{js,cjs,mjs,ts,cts,mts}',
        '**/vitest.config.{js,cjs,mjs,ts,cts,mts}',
        '**/gulpfile.{js,cjs,mjs,ts,cts,mts}',
        '**/gulpfile.*.{js,cjs,mjs,ts,cts,mts}',
        '**/Gruntfile{,.js,.cjs,.mjs,.ts,.cts,.mts}',
        '**/protractor.conf.{js,cjs,mjs,ts,cts,mts}',
        '**/protractor.conf.*.{js,cjs,mjs,ts,cts,mts}',
        '**/karma.conf.{js,cjs,mjs,ts,cts,mts}',
        '**/eslint.config.{js,cjs,mjs,ts,cts,mts}',
        '**/astro.config.{js,cjs,mjs,ts,cts,mts}',
        '**/tsup.config.{js,cjs,mjs,ts,cts,mts}'
      ],
      includeTypes: true,
      optionalDependencies: false,
      peerDependencies: false
    }
  ],
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