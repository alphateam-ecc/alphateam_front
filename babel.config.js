module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // この行が reanimated のために必要です
      'react-native-reanimated/plugin', 
    ],
  };
};