const sortPackageJson =
[
  {
    files: [ '**/package.json' ],
    name: 'json:sort-package-json',
    rules: {
      'json/sort-array-values': [
        'error',
        {
          order: { type: 'asc' },
          pathPattern: '^files$'
        }
      ],
      'json/sort-keys': [
        'error',
        {
          order: [
            'publisher',
            'name',
            'displayName',
            'description',
            'author',
            'license',
            'version',
            'private',
            'funding',
            'homepage',
            'repository',
            'keywords',
            'categories',
            'sideEffects',
            'bugs',
            'type',
            'packageManager',
            'exports',
            'main',
            'module',
            'unpkg',
            'jsdelivr',
            'types',
            'typesVersions',
            'bin',
            'icon',
            'files',
            'engines',
            'activationEvents',
            'contributes',
            'scripts',
            'peerDependencies',
            'peerDependenciesMeta',
            'dependencies',
            'optionalDependencies',
            'devDependencies',
            'pnpm',
            'overrides',
            'resolutions',
            'husky',
            'simple-git-hooks',
            'lint-staged',
            'eslintConfig'
          ],
          pathPattern: '^$'
        },
        {
          order: { type: 'asc' },
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$'
        },
        {
          order: { type: 'asc' },
          pathPattern: '^(?:resolutions|overrides|pnpm.overrides)$'
        },
        {
          order: [
            'types',
            'import',
            'require',
            'default'
          ],
          pathPattern: '^exports.*$'
        }
      ],
      'jsonc/auto': 'off'
    }
  }
];

export { sortPackageJson };