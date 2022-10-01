from fastapi import FastAPI
import parse_script


app = FastAPI()

@app.get("/getTxt")
def _():
    response = parse_script.parse_txt("./files/denmark_info.txt")
    # print(response)
    return response

@app.get("/getCsv")
def _():
    response = parse_script.parse_csv("./files/denmark_info.csv")
    #print(response)
    return response

@app.get("/getYaml")
def _():
    response = parse_script.parse_yaml("./files/denmark_info.yaml")
    #print(response)
    return response

@app.get("/test")
def _():
    return {"message": "works"}


