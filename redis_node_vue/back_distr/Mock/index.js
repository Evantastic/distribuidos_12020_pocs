const redis = require('redis');

const redisClient = redis.createClient({
    host: process.env.REDISHOST,
    port: process.env.REDISPORT
});

redisClient.hmset('1',{nombre: 'Planeta 1', 
            magpsf:'100',magpsf_prom:'200',magpsf_min:'300',magpsf_max:'500',magpsf_med:'600',magpsf_std:'700',magpsf_delta:'900',
            sigmapsf:'200',sigmapsf_prom:'500',sigmapsf_min:'500',sigmapsf_max:'700',sigmapsf_med:'800',sigmapsf_std:'500',sigmapsf_std:'900',sigmapsf_delta:'800',
            magpsf_corr:'300',magpsf_promCorr:'400',magpsf_minCorr:'700',magpsf_maxCorr:'800',magpsf_medCorr:'900',magpsf_stdCorr:'200',magpsf_deltaCorr:'1200',
            sigmapsf_corr:'400',sigmapsf_promCorr:'800',sigmapsf_minCorr:'500',sigmapsf_maxCorr:'900',sigmapsf_medCorr:'1500',sigmapsf_stdCorr:'1600',sigmapsf_deltaCorr:'1700'});
redisClient.hmset('2',{nombre: 'Planeta 2', 
            magpsf:'100',magpsf_prom:'200',magpsf_min:'300',magpsf_max:'500',magpsf_med:'600',magpsf_std:'700',magpsf_delta:'900',
            sigmapsf:'200',sigmapsf_prom:'500',sigmapsf_min:'500',sigmapsf_max:'700',sigmapsf_med:'800',sigmapsf_std:'500',sigmapsf_std:'900',sigmapsf_delta:'800',
            magpsf_corr:'300',magpsf_promCorr:'400',magpsf_minCorr:'700',magpsf_maxCorr:'800',magpsf_medCorr:'900',magpsf_stdCorr:'200',magpsf_deltaCorr:'1200',
            sigmapsf_corr:'400',sigmapsf_promCorr:'800',sigmapsf_minCorr:'500',sigmapsf_maxCorr:'900',sigmapsf_medCorr:'1500',sigmapsf_stdCorr:'1600',sigmapsf_deltaCorr:'1700'});
redisClient.hmset('3',{nombre: 'Planeta 3',
            magpsf:'100',magpsf_prom:'200',magpsf_min:'300',magpsf_max:'500',magpsf_med:'600',magpsf_std:'700',magpsf_delta:'900',
            sigmapsf:'200',sigmapsf_prom:'500',sigmapsf_min:'500',sigmapsf_max:'700',sigmapsf_med:'800',sigmapsf_std:'500',sigmapsf_std:'900',sigmapsf_delta:'800',
            magpsf_corr:'300',magpsf_promCorr:'400',magpsf_minCorr:'700',magpsf_maxCorr:'800',magpsf_medCorr:'900',magpsf_stdCorr:'200',magpsf_deltaCorr:'1200',
            sigmapsf_corr:'400',sigmapsf_promCorr:'800',sigmapsf_minCorr:'500',sigmapsf_maxCorr:'900',sigmapsf_medCorr:'1500',sigmapsf_stdCorr:'1600',sigmapsf_deltaCorr:'1700'});
redisClient.hmset('4',{nombre: 'Planeta 4', 
            magpsf:'100',magpsf_prom:'200',magpsf_min:'300',magpsf_max:'500',magpsf_med:'600',magpsf_std:'700',magpsf_delta:'900',
            sigmapsf:'200',sigmapsf_prom:'500',sigmapsf_min:'500',sigmapsf_max:'700',sigmapsf_med:'800',sigmapsf_std:'500',sigmapsf_std:'900',sigmapsf_delta:'800',
            magpsf_corr:'300',magpsf_promCorr:'400',magpsf_minCorr:'700',magpsf_maxCorr:'800',magpsf_medCorr:'900',magpsf_stdCorr:'200',magpsf_deltaCorr:'1200',
            sigmapsf_corr:'400',sigmapsf_promCorr:'800',sigmapsf_minCorr:'500',sigmapsf_maxCorr:'900',sigmapsf_medCorr:'1500',sigmapsf_stdCorr:'1600',sigmapsf_deltaCorr:'1700'});
