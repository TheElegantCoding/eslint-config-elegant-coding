const promiseOverride =
[
  {
    files: [ '*.astro' ],
    name: 'promise:astro',
    rules: {
      'promise/no-native': 'off'
    }
  }
];

export { promiseOverride };