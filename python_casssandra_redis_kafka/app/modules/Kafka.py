from confluent_kafka import Consumer
from os import getenv

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