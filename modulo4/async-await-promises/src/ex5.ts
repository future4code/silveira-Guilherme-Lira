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
        for (const user of users) {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id, message});
        }
        console.log("Todas as notificações foram enviadas com sucesso!");
    } catch {
        console.log("Erro!");
    }
}; 