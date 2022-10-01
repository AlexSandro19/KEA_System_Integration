from fastapi import FastAPI, Request

app = FastAPI()

@app.post("/webhook")
async def webhook(request : Request):
    body = await request.json()
    return {
        "status" : "SUCCESS",
        "data" : body
    }

@app.get("/test")
def _():
    return {"hello": "world"}
