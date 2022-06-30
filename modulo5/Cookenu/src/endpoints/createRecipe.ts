import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDataBase";
import { Recipe } from "../entities/Recipies";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export async function createRecipe(req: Request, res: Response){
    try {
        const token = req.headers.authorization
        const {title, description} = req.body

        if(!title || !description){
            res.status(422).send("Insira corretamente todas as informações necessárias")
        }

        if(!token) {
            res.status(422).send("Por favor, insira o token no headers")
        }

        const recipeDataBase = new RecipeDatabase()

        // gerando um ID aleatório para a receita
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate()

        // Criando a nova receita
        const creationDate = new Date().toISOString().split("T")[0]
        const tokenData = new Authenticator().getTokenData(token)
        const newRecipe = new Recipe(id, title, description, creationDate, tokenData.id)
        await recipeDataBase.createRecipe(newRecipe)

        res.status(200).send({message: "Receita criada com sucesso!", token})

    } catch (err: any){
        res.status(400).send(err.message)
    }
}