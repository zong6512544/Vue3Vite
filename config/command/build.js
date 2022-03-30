/*
 * @Description: 打包前置
 */
const { exec } = require('child_process')
const target = process.argv[2] || 'prod'
// https://vitejs.cn/guide/env-and-mode.html#modes
const cmd = `vue-tsc --noEmit && vite build --mode ${target}`
// const cmd = `vite build --mode ${target}`
console.log('\x1B[36m%s\x1B[0m', 'Project start build...', cmd)
// 执行打包命令
const temp = exec(
  cmd,
  {
    detached: true,
    maxBuffer: 8 * 1024 * 1024 // 5m
  },
  (error) => {
    if (error) console.log(error)
  }
)
temp.stdout.pipe(process.stdout)
