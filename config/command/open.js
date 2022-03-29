/*
 * @Author: zongbao.yao
 * @Date: 2021-10-19 09:58:44
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2021-10-19 10:39:57
 * @Description: 本地启动（代理）
 */
const { exec } = require('child_process')
// 获取控制台参数(代理ip)
const target = process.argv[2]
console.log('\x1B[36m%s\x1B[0m','Project start, about to agent：',target)
// 执行启动项目命令，并带入参数
const cmd = `npm run serve -- --env.target=${target}`
const temp = exec(
  cmd,
  {
    detached: true,
    maxBuffer: 8 * 1024 * 1024
  },
  function (error) {
    if (error) console.log(error)
  }
)
temp.stdout.pipe(process.stdout)