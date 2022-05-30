import express, {Request, response, Response} from "express";
import cors from "cors";

const app = express();

// <----- CONFIGURAÇÃO DA API ----->

app.use(express.json());
app.use(cors());

// <----- CONFIGURAÇÃO DA API ----->

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// <----- TESTE  ----->

app.get("/teste", (req: Request, res: Response) => {          
    res.status(201).send({message:'Teste deu bom'})
})

// <----- QUESTAO 2 3 E 4 ----->

type user = {id: string | number, name: string, phone: string, email: string, website: string}

let users = [
    {
        id: 1,
        name: "Alice",
        phone: "111-111-1111",
        email: "alice@gmail.com",
        website: "www.teste.com.br"
    },
    {
        id: 2,
        name: "Bruno",
        phone: "222-222-2222",
        email: "bruno@gmail.com",
        website: "www.teste2.com.br"
    },
    {
        id: 3,
        name: "Carlos",
        phone: "333-333-3333",
        email: "caros@gmail.com",
        website: "www.teste3.com.br"
    },
    {
        id: 4,
        name: "Danilo",
        phone: "444-444-4444",
        email: "danilo@gmail.com",
        website: "www.teste4.com.br"
    },
    {
        id: 5,
        name: "Emanuel",
        phone: "555-555-5555",
        email: "emaunu@gmail.com",
        website: "www.teste5.com.br"
    },
    {
        id: 6,
        name: "Felipe",
        phone: "666-666-6666",
        email: "felipe@gmail.com",
        website: "www.teste6.com.br"
    }
]

app.get("/users", (req: Request, res: Response) => {         
    const result: user[] = users.map((user) => {
        return user
    })
    res.status(200).send(result)
})

// <----- QUESTAO 5, 6 e 7 ----->

type post = {id: number, title: string, body: string, userId: number}

let posts = [
{id: 1, title:"Harry Potter", body:"Muito bom", userId:1},
{id: 2, title:"Jogos Vorazes", body:"Top também", userId:2},
{id: 3, title:"Crepusculo", body:"Arrasou", userId:3}
]

app.get("/post", (req: Request, res: Response) => {
    res.status(200).send(posts)
})

app.get("/post/:id", (req: Request, res: Response) => {
    const userId = Number(req.params.id) // como pega as informações do post.
    const filterId = posts.filter((post) => {
            return post.id === userId
        }
    )
    res.status(200).send(filterId)
})