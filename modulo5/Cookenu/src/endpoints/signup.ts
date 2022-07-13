import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function signup(req: Request, res: Response){
    try {
        const {name, email, password, role} = req.body

        if(!name || !email || !password || !role ){
            res.status(422).send("Insira corretamente todas as informações necessárias")
        }

        const userDataBase = new UserDataBase()
        const user = await userDataBase.findUserByEmail(email)

        if (user) {
            res.status(409).send("Esse email já está cadastrado")
        }

        // gerando um ID aleatório para o usuário
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate()

        // Criptografando a senha
        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        // Criando o novo usuario
        const newUser = new User(id, name, email, hashPassword, role)
        await userDataBase.createuser(newUser)

        // VERIFICAÇÃO DO TOKEN
        const authenticator = new Authenticator()
        const token = authenticator.generate({id, role})

        res.status(200).send({message: "Usuário criado com sucesso!", token})

    } catch (err: any){
        res.status(400).send(err.message)
    }
}