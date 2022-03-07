// VSCode 使用 ESLint 配置文件需要去插件市场下载插件 ESLint

// VSCode 在 settings.json 设置文件中，增加以下代码
// "editor.codeActionsOnSave": {
//   "source.fixAll.eslint": true
// }

module.exports = {
  // root: true,
  env: {
    'vue/setup-compiler-macros': true,
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // 'airbnb-base', // airbnb-base 风格
    'plugin:prettier/recommended' // 添加 prettier 插件 (解决prettier冲突)
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // js
    'no-unused-vars': 'error', // 定义了但未使用的变量
    // ts
    '@typescript-eslint/no-unused-vars': 'error', // 定义了但未使用的变量
    // vue
    'vue/multi-word-component-names': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error' // 函数没有return的类型
  }
}
