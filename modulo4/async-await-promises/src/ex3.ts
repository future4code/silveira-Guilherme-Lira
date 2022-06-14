// A) Não aparece nenhum erro de tipagem.

// B) Assim podemos retornar "qualquer" tipo de tipagem sem que ocorra algum erro.

// C)

import express from "express";
import cors from "cors";
import { baseURL } from "./baseURL";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});

type user = {
    id: string;
    name: string;
    email: string;
}

const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        };
    });
}; 