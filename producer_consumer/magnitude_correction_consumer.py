from confluent_kafka import Consumer
import fastavro
import logging
import io
import math 

logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s %(levelname)s %(name)s.%(funcName)s: %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

CONSUMER_CONFIG = {
    'bootstrap.servers': 'localhost:9092',
    'group.id': 'testo'
}


def list_topics(c: Consumer , filter_by="ztf"):
    topics = c.list_topics().topics.keys()
    return list(filter(lambda x: filter_by in x, list(topics)))


def get_message(message):
    bytes_io = io.BytesIO(message.value())
    reader = fastavro.reader(bytes_io)
    return reader.next()

def magnitude_correction(magnr,isdiffpos,magpsf):
    if(isdiffpos == 't'):
        return -2.5*math.log(pow(10,-0.4*float(magnr))+(pow(10,0.4*float(magpsf))),10) 
    else:
        return None 
    

def magnitude_correction2(magpsf, sigmapsf, magnr, sigmagnr, isdiffpos):
    if(isdiffpos == 't'):
        return (pow( pow(10,-0.8*float(magpsf))*float(sigmapsf**2)*(pow(-10,float(magnr))*float(sigmagnr)**2),0.5))/(pow(10,-0.4*float(magnr))+(pow(10,0.4*float(magpsf))))
    else:
        return (pow( pow(10,-0.8*float(magpsf))*float(sigmapsf**2)*(pow(-10,float(magnr))*float(sigmagnr)**2),0.5))/(pow(10,-0.4*float(magnr))-(pow(10,0.4*float(magpsf))))


consumer = Consumer(CONSUMER_CONFIG)
last_topic = list_topics(consumer)
logging.info(f"Subscribed to {last_topic}")
consumer.subscribe(last_topic)
while True:
    msg = consumer.poll(timeout=10)
    if msg:
        data = get_message(msg)
        logging.info(f"Consuming {data['objectId']} - {data['candidate']['jd']}")
        print(magnitude_correction(data['candidate']['magnr'],data['candidate']['isdiffpos'],data['candidate']['magpsf']))
        print(magnitude_correction2(data['candidate']['magpsf'],data['candidate']['sigmapsf'],data['candidate']['magnr'],data['candidate']['sigmagnr'],data['candidate']['isdiffpos']))

    else:
    	logging.info(f"Error {msg}")
    	last_topic = list_topics(consumer)
    	consumer.subscribe([last_topic])