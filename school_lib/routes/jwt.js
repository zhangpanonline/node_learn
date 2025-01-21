const jwt = require('jsonwebtoken')
const secret = 'nodejs'

exports.publish = (res, data, maxAge = 3600 * 24) => {
    const token = jwt.sign({
        data
    }, secret, {
        expiresIn: maxAge
    })
    res.header('authorization', token)
    res.header('access-control-expose-headers', 'authorization')
}

exports.verify = (req) => {
    const token = req.headers.authorization
    if (!token) {
        return null
    }
    try {
        const result = jwt.verify(token, secret)
        return result
    } catch (error) {
        console.error(error.message)
        return null
    }
}