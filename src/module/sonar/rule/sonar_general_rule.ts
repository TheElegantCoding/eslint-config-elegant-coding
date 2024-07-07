import type { Linter } from 'eslint';

const complexity = 20;

const sonarGeneralRule: Linter.RulesRecord =
{
  'sonar/cognitive-complexity': [ 'error', complexity ],
  'sonar/elseif-without-else': 'error',
  'sonar/max-switch-cases': 'error',
  'sonar/no-all-duplicated-branches': 'error',
  'sonar/no-collapsible-if': 'error',
  'sonar/no-collection-size-mischeck': 'error',
  'sonar/no-duplicated-branches': 'error',
  'sonar/no-element-overwrite': 'error',
  'sonar/no-empty-collection': 'error',
  'sonar/no-extra-arguments': 'error',
  'sonar/no-gratuitous-expressions': 'error',
  'sonar/no-identical-conditions': 'error',
  'sonar/no-identical-expressions': 'error',
  'sonar/no-identical-functions': 'error',
  'sonar/no-ignored-return': 'error',
  'sonar/no-inverted-boolean-check': 'error',
  'sonar/no-nested-switch': 'error',
  'sonar/no-nested-template-literals': 'error',
  'sonar/no-one-iteration-loop': 'error',
  'sonar/no-redundant-boolean': 'error',
  'sonar/no-redundant-jump': 'error',
  'sonar/no-same-line-conditional': 'error',
  'sonar/no-small-switch': 'error',
  'sonar/no-unused-collection': 'error',
  'sonar/no-use-of-empty-return-value': 'error',
  'sonar/no-useless-catch': 'error',
  'sonar/non-existent-operator': 'error',
  'sonar/prefer-immediate-return': 'error',
  'sonar/prefer-object-literal': 'error',
  'sonar/prefer-single-boolean-return': 'error',
  'sonar/prefer-while': 'error'
};

export { sonarGeneralRule };