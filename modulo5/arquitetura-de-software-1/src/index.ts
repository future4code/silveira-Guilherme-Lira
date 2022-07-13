import { app } from "./app"
import UserController from "./controller/UserController"

const userController = new UserController()

app.post('/signup', userController.insertUser)
// app.post('/user/login', userController.login)