module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@UIKit': './src/UIKit/index.ts',
          '@screens': './src/screens/index.ts',
          '@navigation': './src/navigation/index.ts',
          '^@assets/(.+)': './assets/\\1',
          '@assets/images': './assets/images/index.ts',
        },
      },
    ],
  ],
};
