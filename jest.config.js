module.exports = {
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    './jest.setup',
  ],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
};
