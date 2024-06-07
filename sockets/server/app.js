import express from 'express'
import {Server} from 'socket.io'
import {createServer} from 'http'
import cors from 'cors'

const port = 3000

const app = express()
const server = createServer(app)

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}))

const io = new Server(server, {
    cors:{
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    }
})

app.get('/', (req, res) => res.send('Hello World!'))

io.on("connection", (socket) => {
    console.log("Connected");
    console.log("user: ", socket.id);

    socket.emit('greet', "Welcome to the Room")

    socket.broadcast.emit("join", `${socket.id} is joined`)

    socket.on("message", (message) => {
        console.log(message);

        io.emit("recieve-message", message)
        // socket.broadcast.emit("recieve-message", message)
    })

    socket.on("disconnect", () => {
        console.log(`${socket.id} id disconneted.`);
    })
})

server.listen(port, () => console.log(`Example app listening on port ${port}!`))