module.exports = function (config) {
  config.set({
    mutator: 'typescript',
    testRunner: 'jest',
    testFramework: 'jest',

    packageManager: 'npm',
    reporters: ['html', 'clear-text', 'progress', 'dashboard'],
    coverageAnalysis: 'off',
    transpilers: [],
    tsconfigFile: 'tsconfig.json',
    jest: {
      configFile: 'jest.config.js'
    },
    mutate: ['src/**/*.ts']
  });
};
