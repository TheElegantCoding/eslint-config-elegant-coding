import type { Linter } from 'eslint';

const qwikGeneralRule: Linter.RulesRecord =
{
  'qwik/jsx-a': 'error',
  'qwik/jsx-key': 'error',
  'qwik/jsx-no-script-url': 'error',
  'qwik/loader-location': 'error',
  'qwik/no-react-props': 'error',
  'qwik/no-use-visible-task': 'error',
  'qwik/prefer-classlist': 'error',
  'qwik/unused-server': 'error',
  'qwik/use-method-usage': 'error',
  'qwik/valid-lexical-scope': 'error'
};

export { qwikGeneralRule };