// 为开发服务器配置自定义代理规则
function createProxy() {
  const argv = process.argv
  const proxyTarget = argv[3].split('=')[1]
  const [proxyIp, proxyPort] = proxyTarget.split(':')
  const target = `http://${proxyIp}:${proxyPort}`
  return {
    '/api': {
      target,
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace('/api/', '/')
    }
  }
}

module.exports = {
  development: {
    // 开发服务器选项
    server: {
      host: '127.0.0.1', // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
      port: 4000, // 指定开发服务器端口。注意：如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是开发服务器最终监听的实际端口。
      strictPort: false, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
      // https: false, //
      open: true, // 在开发服务器启动时自动在浏览器中打开应用程序。
      proxy: createProxy(), // 为开发服务器配置自定义代理规则。
      // cors: true, // 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用
      // force: false // 设置为 true 强制使依赖预构建
      // hmr:
      // watch:
      // middlewareMode:
      fs: {
        strict: true, // 限制为工作区 root 路径以外的文件的访问
        // allow:
        deny: ['.env', '.env.*', '*.{pem,crt}'] // 用于限制 Vite 开发服务器提供敏感文件的黑名单
      }
      // origin: // 用于定义开发调试阶段生成资产的 origin
    }
  },
  production: {}
}
