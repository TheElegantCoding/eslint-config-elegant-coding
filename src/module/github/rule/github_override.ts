const githubOverride =
[
  {
    files: [ '**/*.astro' ],
    name: 'github:astro',
    rules:
    {
      'github/a11y-aria-label-is-well-formatted': 'off',
      'github/a11y-no-visually-hidden-interactive-element': 'off',
      'github/a11y-role-supports-aria-props': 'off',
      'github/a11y-svg-has-accessible-name': 'off',
      'github/unescaped-html-literal': 'off'
    }
  }
];

export { githubOverride };