import { insertUser } from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { compare, hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { user } from "../types/user";

export class UserBussiness {

    // metodo da classe
    createUser = async (user: any): Promise<string> => {

        try {

            // 1 regra de negocio - validar os valores 
            if (!user.name || !user.email || !user.password || !user.role) {
                throw new Error("Por favor preencha todos os campos. ");
            }

            if (user.email.indexOf("@") === -1) {
                throw new Error("Email inválido");
            }

            if (user.password.length < 6) {
                throw new Error("Senha deve ter pelo menos 6 dígitos");
            }

            // 2 regra de negocio - gerar meu id 
            const id = generateId();
            // 3 regra de negocio - fazer o hash da senha
            const hashPassword = await hash(user.password);
            // 4 regra de negocio - inserir os valores no banco de dados

            await insertUser({
                id, name: user.name, email: user.email, password: hashPassword, role: user.role
            })

            // 5 regra de negocio - gerar o token
            const token: string = generateToken({ id, role: user.role });

            return token;

        } catch (error: any) {
            throw new Error(error.message || "Erro ao criar o usuário. Por favor cheque as informações.");
        }
    }

    // metodo da classe
    async getUserByEmail(user: user) {

    }

}

export default UserBussiness