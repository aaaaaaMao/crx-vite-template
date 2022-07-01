module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  plugins: [
    'vue', 
    '@typescript-eslint'
  ],
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'template-curly-spacing': ['error', 'never'],
    'vue/html-quotes': ['error', 'double'],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    indent: [
      'error',
      2,
      { MemberExpression: 0, SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] },
    ],
    'vue/multi-word-component-names': ['error', {
      'ignores': ['Window', 'Options', 'Popup']
    }],
    'vue/valid-v-for': 1
  }
}
