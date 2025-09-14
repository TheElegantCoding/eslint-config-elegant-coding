import type { Linter } from 'eslint';

const importDisabledRule: Linter.RulesRecord =
{
  'import/dynamic-import-chunkname': 'off',
  'import/max-dependencies': 'off',
  'import/no-commonjs': 'off',
  'import/no-default-export': 'off',
  'import/no-dynamic-require': [ 'off', { esmodule: true } ],
  'import/no-extraneous-dependencies':
  [
    'off',
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