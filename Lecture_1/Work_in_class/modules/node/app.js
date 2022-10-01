// const express = require("express"); // when using commonjs
import express from "express"; // when using module
const app = express();
import path from 'path'

app.use(express.static("public"))

app.get("/endpoint", (req, res) => {
    res.send({ message: "Works" })
})

app.get("/duck", (req, res) => {
    // res.sendFile(__dirname + "/public/duck.html")
    res.sendFile(path.resolve("./public/duck.html"))
})

app.get("/callotherserver", async (req, res) => {
    //fetch('http://127.0.0.1:8000/').then(data => data.json()).then(data => console.log(data));
    const call = await fetch('http://127.0.0.1:8000/');
    const json = await call.json();
    console.log(json);
    res.send({ message: "/callotherserver Works" })
})

app.listen(3000, () => {
    console.log("Server is running on ", 3000)
})
