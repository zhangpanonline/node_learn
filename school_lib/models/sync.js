require('./Admin')
require('./Book')
require('./Class')
require('./Student')
require('./relation')
const sequelize = require('./db')

sequelize.sync({alter: true}).then(res => {
    console.log('所有模型同步完成', res)
})