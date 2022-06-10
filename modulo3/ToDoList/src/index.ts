import express, { Express, Response, Request } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

/// >--- CRIAR USUÁRIO <---

const createUser = async (name: string, nickname: string, email: string): Promise<any> => {
   await connection("TodoListUser")
       .insert({
           name: name,
           nickname: nickname,
           email: email
       })
}

app.post("/user", async (req: Request, res: Response) => {
   try {
       const { name, nickname, email } = req.body

       if (!name || !nickname || !email) {
           res.statusCode = 406
           throw new Error("Digite todos os campos solicitados.")
       }
       await createUser(name, nickname, email)

       res.status(200).send("Usuário criado com sucesso!")

   } catch (error: any) {
       res.status(400).send(error.message)
   }
})