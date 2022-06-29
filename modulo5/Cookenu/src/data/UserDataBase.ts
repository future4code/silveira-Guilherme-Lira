import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
    public async getAllUser(): Promise<User[]>{
        try{
            const users = await BaseDataBase.connection('cookenu_users').select('id', 'name', 'email', 'role')

            return users.map((user => User.toUserModel(user)))

        } catch (err: any){
            throw new Error(err.sql.message || err.message)
        }       
    }
    
    public async createuser(user: User): Promise<void>{
        try {
            await BaseDataBase.connection("cookenu_users").insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            });
        } catch (err: any) {
            throw new Error(err.sql.message || err.message)  
        }
    }

    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDataBase.connection('cookenu_users').select('*')
            .where({email});

            return user[0] && User.toUserModel(user[0]);

        } catch (err:any){
            throw new Error(err.sql.message || err.message)
        }
    }
}