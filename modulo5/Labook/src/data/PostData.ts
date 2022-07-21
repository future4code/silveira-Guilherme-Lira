import Post from "../model/Post"
import { FindByIdResponse } from "../types/postDTO/findByIdResponse"
import { BaseDatabase } from "./BaseDatabase"

export default class PostData extends BaseDatabase {
    protected TABLE_NAME = "labook_posts"

    create = async (post: Post) => {
        try {
            await this
                .connection(this.TABLE_NAME)
                .insert(post)
                
        } catch (err: any) {
            if (err instanceof Error) {
                throw new Error(err.message)
            } else {
                throw new Error("Erro ao buscar usuário pelo email no banco.")
            }
        }
    }

    findById = async (id: string) => {
        
        try {
            const queryResult: FindByIdResponse = await this
                .connection(this.TABLE_NAME)
                .select('*')
                .where({ id })
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