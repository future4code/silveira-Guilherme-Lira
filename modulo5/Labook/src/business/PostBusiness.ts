import PostData from "../data/postData";
import Post from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { creationDTO } from "../types/creationDTO";

export default class PostBusiness {
constructor(
    private postData: PostData, 
    private idGenerator: IdGenerator, 
    private authenticator: Authenticator
){}

    create = async (input: any, token: string) => {
        const {photo, description, type} = input

        if (!photo || !description || !type){
            throw new Error("Campos invalidos - Digite a foto, descrição, tipo e a data de criação.")
        }

        const id = this.idGenerator.generateId()

        const creationData = new Date()

        const tokenData = this.authenticator.getTokenData(token)

        if (!tokenData) {
            throw new Error("token inválido.")
        }

       const user = new Post(id, photo, description, creationData, type, tokenData.id)

        await this.postData.create(user)
    }

}