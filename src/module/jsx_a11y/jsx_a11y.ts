import { pluginJsxA11y } from '@global/plugin/plugin';
import { jsxA11yGeneralRule } from './rule/jsx_a11y_general_rule';

const jsxA11y =
{
  plugins:
  {
    'jsx-a11y': pluginJsxA11y
  },
  rules:
  {
    ...jsxA11yGeneralRule
  }
};

export default jsxA11y;