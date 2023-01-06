/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  globals: {
    $: 'readonly',
    $$: 'readonly',
    $ref: 'readonly',
    $computed: 'readonly',
    module: 'readonly',
    require: 'readonly',
    VueNode: 'readonly',
    NodeJS: 'readonly',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-setup-props-destructure': 'off',
  },
};
