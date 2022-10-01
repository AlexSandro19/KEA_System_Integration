from fastapi import FastAPI
from datetime import datetime, timezone
import requests 
import pytz 

app = FastAPI()

@app.get("/timestamp")
def _():
    cph_timezone = pytz.timezone("Europe/Copenhagen") 
    current_datetime = datetime.now(cph_timezone).isoformat()
    return {"current_datetime": current_datetime}

@app.get("/timestampFromOtherServer")
def _():
    # the other server (which is in node_server folder) should be also running
    get_Date_From_Other_Server = requests.get("http://localhost:3000/timestamp")
    content = get_Date_From_Other_Server.content
    return {"response": content}

@app.get("/test")
def _():
    return {"message": "everything is fine"}


# zones = pytz.all_timezones

# print(zones) 