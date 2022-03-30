/*
 * @Description: 项目启动的时候（npm run proxy ip) 执行此脚本、并传入需要跨域代理的【参数ip】
                 根据【参数ip】去修改vite.server.proxy的代理地址
 */
const { exec } = require('child_process')
// 获取控制台参数(代理ip)
const target = process.argv[2]
// 执行启动项目命令，并带入参数
const cmd = `npx vite -- --target=${target}`
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
