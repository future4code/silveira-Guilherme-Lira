import { productData } from "../types";
import { connection } from "./baseDataBase";

const typeProduct = (product: any) => {
    const createProduct: productData = {
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url
    }
    return createProduct
}

export default async function selectProducts():Promise<productData[] | undefined> {
    const result = await connection("labecommerce_products")

    result.map((product) => {
        return typeProduct(product)
    })
    
    return result
}