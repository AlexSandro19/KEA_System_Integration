from fastapi import FastAPI, Query

app = FastAPI()

@app.get("/")
def _():
    return {"hello": "world"}

@app.get("/items/{item_id}")# path variable
def _(item_id: int): 
    return {"item_id": item_id}

@app.get("/items") 
def _(page: int = Query(default=1, gt=0)):  # query parameter
    return {"page": page}

# @app.get("/items") 
# def _(page: int = 1):  # quary parameter
#     return {"page": page}

@app.get("/student/{email}") # path variable
def _(email: str):  # query parameter
    return {"student": email}