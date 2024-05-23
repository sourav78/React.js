import express from 'express'
import { getUsers } from '../controller/user.controller.js'

const UserRouter = express.Router()

UserRouter.get('/all', getUsers)

export default UserRouter