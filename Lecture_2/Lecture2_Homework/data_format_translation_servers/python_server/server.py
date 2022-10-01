from fastapi import FastAPI
import parse_script


app = FastAPI()

@app.get("/getTxt",
    responses={
        200: {
            "description": "Returns the content of the TXT file that contains info about Denmark.",
        }
    }
)
def _():
    response = parse_script.parse_txt("./files/denmark_info.txt")
    # print(response)
    return response

@app.get("/getCsv",
    responses={
        200: {
            "description": "Returns the content of the CSV file that contains info about Denmark.",
        }
    }
)
def _():
    response = parse_script.parse_csv("./files/denmark_info.csv")
    #print(response)
    return response

@app.get("/getYaml",
    responses={
        200: {
            "description": "Returns the content of the YAML file that contains info about Denmark.",
        }
    }
)
def _():
    response = parse_script.parse_yaml("./files/denmark_info.yaml")
    #print(response)
    return response

@app.get("/test",
    responses={
        200: {
            "description": "Returns the message that everything is working",
        }
    }
)
def _():
    return {"message": "works"}


