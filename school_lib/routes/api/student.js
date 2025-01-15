const express = require('express')
const route = express.Router()

route.get('/',(req, res) => {
    res.send('分页获取学生')
})

route.get('/:id', (req, res) => {
    console.log(req.baseUrl)
    console.log(req.path)
    res.send('获取单个学生')
})

route.post('/', (req, res) => {
    res.send('添加学生')
})

route.put('/:id', (req, res) => {
    res.send('修改学生')
})

route.delete('/:id', (req, res) => {
    res.send('删除学生')
})

module.exports = route