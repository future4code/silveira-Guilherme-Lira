import { productData } from "../types";
import { connection } from "./baseDataBase";

export default async function insertProduct(insertProduct: productData):Promise<string> {

    const {id, name, price, image_url} = insertProduct

    await connection("labecommerce_products")
    .insert({
        id,
        name,
        price,
        image_url
    })

    return `Produto ${name} criado com sucesso!`
}