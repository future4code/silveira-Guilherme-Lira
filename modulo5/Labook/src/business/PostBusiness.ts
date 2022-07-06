import PostData from "../data/PostData";
import Post from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { creationDTO } from "../types/postDTO/creationDTO";

export default class PostBusiness {
constructor(
    private postData: PostData, 
    private idGenerator: IdGenerator, 
    private authenticator: Authenticator
){}

    create = async (input: creationDTO, token: string) => {
        
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

       const user = new Post(id, photo, description, type, creationData, tokenData.id)
       console.log(user)
        await this.postData.create(user)
    }

    findPost = async (id: string, token: string) => {

        const tokenData = this.authenticator.getTokenData(token)

        if (!tokenData) {
            throw new Error("token inválido.")
        }

        const post = await this.postData.findById(id)

        return post
    }

}