redisClient.hmset('5',{nombre: 'Planeta 5',
            magpsf:'100',magpsf_prom:'200',magpsf_min:'300',magpsf_max:'500',magpsf_med:'600',magpsf_std:'700',magpsf_delta:'900',
            sigmapsf:'200',sigmapsf_prom:'500',sigmapsf_min:'500',sigmapsf_max:'700',sigmapsf_med:'800',sigmapsf_std:'500',sigmapsf_std:'900',sigmapsf_delta:'800',
            magpsf_corr:'300',magpsf_promCorr:'400',magpsf_minCorr:'700',magpsf_maxCorr:'800',magpsf_medCorr:'900',magpsf_stdCorr:'200',magpsf_deltaCorr:'1200',
            sigmapsf_corr:'400',sigmapsf_promCorr:'800',sigmapsf_minCorr:'500',sigmapsf_maxCorr:'900',sigmapsf_medCorr:'1500',sigmapsf_stdCorr:'1600',sigmapsf_deltaCorr:'1700'});
redisClient.hmset('6',{nombre: 'Planeta 6', 
            magpsf:'100',magpsf_prom:'200',magpsf_min:'300',magpsf_max:'500',magpsf_med:'600',magpsf_std:'700',magpsf_delta:'900',
            sigmapsf:'200',sigmapsf_prom:'500',sigmapsf_min:'500',sigmapsf_max:'700',sigmapsf_med:'800',sigmapsf_std:'500',sigmapsf_std:'900',sigmapsf_delta:'800',
            magpsf_corr:'300',magpsf_promCorr:'400',magpsf_minCorr:'700',magpsf_maxCorr:'800',magpsf_medCorr:'900',magpsf_stdCorr:'200',magpsf_deltaCorr:'1200',
            sigmapsf_corr:'400',sigmapsf_promCorr:'800',sigmapsf_minCorr:'500',sigmapsf_maxCorr:'900',sigmapsf_medCorr:'1500',sigmapsf_stdCorr:'1600',sigmapsf_deltaCorr:'1700'});
redisClient.hmset('7',{nombre: 'Planeta 7', 
            magpsf:'100',magpsf_prom:'200',magpsf_min:'300',magpsf_max:'500',magpsf_med:'600',magpsf_std:'700',magpsf_delta:'900',
            sigmapsf:'200',sigmapsf_prom:'500',sigmapsf_min:'500',sigmapsf_max:'700',sigmapsf_med:'800',sigmapsf_std:'500',sigmapsf_std:'900',sigmapsf_delta:'800',
            magpsf_corr:'300',magpsf_promCorr:'400',magpsf_minCorr:'700',magpsf_maxCorr:'800',magpsf_medCorr:'900',magpsf_stdCorr:'200',magpsf_deltaCorr:'1200',
            sigmapsf_corr:'400',sigmapsf_promCorr:'800',sigmapsf_minCorr:'500',sigmapsf_maxCorr:'900',sigmapsf_medCorr:'1500',sigmapsf_stdCorr:'1600',sigmapsf_deltaCorr:'1700'});
redisClient.hmset('8',{nombre: 'Planeta 8',
            magpsf:'100',magpsf_prom:'200',magpsf_min:'300',magpsf_max:'500',magpsf_med:'600',magpsf_std:'700',magpsf_delta:'900',
            sigmapsf:'200',sigmapsf_prom:'500',sigmapsf_min:'500',sigmapsf_max:'700',sigmapsf_med:'800',sigmapsf_std:'500',sigmapsf_std:'900',sigmapsf_delta:'800',
            magpsf_corr:'300',magpsf_promCorr:'400',magpsf_minCorr:'700',magpsf_maxCorr:'800',magpsf_medCorr:'900',magpsf_stdCorr:'200',magpsf_deltaCorr:'1200',
            sigmapsf_corr:'400',sigmapsf_promCorr:'800',sigmapsf_minCorr:'500',sigmapsf_maxCorr:'900',sigmapsf_medCorr:'1500',sigmapsf_stdCorr:'1600',sigmapsf_deltaCorr:'1700'});
