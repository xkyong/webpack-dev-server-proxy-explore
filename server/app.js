const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const Router = require('koa-router')

const app = new Koa()
const mfsuRouter = new Router({ prefix: '/mfsu' })

mfsuRouter.get('/info', async (ctx, next) => {
  console.log('ctx.request.url---', ctx.request.url)
  console.log('ctx.request.headers---', ctx.request.headers)
  ctx.body = {
    code: 0,
    message: 'success',
    data: 'this is mfsu-vue!'
  }

  await next()
})

app.use(logger())
app.use(bodyParser())
app.use(mfsuRouter.routes())
app.use(mfsuRouter.allowedMethods())

app.listen(3000, () => console.log('the server is running in http://localhost:3000'))
