const importOverride =
[
  {
    files: [ 'vite.config.ts', 'vite.config.js', 'astro.config.mjs' ],
    rules: {
      'import/no-anonymous-default-export': 'off'
    }
  }
];

export { importOverride };