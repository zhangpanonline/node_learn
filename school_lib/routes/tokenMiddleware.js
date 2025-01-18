const { pathToRegexp } = require('path-to-regexp')
const { decrypt } = require('../utils/crypt')

const needTokenApi = [
    { method: 'POST', path: '/api/student' },
    { method: 'PUT', path: '/api/student/:id' },
    { method: 'DELETE', path: '/api/student/:id' },

    { method: 'POST', path: '/api/admin' },
    { method: 'PUT', path: '/api/admin/:id' },
    { method: 'DELETE', path: '/api/admin/:id' },

    { method: 'POST', path: '/api/book' },
    { method: 'PUT', path: '/api/book/:id' },
    { method: 'DELETE', path: '/api/book/:id' },

    { method: 'POST', path: '/api/class' },
    { method: 'PUT', path: '/api/class/:id' },
    { method: 'DELETE', path: '/api/class/:id' },
]

module.exports = (req, res, next) => {
    const isNeedToken = needTokenApi.some(({ method, path }) => {
        const { regexp } = pathToRegexp(path)
        return method === req.method && regexp.test(req.path)
    })

    if (!isNeedToken) {
        next()
        return
    }

    let token = req.cookies.token;
    if (!token) {
        token = req.headers.authorization
    }
    if (!token) {
        res.status(403).send({code: 403, message: 'token不存在'})
    }

    // 验证token
    const auth = decrypt(token)
    req.userId = auth
    next()
}