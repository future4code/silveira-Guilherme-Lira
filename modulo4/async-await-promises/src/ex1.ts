// A) O endpoint a ser utilizado é o GET

// B) Indicamos utilizando Promise<any[]>

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

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  }; 