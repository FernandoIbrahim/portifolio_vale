/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'warn'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
};


