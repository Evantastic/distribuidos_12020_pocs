const log4js = require('log4js');
log4js.configure({
    appenders: {
        logstash: { type: '@log4js-node/logstashudp', host: '127.0.0.1', port: 5000 },
    },
    categories: {
        default: { appenders: ['logstash'], level: 'info', },
    },
});
const logger = log4js.getLogger();
logger.level = 'info';
logger.error('pella 1');
logger.error('pella 2');
logger.error('pella 3');
logger.error('pella 4');
logger.error('pella 5');
logger.error('pella 6');
logger.error('pella 7');
logger.error('pella 8');
logger.error('pella 9');
logger.error('pella 10');
logger.error('pella 11');
logger.error('pella 12');
logger.error('pella 13');
logger.error('pella 14');
logger.error('pella 15');
logger.error('pella 16');
logger.error('pella 17');
logger.error('pella 18');
logger.error('pella 19');
logger.error('pella 20');