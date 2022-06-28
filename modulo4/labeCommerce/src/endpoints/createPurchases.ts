import { Response, Request } from "express"
import insertPurchase from "../data/insertPurchase"
import selectProduct from "../data/selectProduct"
import selectUser from "../data/selectUser"
import { purchaseData } from "../types"

export default async function createPurchases(req: Request, res: Response) {
    try {
        const {userId, productId, quantity} = req.body

        if(!userId || !productId || !quantity){
            throw new Error("É necessário digitar o id do usuário, do produto e a quantidade")
        }

        // VERIFICAÇÃO SE O USUÁRIO INFORMADO EXISTE - selectUser é uma função criada para ver se o ID digitado existe no banco de dados.
        const userAlreadyExist = await selectUser(userId)

        if(!userAlreadyExist){
            throw new Error("Usuário não encontrado.")
        }

        // MESMA COISA MAS PARA O PRODUTO
        const productAlreadyExist = await selectProduct(productId)

        if(!productAlreadyExist){
            throw new Error("Produto não encontrado.")
        }

        // PEGANDO AS INFORMAÇÕES PARA O PRODUTO

        const totalPrice = productAlreadyExist.price*quantity

        const purchase: purchaseData = {
            id: Date.now().toString(),
            userId,
            productId,
            quantity,
            totalPrice
        }

        // COLOCANDO AS INFORMAÇÕES NO BANCO DE DADOS

        const anwser = await insertPurchase(purchase)

        res.status(201).send({message: anwser})

    } catch (error: any) {
        res.status(500).send({ message: error.message})
    }
}