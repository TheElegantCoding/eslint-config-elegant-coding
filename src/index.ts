import { eslint } from './module/eslint/eslint';
import { eslintImport } from './module/import/import';
import { perfectionist } from './module/perfectionist/perfectionist';
import { promise } from './module/promise/promise';
import { security } from './module/security/security';
import { sonar } from './module/sonar/sonar';
import { unicorn } from './module/unicorn/unicorn';

const index =
{
  env:
  {
    amd: false,
    browser: true,
    es6: true,
    jasmine: false,
    mocha: false,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    ...eslintImport.plugins,
    ...unicorn.plugins,
    ...sonar.plugins,
    ...perfectionist.plugins,
    ...promise.plugins,
    ...security.plugins
  ],
  rules: {
    ...eslint.rules,
    ...eslintImport.rules,
    ...unicorn.rules,
    ...sonar.rules,
    ...perfectionist.rules,
    ...promise.rules,
    ...security.rules
  },
  settings: {
    ...eslintImport.settings
  }
};

export = index;