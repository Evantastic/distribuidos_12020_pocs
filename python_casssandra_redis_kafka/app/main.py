from modules.Redis import Redis
from modules.Cassandra import Cassandra
from modules.Kafka import Kafka
from sys import stdout

# Redis
r = Redis.getInstance()
r.set('foo', 'bar')
obtained = r.get('foo').decode('utf-8')
print(obtained)

# Cassandra
c = Cassandra.getInstance()
rows = c.execute('SELECT * FROM contact')
for row in rows:
    print(row)

# Kafka
k = Kafka.getInstance()
print("Ready to receive messages")
while True:
    stdout.flush()
    msg = k.poll(1.0)
    if msg is None:
        continue
    if msg.error():
        print("Consumer error: {}".format(msg.error()))
        continue
    print('Received message: {}'.format(msg.value().decode('utf-8')))

c.close()