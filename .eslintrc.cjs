module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    // indent: ['error', 2],
    // 'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // '@typescript-eslint/indent': ['error', 2],
    'react/react-in-jsx-scope': 'off',
  },
};
