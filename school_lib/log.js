const log4js = require('log4js');
log4js.configure({
  appenders: {
    school_lib: { type: 'datefile', filename: 'school_lib.log',
        // 配置文件最大字节数
        maxLogSize: 1024,
        keepFileExt: true, // 备份时是否保留文件扩展名
        daysToKeep: 3, // 保留最近3天的日志文件
        backups: 3, // 备份文件的数量
        compress: true, // 是否压缩备份日志
        encoding: 'utf-8', // 日志文件编码格式
        layout: {
          type: 'pattern', // 日志格式类型
          pattern: '%d{yyyy-MM-dd hh:mm:ss} %p %c - %m', // 日志格式
        }
     }
  },
  categories: {
    default: { appenders: ['school_lib'], level: 'all' }
  }
})

const logger = log4js.getLogger('school_lib');
logger.level = 'all';
logger.all('all');
logger.debug('debug');
logger.trace('trace');
logger.info('info');
logger.warn('warn');
logger.error('error');
logger.fatal('fatal');
logger.mark('mark');
logger.off('off');

process.on('exit', () => {
  log4js.shutdown(() => {
      console.log('Logger shutdown')
      logger.all('Logger shutdown');
  })
})