from redis import Redis
from cassandra.cluster import Cluster
from os import getenv
from sys import stdout
from kafka import KafkaConsumer

# Redis
redis_host = getenv('REDIS_HOST')
redis_port = getenv('REDIS_PORT')
redis_db = getenv('REDIS_DB')
r = Redis(host=redis_host, port=redis_port, db=redis_db)
r.set('foo', 'bar')
obtained = r.get('foo').decode('utf-8')

# Cassandra
cluster = Cluster(['cassandra'])
session = cluster.connect()

# Kafka
consumer = KafkaConsumer('test', bootstrap_servers='kafka')
for msg in consumer:
    print(msg)
    # Esto es para que imprima, o si no no funciona
    stdout.flush()