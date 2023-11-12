const importOverride =
[
  {
    files: [ 'vite.config.ts', 'vite.config.js' ],
    rules: {
      'import/no-anonymous-default-export': 'off'
    }
  }
];

export { importOverride };