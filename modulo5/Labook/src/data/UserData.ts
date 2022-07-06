import User from "../model/User"
import { FindByEmailResponse } from "../types/userDTO/findByEmailResponse"
import { BaseDatabase } from "./BaseDatabase"

export default class UserData extends BaseDatabase {
    protected TABLE_NAME = "labook_users"

    insert = async (user: User) => {
        try {
            await this
                .connection(this.TABLE_NAME)
                .insert(user)
                
        } catch (err: any) {
            if (err instanceof Error) {
                throw new Error(err.message)
            } else {
                throw new Error("Erro ao buscar usuário pelo email no banco.")
            }
        }
    }

    findByEmail = async (email: string) => {
        
        try {
            const queryResult: FindByEmailResponse = await this
                .connection(this.TABLE_NAME)
                .select('*')
                .where({ email })
            return queryResult[0]

        } catch (err: any) {
            if (err instanceof Error) {
                throw new Error(err.message)
            } else {
                throw new Error("Erro ao buscar usuário pelo email no banco.")
            }
        }
    }
}