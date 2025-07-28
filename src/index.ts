import { IGNORE } from '@global/constant/ignore';
import { astro } from '@module/astro/astro';
import { html } from '@module/html/html';
import { imports } from '@module/import/import';
import { javascript } from '@module/javascript/javascript';
import { json } from '@module/json/json';
import { node } from '@module/node/node';
import { perfectionist } from '@module/perfectionist/perfectionist';
import { regex } from '@module/regex/regex';
import { solid } from '@module/solid/solid';
import { stylistic } from '@module/stylistic/stylistic';
import { tailwind } from '@module/tailwind/tailwind';
import { typescript } from '@module/typescript/typescript';
import { unicorn } from '@module/unicorn/unicorn';
import { yml } from '@module/yml/yml';

import type { ConfigurationOption } from '@global/type/configuration_option';
import type { Linter } from 'eslint';

const eslintFramework = (config: Linter.Config[], option: ConfigurationOption) =>
{
  if(option.solid)
  {
    config.push(solid);
  }

  if(option.astro)
  {
    config.push(...astro);
  }

  if(option.tailwind)
  {
    config.push(tailwind);
  }
};

const eslintLanguage = (config: Linter.Config[], option: ConfigurationOption) =>
{
  if(option.typescript)
  {
    config.push(...typescript);
  }

  if(option.html)
  {
    config.push(html);
  }
};

const eslintFileConfiguration = (config: Linter.Config[], option: ConfigurationOption) =>
{
  if(option.json)
  {
    config.push(...json);
  }

  if(option.yml)
  {
    config.push(yml);
  }
};

const pushRules = (config: Linter.Config[], option: ConfigurationOption) =>
{
  eslintFileConfiguration(config, option);
  eslintFramework(config, option);
  eslintLanguage(config, option);
};

const elegantCoding = (
  option: ConfigurationOption,
  override: Linter.Config | Linter.Config[] = []
): Linter.Config[] =>
{
  const config: Linter.Config[] = [];

  config.push(
    { ignores: [ ...IGNORE, ...option.ignore ?? [] ] },
    javascript,
    ...imports,
    unicorn,
    perfectionist,
    node,
    regex
  );

  if(option.stylistic)
  {
    config.push(stylistic);
  }

  pushRules(config, option);

  if(Object.keys(override).length > 0)
  {
    config.push(...Array.isArray(override) ? override : [ override ]);
  }

  return config;
};

export default elegantCoding;