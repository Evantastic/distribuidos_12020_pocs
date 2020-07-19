from sys import stdout
from os import getenv
from uuid import uuid4
from confluent_kafka import Consumer

class Kafka:
    __instance = None
    @staticmethod
    def getInstance():
        if not Kafka.__instance:
            kafka_host = getenv('KAFKA_HOST')
            kafka_groupID = getenv('KAFKA_GROUPID')
            kafka_topic = getenv('KAFKA_TOPIC')
            Kafka.__instance = Consumer({
                'bootstrap.servers': kafka_host,
                'group.id': kafka_groupID,
                'auto.offset.reset': 'beginning'
            })
            Kafka.__instance.subscribe([kafka_topic])
        return Kafka.__instance

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