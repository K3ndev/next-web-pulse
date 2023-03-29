module.exports = {
  parserOptions: {
    project: ['./jsconfig.json'],
  },
  extends: [
    'next/core-web-vitals',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  rules: { 'prettier/prettier': ['error', { endOfLine: 'auto' }] },
};
