import elegantCoding from './dist/index.js';

export default elegantCoding({
  astro: true,
  html: true,
  json: true,
  solid: true,
  stylistic: true,
  typescript: true,
  yml: true
}, [
  {
    rules:
    {
      'unicorn/no-null': 'off'
    }
  }
]);