import { Request, Response } from "express";
import { creationDTO } from "../types/creationDTO";


export default class PostController {

    constructor(
        private postController: PostController
    ) {}

    create = async (req: Request, res: Response) => {
        const token = req.headers.authorization

        const {photo, description, type } = req.body;

        const input = { photo, description, type }

        try {
            const newPost = await this.postController.create(input, token)

            res.status(201).send({ message: "Post cadastrado com sucesso!", token })

        } catch (err: any) {
            if (err instanceof Error) {
                return res.status(400).send(err.message)
            }
            res.status(500).send("Erro no criar Post!")
        }
    }

    findbyId = async (req: Request, res: Response) => {

    }
}