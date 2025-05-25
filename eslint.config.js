import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '*.min.js',
      'coverage/**',
      '.nyc_output/**',
      'docs/**',
      'build/**'
    ]
  },

  js.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // General rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',

      // Prettier integration
      'prettier/prettier': [
        'error',
        {
          semi: false,
          printWidth: 100,
          singleQuote: true,
          trailingComma: 'none',
          tabWidth: 2,
          useTabs: false,
          endOfLine: 'lf'
        }
      ]
    }
  },

  // JavaScript files configuration
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      prettier
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'prettier/prettier': [
        'error',
        {
          semi: false,
          printWidth: 100,
          singleQuote: true,
          trailingComma: 'none',
          tabWidth: 2,
          useTabs: false,
          endOfLine: 'lf'
        }
      ]
    }
  },

  // Prettier config to disable conflicting rules
  prettierConfig
]
