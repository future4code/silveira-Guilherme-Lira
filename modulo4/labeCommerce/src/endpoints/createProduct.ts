import { Request, Response } from "express"
import insertProduct from "../data/insertProduct"
import { productData, productInput } from "../types"

export default async function createProduct(req: Request, res: Response) {
    try {

        const {name, price, image_url}: productInput = req.body

        if(!name || !price || !image_url){
            throw new Error("O nome, price e url da image devem ser digitados!")
        }

        const productInsert: productData = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }

        const answer = await insertProduct(productInsert)

        res.status(201).send({message: answer})

    } catch (error: any){
        res.status(500).send({message: error.message})
    }
}