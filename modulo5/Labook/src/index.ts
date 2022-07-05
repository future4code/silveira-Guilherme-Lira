import UserBusiness from "./business/UserBusiness"
import { app } from "./controller/app"
import UserController from "./controller/UserController"
import UserData from "./data/UserData"
import { Authenticator } from "./services/Authenticator"
import { HashManager } from "./services/HashManager"
import { IdGenerator } from "./services/IdGenerator"

const userBusiness = new UserBusiness(
        new UserData(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
)

const userController = new UserController(
    userBusiness
);

// CRIAR E FAZER LOGIN - USUARIO
app.post("/user/signup", userController.signup)
app.post("/user/login", userController.login)

// POSTS.
//app.post("/posts/create", postController.createPost)
//app.get("/posts/:id", postController.getPostById)