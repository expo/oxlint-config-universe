import { defineConfig } from 'oxlint';

/**
 * TypeScript-specific rules.
 */
export default defineConfig({
  plugins: ['typescript'],
  rules: {
    'typescript/no-dupe-class-members': 'warn',
    'typescript/no-redeclare': 'warn',
    'typescript/no-unused-expressions': ['warn', { allowShortCircuit: true, enforceForJSX: true }],
    'typescript/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'typescript/no-useless-constructor': 'warn',
    'typescript/array-type': ['warn', { default: 'array' }],
    'typescript/no-empty-object-type': ['warn', { allowInterfaces: 'with-single-extends' }],
    'typescript/no-wrapper-object-types': 'warn',
    'typescript/consistent-type-assertions': [
      'warn',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' },
    ],
    'typescript/no-extra-non-null-assertion': 'warn',

    // The typescript-eslint FAQ recommends turning off "no-undef" in favor
    // of letting tsc check for undefined variables, including types
    'no-undef': 'off',
  },
});
