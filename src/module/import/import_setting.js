const eslintImportSetting =
{
  'import/resolver':
    {
      node: { extensions: [ '.mjs', '.js', '.json' ] }
    },
  'import/extensions': [ '.js', '.mjs', '.jsx' ],
  'import/core-modules': [],
  'import/ignore': [ 'node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$' ]
};

module.exports = { eslintImportSetting };