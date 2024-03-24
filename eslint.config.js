import elegantCoding from './dist/index.js';

export default elegantCoding({
  astro: true,
  html: true,
  ignore: [ 'postcss.config.cjs' ],
  json: true,
  stylistic: true,
  typescript: true,
  yml: true
});