module.exports = {
  './src/**/*.{tsx,ts}': [
    'npm run lint',
    'npm run test:staged',
    'npm run format',
  ],
};
