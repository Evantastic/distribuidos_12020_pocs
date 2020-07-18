from redis import Redis as getRedis
from os import getenv

class Redis:
    __instance = None
    @staticmethod
    def getInstance():
        if not Redis.__instance:
            redis_host = getenv('REDIS_HOST')
            redis_port = getenv('REDIS_PORT')
            redis_db = getenv('REDIS_DB')
            Redis.__instance = getRedis(host=redis_host, port=redis_port, db=redis_db)
        return Redis.__instance
