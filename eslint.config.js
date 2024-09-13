// import js from '@eslint/js'
// import tseslint from 'typescript-eslint'

// export default tseslint.config(
//   { ignores: ['dist'] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//     },
//     rules: {
//       semi: ['error', 'never'], // Inga semikolon (samma som Prettier)
//       quotes: ['error', 'single'], // Enkla citationstecken (samma som Prettier)
//       eqeqeq: 'error', // Kräver strikt jämförelse (=== och !==)
//       indent: ['error', 2], // Indentering med 2 mellanslag (samma som Prettier)
//       'object-curly-spacing': ['error', 'always'], // Bracket spacing (samma som Prettier)
//     },
    
//   },
// )



import { config as tsConfig, configs as tsConfigs } from '@typescript-eslint/eslint-plugin';
import { config as jsConfig } from '@eslint/js';

export default {
  ...tsConfig,
  extends: [jsConfig.recommended, ...tsConfigs.recommended],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    semi: ['error', 'never'], // Inga semikolon (samma som Prettier)
    quotes: ['error', 'single'], // Enkla citationstecken (samma som Prettier)
    eqeqeq: 'error', // Kräver strikt jämförelse (=== och !==)
    indent: ['error', 2], // Indentering med 2 mellanslag (samma som Prettier)
    'object-curly-spacing': ['error', 'always'], // Bracket spacing (samma som Prettier)
  },
};
