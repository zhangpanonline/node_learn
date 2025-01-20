const adminServ = require('../../services/admin')
const express = require('express')
const route = express.Router()
const { encrypt } = require('../../utils/crypt')

route.post('/', async (req, res) => {
    const result = await adminServ.login(req.query.loginId, req.query.loginPwd)
    if (result.data?.id) {
        // 加密
        const auth = encrypt(result.data.id.toString())
        // 只有浏览器才会自动处理cookie
        res.cookie('token', auth, {
            // path: '/',
            // domain: 'localhost'
            // maxAage: 1000 // 毫秒
            // httpOnly: true
        })
        // 对于其他终端
        res.header('authorization', auth)
    }
    res.send(result)
    return
})

module.exports = route