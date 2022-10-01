import requests

URL = "https://www.google.dk/"
page = requests.get(URL)
file = open('./google_from_py.html', 'w')
file.write(page)
file.close()
