import type { Linter } from 'eslint';

const securityDisableRule: Linter.RulesRecord =
{
  'security/detect-non-literal-regexp': 'off'
};

export { securityDisableRule };