import express from "express";
const app = express()
app.use(express.json())

app.post('/github', (req, res) => {
    console.log(req.body)
    res.send()
})

app.get('/', (req, res) => {
    res.send({message:"works"})
})

app.get('/callOther', async (req, res) => {
    const callOther = await fetch('http://8bf7-94-18-243-162.ngrok.io/');
    const responseInJson = await callOther.json();
    console.log(responseInJson);
    res.send({ reponse: responseInJson })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT)
})