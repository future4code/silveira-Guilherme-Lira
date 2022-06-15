import { connection } from "./connection"
import { getFullAddress } from "../services/getFullAddress"

const createTable = () => connection.raw(`
    create table endereco(
    cep INT not null,
    logradouro varchar(255) not null,
    numero INT not null,
    complemento varchar(225),
    bairro varchar(255) not null,
    cidade varchar(255) not null,
    estado varchar(255) not null
    );`)
    .then(() => {
        console.log("Deu bom na tabela")})
    .catch(Error)

const insertAddress = async () => {
    const newAddress = await getFullAddress("16403073", 10, "Residência")

    await connection("endereco").insert(newAddress)
    .then(() => { 
        console.log("Endereço Criado")})
    .catch(Error)
 }