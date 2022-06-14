import cors from "cors";
import express, { Request, Response } from "express";
import { Clientes, Cliente, Transaction } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// <----- LISTAR TODOS OS CLIENTES ----->

app.get("/clientList", (req: Request, res: Response) => {
    for (const Cliente of Clientes) {
        console.log(Cliente)
    }
    res.send({ Clientes })
})

// <----- CRIAR NOVO CLIENTE ----->

app.post("/createClient", (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const { name, cpf, birthString } = req.body

        const [day, month, year] = birthString.split("/")

        const birthDay: Date = new Date(`${year}-${month}-${day}`)


        const ageInMilisseconds: number = Date.now() - birthDay.getTime()
        const clienteAge: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

        if (clienteAge < 18) {
            res.statusCode = 406
            throw new Error("Você precisa ter mais de 18 anos para criar uma conta.")
        }

        const newClient: Cliente = {
            name: name,
            cpf: cpf,
            birth: birthDay,
            balance: 0,
            bankStatement: []
        }

        Clientes.push(newClient)

        res.status(201).send({ message: "Usuário criado com sucesso!" })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}) 