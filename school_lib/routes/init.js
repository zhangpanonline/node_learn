
const express = require('express')
const path = require('path')

const app = express()

// 当请求时，会根据请求路径(req.path)，从指定的目录中寻找是否存在文件，如果存在，直接响应文件内容，而不再移交给后续的中间件。
// 如果不存在，则直接移交给后续的中间件
app.use('/static', express.static(path.resolve(__dirname, '../public')))
// app.use('/static', (req) => {
//   console.log(req.baseUrl) // /static
//   console.log(req.path) // /abc
// })

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(
  express.json()
)

// 处理 api 请求
app.use('/api/student', require('./api/student'))
app.use('/api/admin', require('./api/admin'))
app.use('/api/class', require('./api/class'))
app.use('/api/book', require('./api/book'))
app.use('/api/login', require('./api/login'))


app.use(require('./errorMiddleware'))

app.listen(80, "::", () => {
  console.log('Server is running on port 9527')
})



// app.get('/abc', (req, res) => {
//     // 请求
//     console.log(req.headers)
//     console.log(req.path)
//     console.log(req.query)
//     console.log(req.params)
//     console.log(res.method)
    
//     // 响应
//     // res.setHeader('AAA', 'BBB')
//     // res.send(req.query)

//     // 重定向
//     // res.status(302).header('location', 'https://www.baidu.com').end()
//     // 等价于
//     // res.status(302).location('https://www.baidu.com').end()
//     // 等价于
//     // res.redirect(302, 'https://www.baidu.com')
// })