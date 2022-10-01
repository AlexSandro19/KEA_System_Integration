const xml2js = require('xml2js');
const fs = require('fs');

function parse_json(file_path) {
    const data = require(file_path);
    console.log("Content of the JSON file:")
    for (const [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
    }
    console.log()
}

function parse_xml(file_path) {

    const parser = new xml2js.Parser({ attrkey: "ATTR" });
    const data = fs.readFileSync(file_path, "utf8");
    /*
    Reference on how XML file will be converted to js 
    {
      denmark_info: {
        country: [ 'Denmark' ],
        capital: [ 'Copenhagen' ],
        location: [ 'Europe' ],
        neighbouring_countries: [ { neighbouring_country: [ 'Germany', 'Sweden', 'Norway' ] } ],
        language: [ 'Danish' ],
        population: [ '5831000' ],
        area: [ '42951' ],
        part_of_eu: [ 'true' ]
      }
    }
    */
    console.log("Content of the JSON file:")
    parser.parseString(data, (error, result) => {
        if (error === null) {
            const { denmark_info } = result
            console.log(result.denmark_info.neighbouring_countries)
            for (const [key, value] of Object.entries(denmark_info)) {
                let value_in_str = ""
                if (typeof value[0] !== "string") {
                    const inner_array = Object.entries(value[0])
                    const [nested_key, nested_value] = inner_array[0]
                    value_in_str = nested_value.toString()
                } else {
                    value_in_str = value.toString()
                }
                console.log(`${key}: ${value_in_str}`);
            }
            console.log()
        }
        else {
            console.log(error);
        }
    });
}

parse_json("../../files/denmark_info.json");
// parse_xml("../../files/denmark_info.xml");
