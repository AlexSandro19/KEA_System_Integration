import requests
import json
import datetime

webhook_url = "http://localhost:8000/webhook"

test_url = "http://localhost:8000/test"
response_test = requests.get(test_url)

test_webhook = "http://f729-94-18-243-162-ngrok.io/webhook"
data = {
    "description": "checking if it works",
    "timestamp": datetime.datetime.now().isoformat()
}

response = requests.post(test_webhook, json=json.dumps(data), headers={"Content-Type" : "application/json"})
print(response.content)