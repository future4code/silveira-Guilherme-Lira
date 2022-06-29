import {app} from "./app"
import { getAllUsers } from "./endpoints/getAllUsers"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signup"

app.post("/user", signup)
app.post("/user/login", login)
app.get("/user", getAllUsers)