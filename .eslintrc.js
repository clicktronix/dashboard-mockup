module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'react/prop-types': 'off',
    'react/no-danger': 'error',
    'react/static-property-placement': 'off',
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    'react/button-has-type': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'getters',
          'setters',
          'lifecycle',
          'render',
          'instance-methods',
          'everything-else',
        ],
      },
    ],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides: { arrow: { before: true, after: true } },
      },
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-len': ['error', { code: 90, ignoreComments: true }],
    indent: ['error', 2, { ObjectExpression: 1 }],
    'arrow-parens': 'off',
    'no-underscore-dangle': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-array-index-key': 'off',
  },
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  globals: {
    window: 'readonly',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
    },
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'import',
    'prettier',
    'react-hooks',
    'react',
  ],
};
