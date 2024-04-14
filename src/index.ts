/* eslint-disable max-statements */
import { IGNORE } from '@global/constant/ignore';
import { astro } from '@module/astro/astro';
import { github } from '@module/github/gihub';
import { html } from '@module/html/html';
import { imports } from '@module/import/import';
import { javascript } from '@module/javascript/javascript';
import { json } from '@module/json/json';
import { jsxA11y } from '@module/jsx_a11y/jsx_a11y';
import { node } from '@module/node/node';
import { perfectionist } from '@module/perfectionist/perfectionist';
import { promise } from '@module/promise/promise';
import { qwik } from '@module/qwik/qwik';
import { security } from '@module/security/security';
import { solid } from '@module/solid/solid';
import { sonar } from '@module/sonar/sonar';
import { stylistic } from '@module/stylistic/stylistic';
import { typescript } from '@module/typescript/typescript';
import { unicorn } from '@module/unicorn/unicorn';
import { yml } from '@module/yml/yml';

import type { ConfigurationOption } from '@global/type/configuration_option';

const elegantCoding = (option: ConfigurationOption) =>
{
  const config = [];

  const generalConfig =
  {
    ignores: [ ...IGNORE, ...option.ignore ?? [] ]
  };

  config.push(generalConfig,
    javascript,
    imports,
    ...unicorn,
    perfectionist,
    ...promise,
    ...github,
    security,
    node,
    sonar);

  if(option.stylistic)
  {
    config.push(stylistic);
  }

  if(option.typescript)
  {
    config.push(...typescript);
  }

  if(option.html)
  {
    config.push(html);
  }

  if(option.json)
  {
    config.push(...json);
  }

  if(option.yml)
  {
    config.push(yml);
  }

  if(option.jsxA11y)
  {
    config.push(jsxA11y);
  }

  if(option.qwik)
  {
    config.push(qwik);
  }

  if(option.solid)
  {
    config.push(solid);
  }

  if(option.astro)
  {
    config.push(astro);
  }

  return config;
};

export default elegantCoding;