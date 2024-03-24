/* eslint-disable ts/no-unsafe-assignment */
import { pluginJsxA11y } from '@global/plugin/plugin';
import { jsxA11yDisabledRule } from '@module/jsx_a11y/rule/jsx_a11y_disabled_rule';
import { jsxA11yGeneralRule } from '@module/jsx_a11y/rule/jsx_a11y_general_rule';

const jsxA11y =
{
  name: 'jsx-a11y',
  plugins:
  {
    'jsx-a11y': pluginJsxA11y
  },
  rules:
  {
    ...jsxA11yGeneralRule,
    ...jsxA11yDisabledRule
  }
};

export { jsxA11y };