require('./init')
// const adminServ = require('./services/admin')
// const bookServ = require('./services/book')
// const classServ = require('./services/class')
const studentServ = require('./services/student')
// const sequelize = require('./models/db')



studentServ.add({name: '张三', birthday: '2000-01-01', mobile: '13345678911', sex: true, ClassId: '16', deletedAt: '2025-01-01'}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err, 'err')
})
