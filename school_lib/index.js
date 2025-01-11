// require('./models/relation')
const md5 = require('md5')
const dayjs = require('dayjs')
// const adminServ = require('./services/admin')
// const bookServ = require('./services/book')
// const classServ = require('./services/class')
// const studentServ = require('./services/student')
// const sequelize = require('./models/db')

// adminServ.login('root', '123').then(res => {
//     console.log(res)
//     sequelize.close()
// })
console.log(dayjs().valueOf(), '时间戳')

console.log(dayjs().unix(), '时间戳')

console.log(dayjs().locale())
