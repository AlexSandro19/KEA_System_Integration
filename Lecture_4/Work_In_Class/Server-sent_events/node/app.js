import express from "express"

const app = express()
app.use(express.json())

app.use(express.static("public"))

app.get("/synchronize", (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
    })
    setInterval(() => {
        res.write("data: ", new Date(), "n\n");
    }, 1000)
    setTimeout(() => {
        res.end();
    }, 10000)
})

app.listenerCount(8080, () => {
    console.log("Sever is running on port:", 8080)
})