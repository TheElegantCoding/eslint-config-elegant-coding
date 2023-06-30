import { jsxA11yGeneralRule } from './module/jsx_a11y/rule/jsx_a11y_general_rule';

const jsxA11y =
{
  plugins: [ 'jsx-a11y' ],
  rules: {
    ...jsxA11yGeneralRule
  }
};

export = jsxA11y;