import urllib.request
import sys
from bs4 import BeautifulSoup
import schedule
import time
import os
import wget

def files():
	datos = urllib.request.urlopen('https://ztf.uw.edu/alerts/public/').read().decode()
	soup =  BeautifulSoup(datos)
	tags = soup('a')
	archives = []
	for tag in tags:
		archives.append(tag.get('href'))	
	return archives

def new_file(len_old_files,len_new_files,archives):
	print("Descargando archivo: " + archives[15])
	wget.download("https://ztf.uw.edu/alerts/public/"+archives[15], os.path.join(OUTPUT_PATH))
	


WORKING_DIRECTORY = os.path.dirname(os.path.abspath(__file__))
OUTPUT_PATH = os.path.join(WORKING_DIRECTORY, "data/")
schedule.every().day.at("10:00").do(new_file,len(files()),files())
while True: 
  
    # Checks whether a scheduled task  
    # is pending to run or not 
    schedule.run_pending()
    time.sleep(30) 
