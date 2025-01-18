const adminServ = require('../../services/admin')
const express = require('express')
const route = express.Router()

route.post('/', async (req, res) => {
    console.log(req.query)
    console.log(req.body)
    const result = await adminServ.login(req.query.loginId, req.query.loginPwd)
    res.send(result)
})

module.exports = route