import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export default async function insertAdressDb(adress: Address){

    const {cep, logradouro, numero, complemento, bairro, cidade, estado} = adress

    await connection("endereco").insert({
        cep, logradouro, numero, complemento, bairro, cidade, estado
    })

}