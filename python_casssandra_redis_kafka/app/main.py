from redis import Redis
from cassandra.cluster import Cluster
from os import getenv
from sys import stdout
from confluent_kafka import Consumer

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
c = Consumer({
    'bootstrap.servers': 'kafka',
    'group.id': 'mygroup',
    'auto.offset.reset': 'beginning'
})

c.subscribe(['test'])

print("Ready to receive messages")
while True:
    stdout.flush()
    msg = c.poll(1.0)
    if msg is None:
        continue
    if msg.error():
        print("Consumer error: {}".format(msg.error()))
        continue
    print('Received message: {}'.format(msg.value().decode('utf-8')))

c.close()