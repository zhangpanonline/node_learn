// require('./init')
// const sequelize = require('./models/db')
// const adminServ = require('./services/admin')
// const bookServ = require('./services/book')
// const classServ = require('./services/class')
// const studentServ = require('./services/student')
console.log('========================')
console.log('========================')

const express = require('express')

const app = express()

app.listen(9527, () => {
  console.log('Server is running on port 9527')
})

app.get('/abc/:id', (req, res) => {
    // 请求
    console.log(req.headers)
    console.log(req.path)
    console.log(req.query)
    console.log(req.params)
    console.log(res.method)
    
    // 响应
    // res.setHeader('AAA', 'BBB')
    // res.send(req.query)

    // 重定向
    // res.status(302).header('location', 'https://www.baidu.com').end()
    // 等价于
    // res.status(302).location('https://www.baidu.com').end()
    // 等价于
    res.redirect(302, 'https://www.baidu.com')

    
    console.log('========================', new Date().getSeconds())
})

