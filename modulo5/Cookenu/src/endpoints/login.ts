import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function login(req: Request, res: Response){
    try {
        const {email, password} = req.body

        if(!email || !password){
            res.status(422).send("Digite o email e senha!")
        }

        const userDataBase = new UserDataBase()
        const user = await userDataBase.findUserByEmail(email)

        if (!user) {
            res.status(409).send("Esse email não foi cadastrado!")
        }

        // Comparando se a senha está correta
        const hashManager = new HashManager()
        const passwordIsCorrect = hashManager.compare(password, user.getPassword())

        if(!passwordIsCorrect){
            res.status(401).send("Email ou senha incorretos!")
        }

        // VERIFICAÇÃO DO TOKEN
        const authenticator = new Authenticator()
        const token = authenticator.generate({id: user.getId(), role: user.getRole() })

        res.status(200).send({message: "Usuário logado com sucesso!", token})

    } catch (err: any){
        res.status(400).send(err.message)
    }
}