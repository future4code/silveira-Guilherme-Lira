import axios from 'axios'
import { Address } from '../types/typeAddress'

export const getFullAddress = async (cep: string, numero: number, complemento?: string): Promise<Address | undefined> => {
    try {

        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

        const address: Address = {
            cep: result.data.cep,
            logradouro: result.data.logradouro,
            numero: numero,
            bairro: result.data.bairro,
            complemento: complemento,
            cidade: result.data.localidade,
            estado: result.data.uf
        }
        
        return address


    } catch (error) {
        console.log('deu ruim visse - getFullAddress')
    }
}    
