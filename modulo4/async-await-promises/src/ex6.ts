// A) 
// O Promise.all é utilizado para contornar o problema do código ficar esperando uma resposta da requisição antes de enviar outra
// Ele recebe um aray de promises e retorna uma outra promise que resolve em um array de resposta.

// B) 
// A vantagem é que ele faz os envios das requisições todas de uma vez, tornando o programa mais rápido e mais eficiente.

// C)

import express from "express";
import cors from "cors";
import { baseURL } from "./baseURL";
import axios from "axios";
import { user } from './type'

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});

const sendNotifications = async (users: user[], message: string): Promise<void> => {
    try {
        const promises = users.map(user => {
            return axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message,
            })
        })
        await Promise.all(promises);

    } catch {
        console.log("Deu ruim!");
    }
}; 