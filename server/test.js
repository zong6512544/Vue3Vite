/*
 * @Author: zongbao.yao
 * @Date: 2021-01-19 00:16:52
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2021-01-19 00:24:06
 * @Description: 根据不同URL响应不同地址
 */

const http = require('http')

const server = http.createServer()

server.on('request', (request, response) => {
  // 打印客户端请求的 URL 地址
  const requestUrl = request.url
  // 解决中文乱码
  response.writeHeader(200, {
    'Content-type': 'text/plain;charset=utf-8'
  })

  // 通过匹配客户端的URL地址，分别处理
  if (requestUrl === '/login') {
    response.end('{ code: 0, token: 123123}')
  } else {
    response.end('page 404')
  }
})

server.listen(8888, '127.0.0.1', () => {
  console.log('server is running at http://127.0.0.1:8888')
})
