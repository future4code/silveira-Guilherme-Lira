import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { loginDTO } from "../types/loginDTO";
import { SignupInputDTO } from "../types/signupDTO";

export default class UserBusiness {
constructor(
    private userData: UserData, 
    private idGenerator: IdGenerator, 
    private hashManager: HashManager, 
    private authenticator: Authenticator
){}

    signup = async (input: SignupInputDTO) => {
        // Validação
        const {name, email, password} = input

        if (!name || !email || !password){
            throw new Error("Campos invalidos - Digite name, email, password")
        }

        // Conferir se usuario existe
        const registeredUser = await this.userData.findByEmail(email)

        if(registeredUser) {
            throw new Error("Email já foi cadastrado")
        }

        // Criar ID pro usuario
        const id = this.idGenerator.generateId()

        // Hashear o password
        const hashedPassword = await this.hashManager.hash(password)

        // Criar usuario no banco
        const user = new User(id, name, email, hashedPassword)

        await this.userData.insert(user)

        // Criar o Token
        const token = this.authenticator.generateToken({id})

        // Retornar o token
        return token
    }

    login = async (input: loginDTO) => {

        const {email, password} = input

        if (!email || !password){
            throw new Error("Digite o e-mail e a senha!")
        }

        // Procurando as informações do usuário.
        const getUserEmail = await this.userData.findByEmail(email)

        // Pegando informações do usuario.
        const userId = getUserEmail.id
        const userPassword = getUserEmail.password

        const checkPass: boolean = await this.hashManager.compare(password, userPassword)

        if(checkPass){
            const token = this.authenticator.generateToken({id: userId})
            return token
        } else {
            throw new Error("Email ou senha invalidos!")
        }

    }


}