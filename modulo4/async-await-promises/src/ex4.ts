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

// A) O EndPoint mais adequado seria o PUT e o tipo de função seria Assíncrona. 

// B)

async function createNews(title: string, content: string, date: number): Promise<void> {
  await axios.put(`${baseURL}/news`, {
    title: title, content: content, date: date});
} 