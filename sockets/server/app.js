import express from 'express'
import {Server} from 'socket.io'
import {createServer} from 'http'
import cors from 'cors'
import socketHandler from './socketHandler.js'

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

socketHandler(io)

// let users = {}

// let themeMode = false

// io.on("connection", (socket) => {
    

//     socket.emit('greet', "Welcome to the Room")

//     socket.on("user-connect", (username) => {
//         users[socket.id] = username
        
//         socket.emit("join-theme", themeMode)
//         socket.broadcast.emit("join", `${users[socket.id]} is joined`)
//     })


//     socket.on("message", (message) => {

//         socket.broadcast.emit("recieve-message", {username: users[socket.id], message})
//         // socket.broadcast.emit("recieve-message", message)
//     })

//     socket.on('theme', (theme) => {
//         themeMode = theme
//         io.emit('theme', theme)
//         socket.broadcast.emit('theme-msg', `${users[socket.id]} is changed the theme to ${theme ? 'dark' : 'light'}.`)
//     })

//     socket.on("disconnect", () => {
//         delete users[socket.id]
//     })
// })

server.listen(port, () => console.log(`Example app listening on port ${port}!`))