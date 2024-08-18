import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';
import stylisticJs from '@stylistic/eslint-plugin-js'


export default [
  { files: ['**/*.{js,mjs,cjs,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/block-spacing': ['error', 'always'],
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/comma-dangle': ['error', 'never'],
      '@stylistic/js/object-curly-spacing': [ 'error', 'always'],
      '@stylistic/js/keyword-spacing': ['error']
    }
  },

  eslintConfigPrettier
];
