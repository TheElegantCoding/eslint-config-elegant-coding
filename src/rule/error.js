const error =
{
  'constructor-super': 'error',
  'for-direction': 'error',
  'getter-return': [ 'error', { allowImplicit: true } ],
  'no-async-promise-executor': 'error',
  'no-await-in-loop': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': [ 'error', 'always' ],
  'no-constant-binary-expression': 'error',
  'no-constant-condition': 'error',
  'no-constructor-return': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-duplicate-imports': 'error',
  'no-empty-character-class': 'error',
  'no-empty-pattern': 'error',
  'no-ex-assign': 'error',
  'no-fallthrough': 'error',
  'no-func-assign': 'error',
  'no-import-assign': 'error',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': 'error',
  'no-loss-of-precision': 'error',
  'no-misleading-character-class': 'error',
  'no-new-native-nonconstructor': 'error',
  'no-new-symbol': 'error',
  'no-obj-calls': 'error',
  'no-promise-executor-return': 'error',
  'no-prototype-builtins': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-setter-return': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-this-before-super': 'error',
  'no-undef': 'error',
  'no-unexpected-multiline': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unreachable': 'error',
  'no-unreachable-loop': [ 'error', { ignore: [] } ],
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unsafe-optional-chaining': [ 'error', { disallowArithmeticOperators: true } ],
  'no-unused-private-class-members': 'error',
  'no-unused-vars': [ 'error', { vars: 'all', args: 'all' } ],
  'no-use-before-define': [
    'error',
    {
      functions: true,
      classes: true,
      variables: true
    }
  ],
  'no-useless-backreference': 'error',
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-confusing-arrow': [ 'error', { allowParens: true } ],
  'no-console': 'error',
  'no-continue': 'error',
  'no-delete-var': 'error',
  'no-div-regex': 'error',
  'no-else-return': [ 'error', { allowElseIf: false } ],
  'no-empty': 'error',
  'no-empty-function': 'error',
  'no-empty-static-block': 'error',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-label': 'error',
  'no-extra-semi': 'error',
  'no-floating-decimal': 'error',
  'no-global-assign': 'error',
  'no-implicit-coercion': 'error',
  'no-implicit-globals': 'off',
  'no-implied-eval': 'error',
  'no-inline-comments': 'error',
  'no-invalid-this': 'off',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'error',
  'no-magic-numbers': [
    'error',
    {
      ignore: [ 0, 1 ],
      ignoreArrayIndexes: true,
      ignoreDefaultValues: true,
      ignoreClassFieldInitialValues: true,
      enforceConst: true,
      detectObjects: false
    }
  ],
  'no-mixed-operators': [
    'error',
    {
      groups: [
        [ '%', '**' ],
        [ '%', '+' ],
        [ '%', '-' ],
        [ '%', '*' ],
        [ '%', '/' ],
        [ '/', '*' ],
        [
          '&',
          '|',
          '<<',
          '>>',
          '>>>'
        ],
        [ '==', '!=', '===', '!==' ],
        [ '&&', '||' ]
      ],
      allowSamePrecedence: false
    }
  ],
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-object': 'error',
  'no-new-wrappers': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: [
        'acc',
        'accumulator',
        'e',
        'ctx',
        'context',
        'req',
        'request',
        'res',
        'response',
        '$scope',
        'staticContext'
      ]
    }
  ],
  'no-plusplus': 'off',
  'no-proto': 'error',
  'no-redeclare': 'error',
  'no-regex-spaces': 'error',
  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message: 'Use Number.isFinite instead'
    },
    {
      name: 'isNaN',
      message: 'Use Number.isNaN instead'
    }
  ],
  'no-restricted-imports': 'error',
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated'
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.'
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.'
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.'
    }
  ],
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      // eslint-disable-next-line max-len
      message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
    },
    {
      selector: 'ForOfStatement',
      // eslint-disable-next-line max-len
      message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
    },
    {
      selector: 'LabeledStatement',
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
    },
    {
      selector: 'WithStatement',
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
    }
  ],
  'no-return-assign': [ 'error', 'always' ],
  'no-return-await': 'error',
  'no-script-url': 'error',
  'no-sequences': 'error',
  'no-shadow': 'error',
  'no-shadow-restricted-names': 'error',
  'no-ternary': 'off',
  'no-throw-literal': 'error',
  'no-undef-init': 'error',
  'no-undefined': 'error',
  'no-underscore-dangle': [
    'error',
    {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true
    }
  ],
  'no-unneeded-ternary': [ 'error', { defaultAssignment: false } ],
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false
    }
  ],
  'no-unused-labels': 'error',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-escape': 'error',
  'no-useless-rename': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false
    }
  ],
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'no-warning-comments': 'error',
  'no-with': 'error'
};

module.exports = { error };