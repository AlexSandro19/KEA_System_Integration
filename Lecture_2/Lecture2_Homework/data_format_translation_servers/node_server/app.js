// const express = require("express"); // when using commonjs
const express = require("express") // when using module
const path = require('path');
const parseMethods = require("./parse_script.js");
const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")


const app = express();

app.use(express.static("public"))

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Users API',
            version: '0.0.1',
        },
    },
    apis: ['./app.js'],
};

const openapiSpecification = swaggerJSDoc(options);
// console.log(openapiSpecification)

app.use("/docs", swaggerUI.serve, swaggerUI.setup(openapiSpecification))


/**
 * @openapi
 * /getJson:
 *   get:
*     responses:
 *       200:
 *         description: Returns the content of the JSON file that contains info about Denmark.
 */
app.get("/getJson", (req, res) => {
    const data = parseMethods.parse_json("./files/denmark_info.json");
    res.json({ data })
})

/**
 * @openapi
 * /getXml:
 *   get:
*     responses:
 *       200:
 *         description: Returns the content of the XML file that contains info about Denmark.
 */
app.get("/getXml", (req, res) => {
    // res.sendFile(__dirname + "/public/duck.html")
    const data = parseMethods.parse_xml("./files/denmark_info.xml");
    res.json({ data })
})

app.get("/test", async (req, res) => {
    res.send({ message: "server working" })
})

app.listen(3000, () => {
    console.log("Server is running on ", 3000)
})
