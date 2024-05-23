import express from "express";
import UserRouter from "./routes/user.routes.js";

const app = express()

app.use("/user", UserRouter)

app.get("/", (req:express.Request, res: express.Response) => {
    res.send("Working")
})

app.listen(4000, () => {
    console.log('Server started at-> http://localhost:4000');
})