redisClient.hmset('9',{nombre: 'Planeta 9', 
            magpsf:'100',magpsf_prom:'200',magpsf_min:'300',magpsf_max:'500',magpsf_med:'600',magpsf_std:'700',magpsf_delta:'900',
            sigmapsf:'200',sigmapsf_prom:'500',sigmapsf_min:'500',sigmapsf_max:'700',sigmapsf_med:'800',sigmapsf_std:'500',sigmapsf_std:'900',sigmapsf_delta:'800',
            magpsf_corr:'300',magpsf_promCorr:'400',magpsf_minCorr:'700',magpsf_maxCorr:'800',magpsf_medCorr:'900',magpsf_stdCorr:'200',magpsf_deltaCorr:'1200',
            sigmapsf_corr:'400',sigmapsf_promCorr:'800',sigmapsf_minCorr:'500',sigmapsf_maxCorr:'900',sigmapsf_medCorr:'1500',sigmapsf_stdCorr:'1600',sigmapsf_deltaCorr:'1700'});
redisClient.hmset('10',{nombre: 'Planeta 10', 
            magpsf:'100',magpsf_prom:'200',magpsf_min:'300',magpsf_max:'500',magpsf_med:'600',magpsf_std:'700',magpsf_delta:'900',
            sigmapsf:'200',sigmapsf_prom:'500',sigmapsf_min:'500',sigmapsf_max:'700',sigmapsf_med:'800',sigmapsf_std:'500',sigmapsf_std:'900',sigmapsf_delta:'800',
            magpsf_corr:'300',magpsf_promCorr:'400',magpsf_minCorr:'700',magpsf_maxCorr:'800',magpsf_medCorr:'900',magpsf_stdCorr:'200',magpsf_deltaCorr:'1200',
            sigmapsf_corr:'400',sigmapsf_promCorr:'800',sigmapsf_minCorr:'500',sigmapsf_maxCorr:'900',sigmapsf_medCorr:'1500',sigmapsf_stdCorr:'1600',sigmapsf_deltaCorr:'1700'});
redisClient.hmset('11',{nombre: 'Planeta 11', 
            magpsf:'100',magpsf_prom:'200',magpsf_min:'300',magpsf_max:'500',magpsf_med:'600',magpsf_std:'700',magpsf_delta:'900',
            sigmapsf:'200',sigmapsf_prom:'500',sigmapsf_min:'500',sigmapsf_max:'700',sigmapsf_med:'800',sigmapsf_std:'500',sigmapsf_std:'900',sigmapsf_delta:'800',
            magpsf_corr:'300',magpsf_promCorr:'400',magpsf_minCorr:'700',magpsf_maxCorr:'800',magpsf_medCorr:'900',magpsf_stdCorr:'200',magpsf_deltaCorr:'1200',
            sigmapsf_corr:'400',sigmapsf_promCorr:'800',sigmapsf_minCorr:'500',sigmapsf_maxCorr:'900',sigmapsf_medCorr:'1500',sigmapsf_stdCorr:'1600',sigmapsf_deltaCorr:'1700'});
redisClient.hmset('12',{nombre: 'Planeta 12', 
            magpsf:'100',magpsf_prom:'200',magpsf_min:'300',magpsf_max:'500',magpsf_med:'600',magpsf_std:'700',magpsf_delta:'900',
            sigmapsf:'200',sigmapsf_prom:'500',sigmapsf_min:'500',sigmapsf_max:'700',sigmapsf_med:'800',sigmapsf_std:'500',sigmapsf_std:'900',sigmapsf_delta:'800',
            magpsf_corr:'300',magpsf_promCorr:'400',magpsf_minCorr:'700',magpsf_maxCorr:'800',magpsf_medCorr:'900',magpsf_stdCorr:'200',magpsf_deltaCorr:'1200',
            sigmapsf_corr:'400',sigmapsf_promCorr:'800',sigmapsf_minCorr:'500',sigmapsf_maxCorr:'900',sigmapsf_medCorr:'1500',sigmapsf_stdCorr:'1600',sigmapsf_deltaCorr:'1700'});

console.log('Listo');
