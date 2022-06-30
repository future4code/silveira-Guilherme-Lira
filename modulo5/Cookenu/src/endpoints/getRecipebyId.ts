import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function getRecipeById(req: Request, res: Response): Promise<void> {
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

        const recipeinfo = await new RecipeDatabase().getRecipeById(id)

        if (!recipeinfo) {
            res.status(404).send("Não conseguimos achar uma receita com o ID informado.")   
        }
        
        res.status(200).send(recipeinfo)

    } catch (err:any) {
        res.status(400).send(err.message)
    }
}