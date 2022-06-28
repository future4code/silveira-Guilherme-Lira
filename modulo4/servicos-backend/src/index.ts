import { AddressInfo } from "net";
import  app  from './app'
import { getAdress } from "./endpoint/getAdress";
import { insertAddress } from "./endpoint/insertAddress";

app.get("/endereco/:cep", getAdress)
app.post("/user/:cep", insertAddress)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});