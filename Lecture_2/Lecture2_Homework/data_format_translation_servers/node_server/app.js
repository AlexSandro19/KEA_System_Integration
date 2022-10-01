// const express = require("express"); // when using commonjs
const express = require("express") // when using module
const path = require('path');
const parseMethods = require("./parse_script.js");

const app = express();

app.use(express.static("public"))

app.get("/getJson", (req, res) => {
    const parsedData = parseMethods.parse_json("./files/denmark_info.json");
    const stringifiedJson = JSON.stringify(parsedData)
    res.json({ data: stringifiedJson })
})

app.get("/getXml", (req, res) => {
    // res.sendFile(__dirname + "/public/duck.html")
    const parsedData = parseMethods.parse_xml("./files/denmark_info.xml");
    const stringifiedJson = JSON.stringify(parsedData)
    res.json({ data: stringifiedJson })
})

app.get("/test", async (req, res) => {
    res.send({ message: "server working" })
})

app.listen(3000, () => {
    console.log("Server is running on ", 3000)
})
