import express, {Express} from 'express'
import { AddressInfo } from "net";
import cors from 'cors'
import createUser from './endpoints/createUser';
import getUsers from './endpoints/getUsers';
import createProduct from './endpoints/createProduct';
import getProducts from './endpoints/getProducts';
import createPurchases from './endpoints/createPurchases';

const app: Express = express();

app.use(express.json());
app.use(cors());

// CRIAR E BUSCAR USUÁRIOS
app.post("/user", createUser)
app.get("/users", getUsers)

// CRIAR E BUSCAR PRODUTOS
app.post("/products", createProduct)
app.get("/products", getProducts)

// COMPRAS
app.post("/purchases", createPurchases)

// esse código + essa importação para criar o servidor:
// por performance, é bom o servidor ser o último trecho de código do documento
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
