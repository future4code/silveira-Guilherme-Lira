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

// A) A diferença entre eles é a localização do "Async"

// B)
const getSubscribers = async (): Promise<any[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data;
}; 