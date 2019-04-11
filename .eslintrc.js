module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "prefer-const": "off",
    "no-trailing-spaces": "off",
    "vue/max-attributes-per-line": "off"
  }
}
