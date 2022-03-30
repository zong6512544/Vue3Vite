import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import config from './config/env/index.js'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const ENV_INFO = loadEnv(mode, process.cwd())
  if (mode !== 'development') {
    console.log('\x1B[36m%s\x1B[0m', `vite.config.ts read .env.${mode} info:`, ENV_INFO)
  }
  return {
    base: './', // base:开发或生产环境服务的公共基础路径。
    plugins: [
      // plugins: 需要用到的插件数组
      vue()
    ],
    resolve: {
      alias: {
        // resolve.alias:文件系统路径的别名 (请始终使用绝对路径)
        '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
      }
    },
    // 开发服务器选项
    server: config.development.server
  }
})
