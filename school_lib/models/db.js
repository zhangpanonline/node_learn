const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('zhangpan', 'zhangpan', 'PWeoghCeb5vXIZB1', {
    host: 'mysql.sqlpub.com',
    dialect: 'mysql',
    logging: false
})

module.exports = sequelize