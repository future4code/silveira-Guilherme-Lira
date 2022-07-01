import {app} from "./app"
import { createRecipe } from "./endpoints/createRecipe"
import { getAllUsers } from "./endpoints/getAllUsers"
import getProfile from "./endpoints/getInfo"
import getRecipeById from "./endpoints/getRecipebyId"
import getUserById from "./endpoints/getUserbyId"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signup"

// EXTRA
app.get("/user", getAllUsers)

// USUÁRIOS
app.post("/user", signup)
app.post("/user/login", login)
app.get("/user/profile", getProfile) 
app.get("/user/:id", getUserById) 

// RECEITAS
app.post("/recipe", createRecipe) 
app.get("/recipe/:id", getRecipeById)