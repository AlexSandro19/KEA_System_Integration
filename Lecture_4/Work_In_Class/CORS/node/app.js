import express from "express"
const app = express();
import cors from "cors"

app.use(express.json());
app.use(cors());

app.get("/message", (req, res) => {
    res.send({ message: "hello from express" })
})

app.listen(8080, () => {
    console.log("Sever is running on port:", 8080)
})