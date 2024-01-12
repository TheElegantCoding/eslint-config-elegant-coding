const githubOverride =
[
  {
    files: [ '**/*.astro' ],
    rules:
    {
      'github/unescaped-html-literal': 'off'
    }
  }
];

export { githubOverride };