FROM python:3.7-buster
WORKDIR /usr/src/app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY wait-for-it.sh ./
CMD [ "./wait-for-it.sh", "-q", "-s", "-t", "30", "cassandra:9042", "--", "python", "main.py" ]