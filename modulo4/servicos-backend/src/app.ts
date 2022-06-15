import express, {Express} from 'express'
import cors from 'cors'
import dotenv from "dotenv";

const app: Express = express();

dotenv.config();

app.use(express.json());
app.use(cors());

export default app