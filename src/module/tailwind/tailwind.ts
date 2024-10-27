import { tailwindDisabledRule } from '@module/tailwind/rule/tailwind_disabled_rule';
import { tailwindGeneralRule } from '@module/tailwind/rule/tailwind_general_rule';
import pluginTailwind from 'eslint-plugin-tailwindcss';

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
    tailwind: pluginTailwind
  },
  rules:
  {
    ...tailwindGeneralRule,
    ...tailwindDisabledRule
  }
};

export { tailwind };