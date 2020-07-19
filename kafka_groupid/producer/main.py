from confluent_kafka import Producer
from itertools import cycle
from os import getenv

kafka_host = getenv('KAFKA_HOST')
kafka_topic = getenv('KAFKA_TOPIC')
p = Producer({'bootstrap.servers': kafka_host})

def delivery_report(err, msg):
    """ Called once for each message produced to indicate delivery result.
        Triggered by poll() or flush(). """
    if err is not None:
        print('Message delivery failed: {}'.format(err))
    else:
        print('Message delivered to {} [{}]'.format(msg.topic(), msg.partition()))

with open('./MOCK_DATA.csv') as f:
    line = f.readline()
    partition = cycle(range(2))
    while line:
        p.poll(0)
        p.produce(kafka_topic, line.encode('utf-8'), partition=next(partition), callback=delivery_report)
        line = f.readline()

p.flush()