import { Request, Response } from 'express'
import { getFullAddress } from '../services/getFullAddress'
import insertAdressDb from '../data/insertAdressDb'
 
export const insertAddress = async (req: Request, res: Response) => {
    try {
        const { cep, logradouro, numero, complemento, bairro, cidade, estado } = req.body

        const address = await getFullAddress(cep, numero, complemento)

        if(!address){
            throw new Error("Cep Inválido!")
        }

        await insertAdressDb(address)
        
        res.status(201).send("Deu muito certo")
        
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}

// https://viacep.com.br/ws/:cep/json/
