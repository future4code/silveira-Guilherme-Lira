import {Request, Response} from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";

export async function getAllUsers(req: Request, res: Response){
    try {
        // const token = req.headers.authorization

        // if (!token){
        //     res.status(422).send("Esse endpoint exige uma autorização a ser passada no headers")
        // }

        const authenticator = new Authenticator()
        // const tokenData = authenticator.getTokenData(token)

        // if (tokenData.role !== "ADMIN"){
        //     res.status(401).send("somente administradores podem acessar essa funcionalidade")
        // }

        const userDataBase = new UserDataBase()
        const users = await userDataBase.getAllUser()

        res.status(200).send(users)

    } catch (err: any){
        res.status(400).send(err.message)
    }
}