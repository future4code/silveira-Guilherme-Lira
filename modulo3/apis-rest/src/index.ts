import express, {Request, Response} from "express";
import cors from "cors";
import {users, user, UserType} from './data'

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

/*
 QUESTÃO 1:
 a. Qual método HTTP você deve utilizar para isso?
  - Para este caso, o método HTTP mais apropriado seria o GET

 b. Como você indicaria a entidade que está sendo manipulada?
  - A entidade seria o objeto "users"
*/

app.get("/userAll", (req: Request, res: Response) => {
    for (const user of users) {
        console.log(user)
    }
    res.send({users})
})

/*
 QUESTÃO 2:
 a. Como você passou os parâmetros de type para a requisição? Por quê?
  - Utilizando o "filter" podemos passar por todo o array de users, somado a isso, só precisamos botar uma condição que faça com que se msotre apenas os types que queremos.

 b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
  - Neste caso, podemos criar um erro que checa se o array filtrado não possui elementos, se este for o caso, o type informado é invalido. 

*/

app.get("/user/search", (req: Request, res: Response) => {
    let errorCode = 404

    try {
    const searchType: string = req.query.type as string

    const userSearch = users.filter((user) => {
        return user.type === searchType.toUpperCase()
    })

    if (userSearch.length === 0){
        errorCode = 404
        throw new Error("Tipo digitado não existe")
    }

    res.status(200).send(userSearch)
    
    } catch (err: any) {
        res.status(errorCode).send({message: err.message})
    }  
})

/*
 QUESTÃO 3:
 a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
  - O parametro que nos utilizamos é o Query.Name (para esse caso)
*/

app.get("/userSearchName", (req: Request, res: Response) => {
    let errorCode = 404

    try {
    const searchName: string = req.query.name as string

    const userSearch = users.filter((user) => {
        return user.name === searchName
    })

    if (userSearch.length === 0){
        errorCode = 404
        throw new Error("Não existe usuário com o nome digitado.")
    }

    res.status(200).send(userSearch)
    
    } catch (err: any) {
        res.status(errorCode).send({message: err.message})
    }  
})

/*
 QUESTÃO 4:
 a. Mude o método do endpoint para PUT. O que mudou?
  - Ambos funcionam normal.
 b. Você considera o método PUT apropriado para esta transação? Por quê?
  - O método PUT é mais utiizado para atualizar informações, caso ela já exista, um novo é criado. Diferente do POST que apenas adiciona.
  Sendo assim, para este caso acredito que o idea fosse usar o Post. 
*/

app.post("/Createusers", (req: Request, res: Response) => {
    let errorCode = 400
  
    try {
      const {id, name, email, type, age} = req.body
  
      const newUser: user = {
        id: users.length + 1,
        name: name,
        email: email,
        type: type,
        age: age
      }
  
      users.push(newUser)
  
      res.status(201).send({message: "Usuário criado com sucesso!"})
  
    } catch (error: any) {
      res.status(errorCode).send({message: error.message})
    }
  })