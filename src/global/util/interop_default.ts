import type { Awaitable } from '@global/type/awaitable';

const interopDefault = async <T>(importPackage: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> =>
{
  const resolved = await importPackage;

  return (resolved as any).default || resolved;
};

export { interopDefault };