import { stylisticGeneralRule } from '@module/stylistic/rule/stylistic_general_rule';

const indent = 2;

const ymlGeneralRule =
{
  'yml/block-mapping': 'error',
  'yml/block-mapping-colon-indicator-newline': 'error',
  'yml/block-mapping-question-indicator-newline': 'error',
  'yml/block-sequence': 'error',
  'yml/block-sequence-hyphen-indicator-newline': 'error',
  'yml/file-extension': [
    'error', {
      caseSensitive: true,
      extension: 'yml'
    }
  ],
  'yml/flow-mapping-curly-newline': 'error',
  'yml/flow-mapping-curly-spacing': stylisticGeneralRule['style/object-curly-spacing'],
  'yml/flow-sequence-bracket-newline': stylisticGeneralRule['style/array-bracket-newline'],
  'yml/flow-sequence-bracket-spacing': stylisticGeneralRule['style/array-bracket-spacing'],
  'yml/indent': [ 'error', indent ],
  'yml/key-spacing': [
    'error', {
      afterColon: true,
      beforeColon: false,
      mode: 'strict'
    }
  ],
  'yml/no-empty-document': 'error',
  'yml/no-empty-key': 'error',
  'yml/no-empty-mapping-value': 'error',
  'yml/no-empty-sequence-entry': 'error',
  'yml/no-irregular-whitespace': 'error',
  'yml/no-multiple-empty-lines': [ 'error', { max: 1 }],
  'yml/no-tab-indent': 'error',
  'yml/no-trailing-zeros': 'error',
  'yml/plain-scalar': 'error',
  'yml/quotes': [
    'error', {
      avoidEscape: false,
      prefer: 'single'
    }
  ],
  'yml/require-string-key': 'error',
  'yml/spaced-comment': 'error',
  'yml/vue-custom-block/no-parsing-error': 'error'
};

export { ymlGeneralRule };