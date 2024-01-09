const indent = 2;

const htmlGeneralRule =
{
  '@html-eslint/element-newline': 'error',
  '@html-eslint/id-naming-convention': 'error',
  '@html-eslint/indent': [ 'error', indent ],
  '@html-eslint/lowercase': 'error',
  '@html-eslint/no-abstract-roles': 'error',
  '@html-eslint/no-accesskey-attrs': 'error',
  '@html-eslint/no-aria-hidden-body': 'error',
  '@html-eslint/no-duplicate-attrs': 'error',
  '@html-eslint/no-duplicate-id': 'error',
  '@html-eslint/no-extra-spacing-attrs': 'error',
  '@html-eslint/no-inline-styles': 'error',
  '@html-eslint/no-multiple-empty-lines': [ 'error', { max: 1 }],
  '@html-eslint/no-multiple-h1': 'error',
  '@html-eslint/no-non-scalable-viewport': 'error',
  '@html-eslint/no-obsolete-tags': 'error',
  '@html-eslint/no-positive-tabindex': 'error',
  '@html-eslint/no-script-style-type': 'error',
  '@html-eslint/no-skip-heading-levels': 'error',
  '@html-eslint/no-target-blank': 'error',
  '@html-eslint/no-trailing-spaces': 'error',
  '@html-eslint/quotes': [ 'error', 'single' ],
  '@html-eslint/require-closing-tags': 'error',
  '@html-eslint/require-doctype': 'error',
  '@html-eslint/require-frame-title': 'error',
  '@html-eslint/require-img-alt': 'error',
  '@html-eslint/require-lang': 'error',
  '@html-eslint/require-li-container': 'error',
  '@html-eslint/require-meta-charset': 'error',
  '@html-eslint/require-meta-description': 'error',
  '@html-eslint/require-meta-viewport': 'error',
  '@html-eslint/require-open-graph-protocol': 'error',
  '@html-eslint/require-title': 'error',
  '@html-eslint/sort-attrs': [ 'error', { priority: [] }]
};

export { htmlGeneralRule };