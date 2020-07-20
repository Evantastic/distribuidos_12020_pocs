const redis = require('redis');

const redisClient = redis.createClient({
    host: process.env.REDISHOST,
    port: process.env.REDISPORT
});

redisClient.hmset('1',{nombre: 'Planeta 1', x: '320', y: '250', promedio:'100', error: '150', desviacion:'310'});
redisClient.hmset('2',{nombre: 'Planeta 2', x: '350', y: '350', promedio:'200', error: '160', desviacion:'320'});
redisClient.hmset('3',{nombre: 'Planeta 3', x: '370', y: '450', promedio:'300', error: '170', desviacion:'330'});
redisClient.hmset('4',{nombre: 'Planeta 4', x: '390', y: '550', promedio:'400', error: '180', desviacion:'340'});
redisClient.hmset('5',{nombre: 'Planeta 5', x: '410', y: '650', promedio:'500', error: '190', desviacion:'350'});
redisClient.hmset('6',{nombre: 'Planeta 6', x: '430', y: '750', promedio:'600', error: '200', desviacion:'360'});
redisClient.hmset('7',{nombre: 'Planeta 7', x: '450', y: '850', promedio:'700', error: '210', desviacion:'370'});
redisClient.hmset('8',{nombre: 'Planeta 8', x: '470', y: '950', promedio:'800', error: '220', desviacion:'380'});
redisClient.hmset('9',{nombre: 'Planeta 9', x: '490', y: '1050', promedio:'900', error: '230', desviacion:'390'});
redisClient.hmset('10',{nombre: 'Planeta 10', x: '510', y: '1150', promedio:'1000', error: '240', desviacion:'400'});
redisClient.hmset('11',{nombre: 'Planeta 11', x: '520', y: '1250', promedio:'1100', error: '250', desviacion:'410'});
redisClient.hmset('12',{nombre: 'Planeta 12', x: '550', y: '1350', promedio:'1200', error: '260', desviacion:'420'});

console.log('Listo')
