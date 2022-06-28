import { Request, Response } from "express"
import selectProducts from "../data/selectProducts"

export default async function getProducts(req: Request, res: Response){
    try {
    
        const allProducts = await selectProducts()

        if(!allProducts?.length){
            throw new Error("Nenhum produto cadastrado.")
        }

        res.status(200).send(allProducts)

    } catch (error: any) {
        res.status(500).send({ message: error.message})
    }
}