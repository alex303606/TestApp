module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@UIKit": "./src/UIKit/index.ts",
        },
      },
    ],
  ],
};
