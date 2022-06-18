import { productData } from "../types";
import { connection } from "./baseDataBase";

export default async function selectProduct(productId: string):Promise<productData | undefined>{

    const [result] = await connection("labecommerce_products").select("*").where({id:productId})

    if (result){
        const productType:productData = {
        id: result.id,
        name: result.name,
        price: result.price,
        image_url: result.image_url
        }

        return productType
    } else {
        return undefined
    }    
}