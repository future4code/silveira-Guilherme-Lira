import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

const UserParams = (input: any): user => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        type: input.type
    }
}

export const getUserByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.params.type

        const result = await connection("aula49_exercicio").where("type", type)

        const users = result.map(UserParams)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("Nenhum usuário encontrado")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message)
    }
}