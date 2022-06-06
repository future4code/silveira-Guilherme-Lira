import express, { Response, Request } from "express";
import cors from "cors";
import { type } from "os";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// <---- Exercício 1 ---->

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong! 🏓")
})

// <---- Exercício 1.5 ---->

app.get("/mostrarafazeres", (req: Request, res: Response) => {
    for (const afazer of afazeres) {
        console.log(afazer)
    }
    res.send({ afazeres })
})

// <---- Exercício 2 ---->

type afazer = { userId: string, id: string, title: string, completed: string }

// <---- Exercício 3 ---->

const afazeres: afazer[] = [
    { userId: "1", id: "1", title: "Brincar com o cachorro", completed: "false" },
    { userId: "1", id: "2", title: "Passear com o cachorro", completed: "false" },
    { userId: "1", id: "3", title: "Dar comida pro cachorro", completed: "true" },
    { userId: "2", id: "4", title: "Pentear o gato", completed: "true" },
    { userId: "2", id: "5", title: "Tirar o gato do quarto", completed: "true" },
    { userId: "2", id: "6", title: "Comprar outro gato", completed: "false" },
    { userId: "3", id: "7", title: "Assistir a lontra", completed: "false" },
    { userId: "3", id: "8", title: "Ver a lontra dormindo", completed: "true" },
    { userId: "3", id: "9", title: "Brincar de bola com a lontra", completed: "false" }
]

// <---- Exercício 4 ---->

app.get("/afazeres/:string", (req: Request, res: Response) => {
    const isCompleted = req.params.string

    const filterAfazer = afazeres.filter((task) => {
        return task.completed === isCompleted
    })

    res.send({ filterAfazer })
})

// <---- Exercício 5 ---->

app.post("/criarafazer", (req: Request, res: Response) => {
    const newAfazerUserId = req.body.userId
    const newAfazerId = req.body.id
    const newAfazerTitle = req.body.title
    const newAfazerCompleted = req.body.completed

    const newAfazer: afazer = {
        userId: newAfazerUserId,
        id: newAfazerId,
        title: newAfazerTitle,
        completed: newAfazerCompleted
    }

    afazeres.push(newAfazer)

    res.send({ afazeres })
})

// <---- Exercício 6 ---->
app.put("/afazeres/:id", (req: Request, res: Response) => {
    const idUpdate = req.params.id
    const updatedComplete = req.body.completed

    for (const afazer of afazeres) {
        if (afazer.id === idUpdate) {
            afazer.completed = updatedComplete
        }
    }

    console.log({ idUpdate, updatedComplete })
    res.send({ afazeres })
})

// <---- Exercício 7 ---->

app.delete("/deletarafazeres/:id", (req: Request, res: Response) => {
    const idUpdate = req.params.id

    for (let i = 0; i < afazeres.length; i++) {
        if (afazeres[i].id === idUpdate) {
            afazeres.splice(i, 1)
        }
    }

    res.send({ afazeres })
})

// <---- Exercício 8 ---->

app.get("/afazeresusuario/:userId", (req: Request, res: Response) => {
    const idUserShow = req.params.userId

    const fiteredList = afazeres.filter(task => {
        if (task.userId === idUserShow){
            return task
        }
    })

    res.send({fiteredList})
})

// <---- Exercício 10 ---->