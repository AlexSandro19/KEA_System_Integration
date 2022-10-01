import express from "express"
import { DateTime } from "luxon";

const app = express()
app.use(express.json())

app.get("/timestamp", (req, res) => {
    const currentDateTime = DateTime.now().toISO();
    res.send({ currentDateTime })
})

app.get("/timestampFromOtherServer", async (req, res) => {
    const getDateFromOtherServer = await fetch('http://127.0.0.1:8000/timestamp');
    const responseInJson = await getDateFromOtherServer.json();
    console.log(responseInJson);
    res.send({ reponse: responseInJson })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is running on port ", PORT)
})