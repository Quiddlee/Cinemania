module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'prettier.config.js', '@typescript-eslint', 'node_modules', 'tailwind.config.js'],
  plugins: ['react', 'react-refresh', 'simple-import-sort', 'import', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // TODO: remove 👇 after 1 module
    'react/jsx-no-constructed-context-values': 0,
    'import/no-extraneous-dependencies': 0,
    'react/static-property-placement': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/state-in-constructor': ['error', 'never'],
    'react/prefer-stateless-function': 0,
    'no-void': 0,
    'react/react-in-jsx-scope': 0,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'always',
        'tsx': 'always'
      }
    ],
    'import/namespace': 0,
    'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}],
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      react: {
        version: 'detect',
      },
    },
  },
};
