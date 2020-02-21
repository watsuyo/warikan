module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:vue/recommended'
  ],
  plugins: ['@typescript-eslint'],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'vue/html-indent': ['error', 2],
    'vue/html-self-closing': 'off', //imgタグのようにタグが１つで完結してもOK
    'vue/max-attributes-per-line': 'off',
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  }
}
