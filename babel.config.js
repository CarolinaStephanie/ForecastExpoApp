module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-syntax-optional-chaining',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            config: './src/config',
            screens: './src/screens',
            store: './src/store',
            components: './src/components',
          },
        },
      ],
    ],
  };
};
