const log4js = require('log4js');
const path = require('path');
log4js.configure({
  appenders: {
    school_lib: {
      type: 'file',
      filename: path.join(__dirname, 'logs/default', 'school_lib.log'),
      // 配置文件最大字节数
      maxLogSize: 1024 * 1024 * 1024,
      keepFileExt: true, // 备份时是否保留文件扩展名
      daysToKeep: 3, // 保留最近3天的日志文件，为0则不删除
      backups: 3, // 备份文件的数量
      compress: true, // 是否压缩备份日志
      encoding: 'utf-8', // 日志文件编码格式
      layout: {
        type: 'pattern', // 日志格式类型
        pattern: '%d{yyyy-MM-dd hh:mm:ss} %p %c - %m', // 日志格式
      }
    },
    sql: {
      type: 'file',
      filename: path.join(__dirname, 'logs/sql', 'sql.log'),
      // 配置文件最大字节数
      maxLogSize: 1024 * 1024 * 1024,
      keepFileExt: true, // 备份时是否保留文件扩展名
      daysToKeep: 3, // 保留最近3天的日志文件，为0则不删除
      backups: 3, // 备份文件的数量
      compress: true, // 是否压缩备份日志
      encoding: 'utf-8', // 日志文件编码格式
      layout: {
        type: 'pattern', // 日志格式类型
        pattern: '%d{yyyy-MM-dd hh:mm:ss} %p %c - %m', // 日志格式
      }
    },
  },
  categories: {
    default: { appenders: ['school_lib'], level: 'all' },
    sql: { appenders: ['sql'], level: 'all' },
  }
})

process.on('exit', () => {
  log4js.shutdown(() => {
      console.log('Logger shutdown')
      logger.all('Logger shutdown');
  })
})

const logger = log4js.getLogger('school_lib');
const sql = log4js.getLogger('sql');
logger.level = 'all';
sql.level = 'all';

module.exports = {
  defaultlogger: logger,
  sqllogger: sql
}