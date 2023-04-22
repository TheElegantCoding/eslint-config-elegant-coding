module.exports =
{
  plugins: [
    'import'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json']
      }
    },
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx'
    ],
    'import/core-modules': [
    ],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$'
    ]
  },
  rules: {
    'import/export': 'error',
    'import/no-deprecated': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'test/**',
        'tests/**',
        'spec/**',
        '**/__tests__/**',
        '**/__mocks__/**',
        'test.{js,jsx}',
        'test-*.{js,jsx}',
        '**/*{.,_}{test,spec}.{js,jsx}',
        '**/jest.config.js',
        '**/jest.setup.js',
        '**/vue.config.js',
        '**/webpack.config.js',
        '**/webpack.config.*.js',
        '**/rollup.config.js',
        '**/rollup.config.*.js',
        '**/gulpfile.js',
        '**/gulpfile.*.js',
        '**/Gruntfile{,.js}',
        '**/protractor.conf.js',
        '**/protractor.conf.*.js',
        '**/karma.conf.js',
        '**/.eslintrc.js'
      ],
      optionalDependencies: false
    }],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-unused-modules': ['off', {
      ignoreExports: [],
      missingExports: true,
      unusedExports: true
    }],
    'import/no-amd': 'error',
    'import/no-commonjs': 'off',
    'import/no-import-module-exports': ['error', {
      exceptions: []
    }],
    'import/no-nodejs-modules': 'off',
    'import/unambiguous': 'off',
    'import/default': 'off',
    'import/named': 'error',
    'import/namespace': 'off',
    'import/no-absolute-path': 'error',
    'import/no-cycle': ['error', { maxDepth: '∞' }],
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': ['off', {
      allow: []
    }],
    'import/no-relative-packages': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    'import/no-webpack-loader-syntax': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/dynamic-import-chunkname': ['off', {
      importFunctions: [],
      webpackChunknameFormat: '[0-9a-zA-Z-_/.]+'
    }],
    'import/exports-last': 'error',
    'import/first': 'error',
    'import/group-exports': 'error',
    'import/max-dependencies': ['off', { max: 10 }],
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': ['off', {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false
    }],
    'import/no-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-unassigned-import': 'off',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'type', 'internal']]
      }
    ],
    'import/prefer-default-export': 'error'

  }
};