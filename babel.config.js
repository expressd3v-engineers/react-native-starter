module.exports = function(api) {
  api.cache(true);

  const moduleOption = {
    "root": ["./"],
    alias: {
      apis: './src/apis',
      components: './src/components',
      models: './src/models',
      navigations: './src/navigations',
      utils: './src/utils',
      views: './src/views',
    }
  };

  return {
    presets: ['babel-preset-expo'],
    plugins: [['module-resolver', moduleOption]]
  };
};
