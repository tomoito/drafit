module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-param-reassign': ['off'],
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/prop-types': 'off',
    'max-len': ['off'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.jsx',
          '.tsx',
        ],
      },
    ],
    'react/jsx-props-no-spreading': ['off'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // 'linebreak-style': ['windows'],

  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
