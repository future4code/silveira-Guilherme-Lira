import { Request, Response } from "express";
import UserBussiness from "../Bussines/UserBussiness";

class UserController {

    async insertUser(req: Request, res: Response) {

        try {
            const { name, email, password, role } = req.body

            const input = {name, email, password, role}

            const token = await new UserBussiness().createUser(input);

            res.status(200).send({ token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        // await destroyConnection();
    }

    async login(req: Request, res: Response) {
    }
}

export default UserController