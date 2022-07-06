import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { creationDTO } from "../types/postDTO/creationDTO";


export default class PostController {

    constructor(
        private postBussiness: PostBusiness
    ) {}

    create = async (req: Request, res: Response) => {
        const token = req.headers.authorization as string

        const {photo, description, type } = req.body;

        const input: creationDTO = { photo, description, type }

        try {
            const newPost = await this.postBussiness.create(input, token)

            res.status(201).send({ message: "Post cadastrado com sucesso!", token })

        } catch (err: any) {
            if (err instanceof Error) {
                return res.status(400).send(err.message)
            }
            res.status(500).send("Erro no criar Post!")
        }
    }

    findbyId = async (req: Request, res: Response) => {
        const token = req.headers.authorization as string

        const id = req.params.id as string

        try {
            const findPost = await this.postBussiness.findPost(id, token)

            res.send(findPost)

        } catch (err:any){
            if (err instanceof Error) {
                return res.status(400).send(err.message)
            }
            res.status(500).send("Erro no criar Post!")
        }

    }
}