import type { Linter } from 'eslint';

const solidGeneralRule: Linter.RulesRecord =
{
  'solid/components-return-once': 'error',
  'solid/event-handlers': 'error',
  'solid/imports': 'error',
  'solid/jsx-no-duplicate-props': 'error',
  'solid/jsx-no-script-url': 'error',
  'solid/jsx-no-undef': [ 'error', { typescriptEnabled: true } ],
  'solid/jsx-uses-vars': 'error',
  'solid/no-array-handlers': 'error',
  'solid/no-destructure': 'error',
  'solid/no-innerhtml': 'error',
  'solid/no-proxy-apis': 'error',
  'solid/no-react-deps': 'error',
  'solid/no-react-specific-props': 'error',
  'solid/no-unknown-namespaces': 'error',
  'solid/prefer-for': 'error',
  'solid/prefer-show': 'error',
  'solid/reactivity': 'error',
  'solid/style-prop': 'error'
};

export { solidGeneralRule };