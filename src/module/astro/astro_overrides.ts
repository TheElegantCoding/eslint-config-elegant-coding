const astroOverride = [
  {
    files: [ '*.astro' ],
    parser: 'astro-eslint-parser',
    parserOptions: {
      extraFileExtensions: [ '.astro' ],
      parser: '@typescript-eslint/parser'
    }
  }
];

export { astroOverride };