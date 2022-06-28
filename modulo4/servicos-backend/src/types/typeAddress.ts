export type Address = {
    cep: number,
    logradouro: string,
    numero: number,
    complemento?:string,
    bairro: string,
    cidade: string,
    estado: string
}