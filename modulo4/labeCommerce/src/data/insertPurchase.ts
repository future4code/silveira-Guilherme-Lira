import { purchaseData } from "../types";
import { connection } from "./baseDataBase";

export default async function insertPurchase(purchase: purchaseData):Promise<string>{

    const {id, userId, productId, quantity, totalPrice} = purchase

    await connection("labecommerce_purchases").insert({
        id,
        user_id: userId,
        product_id: productId,
        quantity,
        total_price: totalPrice
    })

    return `Compra com o id: ${purchase.id} registrada com sucesso`
}