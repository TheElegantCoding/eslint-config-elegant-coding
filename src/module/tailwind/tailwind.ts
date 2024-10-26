import { pluginTailwind } from '@global/plugin/plugin';
import { tailwindDisabledRule } from '@module/tailwind/rule/tailwind_disabled_rule';
import { tailwindGeneralRule } from '@module/tailwind/rule/tailwind_general_rule';

import type { Linter } from 'eslint';

const tailwind: Linter.Config =
{
  languageOptions:
  {
    parserOptions:
    {
      ecmaFeatures:
      {
        jsx: true
      }
    }
  },
  name: 'tailwind',
  plugins:
  {
    tailwind: pluginTailwind as unknown as Plugin
  },
  rules:
  {
    ...tailwindGeneralRule,
    ...tailwindDisabledRule
  }
};

export { tailwind };