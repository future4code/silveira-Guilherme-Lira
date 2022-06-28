import express, { Express, Response, Request } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import connection from './connection'

dotenv.config();

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
   const result = await connection.raw(`
   INSERT INTO userList (name, nickname, email) VALUES('${name}', '${nickname}', '${email}');
   `)
   return result[0]
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

/// >--- Buscar pelo ID <---

const searchUser = async (id: string): Promise<any> => {
   const result = await connection.raw(`
   SELECT id, nickname from userList WHERE id='${id}'; 
   `)
   return result[0]
 }

app.get("/user/:id", async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      const userFound = await searchUser(id);

       if (!id) {
           res.statusCode = 406
           throw new Error("Digite o ID por favor.")
       }

       if (userFound.length === 0) {
         res.statusCode = 406
         throw new Error("Usuário não encontrado.")
     }

       res.status(200).send(userFound)

   } catch (error: any) {
       res.status(400).send(error.message)
   }
})

/// >--- Editar Usuário <---

const EditUser = async (id: string, name: string, nickname: string, email:string): Promise<any> => {
   const result = await connection.raw(`
   UPDATE userList SET name="${name}", nickname = "${nickname}", email="${email}" WHERE id="${id}"; 
   `)
   return result[0]
 }

app.put("/user/edit/:id", async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      const {name, nickname, email} = req.body;

      const userEdited = await EditUser(id,name,nickname,email);

       if (!name || !nickname || !email) {
           res.statusCode = 406
           throw new Error("Digite todos os campos solicitados.")
       }

       res.status(200).send("Usuário Editado com sucesso!")

   } catch (error: any) {
       res.status(400).send(error.message)
   }
})

/// >--- Criar Task <---

const createTask = async (title: string, description: string, limit_date: Date, creator_user_id: number): Promise<any> => {
   const result = await connection.raw(`
   INSERT INTO TodoListTask (title, description, limit_date,creator_user_id) VALUES('${title}', '${description}', '${limit_date}', '${creator_user_id}'); 
   `)
   return result[0]
 }

app.post("/task", async (req: Request, res: Response) => {
   try {
      const {title, description, limit_date, creator_user_id} = req.body

      const [day, month, year] = limit_date.split("/")
      const limitDate: Date = new Date(`${year}-${month}-${day}`)

      const taskCreated = await createTask(title,description,limitDate,creator_user_id);

      if (!title || !description || !limit_date || !creator_user_id) {
         res.statusCode = 422
         throw new Error("Todos os dados precisam ser preenchidos.")
     }

      res.status(200).send(taskCreated)

   } catch (error: any) {
       res.status(400).send(error.message)
   }
})

/// >--- Pegar Tarefa pelo ID <---

const getTaskById = async (id: number): Promise<any> => {
   const result = await connection("TodoListUser")
       .innerJoin("TodoListTask", "TodoListUser.id", "TodoListTask.creator_user_id") 
       .select("TodoListTask.id", "title", "description", "status", "limit_date", "creator_user_id", "nickname")
       .where("TodoListTask.id", id)

   return result
}

app.get("/task/:id", async (req: Request, res: Response) => {
   try {
       const id: any = req.params.id

       const task = await getTaskById(id)

       let formatedDate = task[0].limit_date
       let realDate = ((formatedDate.getDate() )) + "/" + ((formatedDate.getMonth() + 1)) + "/" + formatedDate.getFullYear(); 
       
       const formatedTask = {...task[0], limit_date: realDate}

       if (task.length === 0) {
           res.statusCode = 404
           throw new Error("Tarefa não encontada.")
       }

       res.status(200).send(formatedTask)
   } catch (error:any) {
       res.status(res.statusCode).send(error.message)
   }    
})
