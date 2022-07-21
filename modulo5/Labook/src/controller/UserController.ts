import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { loginDTO } from "../types/userDTO/loginDTO";
import { SignupInputDTO } from "../types/userDTO/signupDTO";

export default class UserController {

    constructor(
        private userBusiness: UserBusiness
    ) { }

    signup = async (req: Request, res: Response) => {
        const { name, email, password } = req.body;

        const input: SignupInputDTO = { name, email, password }

        try {
            const token = await this.userBusiness.signup(input)

            res.status(201).send({ message: "Usuário Cadastrado com sucesso", token })

        } catch (err: any) {
            if (err instanceof Error) {
                return res.status(400).send(err.message)
            }
            res.status(500).send("Erro no signup!")
        }
    }

    login = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const input: loginDTO = { email, password}

        try {

            const token = await this.userBusiness.login(input)

            res.status(200).send({message: "Usuário logado com sucesso!", token})

        } catch (err: any) {
            if (err instanceof Error) {
                return res.status(400).send(err.message)
            }
            res.status(500).send("Erro no signup!")
        }
    }
}