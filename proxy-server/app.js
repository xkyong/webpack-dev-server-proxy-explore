const http = require('http')
const httpProxy = require('http-proxy')
const HttpProxyRules = require('http-proxy-rules')

// Set up proxy rules instance
const proxyRules = new HttpProxyRules({
  rules: {
    // '/mfsu': 'http://localhost:3000/mfsu-web'
    // 匹配不了 mfsu，直接走 default
    '^/mf': 'http://localhost:3000/mfsu-web'
  },
  default: 'http://localhost:3000' // default target
})

// Create reverse proxy instance
const proxy = httpProxy.createProxy()

// Create http server that leverages reverse proxy instance
// and proxy rules to proxy requests to different targets
http.createServer(function (req, res) {
  // a match method is exposed on the proxy rules instance
  // to test a request to see if it matches against one of the specified rules
  const target = proxyRules.match(req)
  if (target) {
    console.log('createServer req.url---', req.url)
    console.log('createServer req.headers---', req.headers)
    console.log('createServer target---', target)
    return proxy.web(req, res, {
      target
    })
  }

  res.writeHead(500, { 'Content-Type': 'text/plain' })
  res.end('The request url and path did not match any of the listed rules!')
}).listen(6010, () => console.log('the proxy server is running in http://localhost:6010'))
