from cassandra.cluster import Cluster, NoHostAvailable
from cassandra.auth import PlainTextAuthProvider
from time import sleep
from os import getenv
from sys import stdout

class Cassandra:
    __instance = None
    @staticmethod
    def getInstance():
        if not Cassandra.__instance:
            tries = 0
            TenSeconds = 10
            cassandra_host = getenv('CASSANDRA_HOST')
            cassandra_port = getenv('CASSANDRA_PORT')
            cassandra_user = getenv('CASSANDRA_USER')
            cassandra_password = getenv('CASSANDRA_PASSWORD')
            cassandra_keyspace = getenv('CASSANDRA_KEYSPACE')
            auth_provider = PlainTextAuthProvider(username=cassandra_user, password=cassandra_password)
            while tries < 6:
                try:
                    cluster = Cluster([cassandra_host], port=cassandra_port, auth_provider=auth_provider)
                    Cassandra.__instance = cluster.connect(cassandra_keyspace)
                    break
                except NoHostAvailable:
                    print("Cassandra refused connection. Attempting reconnection in {} seconds".format(TenSeconds))
                    stdout.flush()
                    tries = tries + 1
                    sleep(TenSeconds)
        return Cassandra.__instance