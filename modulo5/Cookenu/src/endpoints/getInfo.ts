import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";

export default async function getProfile(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization

        if(!token) {
            res.status(422).send("Digite o token no headers por favor.")
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData) {
            res.status(401).send("Token não válido, por favor digite outro token")
        }

        const userInfo = await new UserDataBase().getUserInformation(tokenData.id)
        
        res.status(200).send(userInfo)

    } catch (err:any) {
        res.status(400).send(err.message)
    }
}