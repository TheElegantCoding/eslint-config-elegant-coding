/* eslint-disable ts/no-unsafe-member-access */
/* eslint-disable ts/no-explicit-any */
/* eslint-disable ts/no-unsafe-return */
import type { Awaitable } from '@global/type/awaitable';

const interopDefault = async <T>(importPackage: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> =>
{
  const resolved = await importPackage;

  return (resolved as any).default || resolved;
};

export { interopDefault };