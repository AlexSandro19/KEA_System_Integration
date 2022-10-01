import pandas
import yaml
from yaml.loader import SafeLoader


def parse_csv(file_path):
    data = pandas.read_csv(file_path)
    print("Content of the CSV file:")
    print(data)
    print()
    return data.to_dict(orient='records')

def parse_yaml(file_path):
    with open(file_path) as f:
        data = yaml.load(f, Loader=SafeLoader) # creates a dictionary
        data_items = data.items() # creates an array of key-value pair tuples
    return data_items

def parse_txt(file_path):
    data_items = {}
    with open(file_path, "r") as f:
        lines = f.readlines()
        count = 0
        key = ""
        value = ""
        for line in lines:
            count += 1
            if (count % 2) == 0: # when we have key and value, we can add them in dictionary
                value = line.strip() 
                data_items[key] = value
            else:
                key = line.strip() 
    return data_items.items()

