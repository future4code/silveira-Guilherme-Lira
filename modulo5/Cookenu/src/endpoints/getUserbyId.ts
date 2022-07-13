import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";

export default async function getUserById(req: Request, res: Response): Promise<void> {
    try {
        
        const token = req.headers.authorization
        const id = req.params.id

        if(!token || !id) {
            res.status(422).send("Digite o token e o ID no headers por favor.")
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData) {
            res.status(401).send("Token não válido, por favor digite outro token")
        }

        const userInfo = await new UserDataBase().getUserInformation(id)

        if (!userInfo) {
            res.status(404).send("Não conseguimos achar um usuário com o ID informado.")  
        }
        
        res.status(200).send(userInfo)

    } catch (err:any) {
        res.status(400).send(err.message)
    }
}