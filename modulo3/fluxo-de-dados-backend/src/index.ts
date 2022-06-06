import express, {Request, Response} from "express";
import cors from "cors";
import { produto, produtos } from "./data"
import { send } from "process";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// < ----- EXERCICIO 1 ----->

app.get('/test', (req: Request, res: Response) => {
    res.send("Sua API passou no teste!")
})

// < ----- EXERCICIO 3 ----->

app.post("/criarProduto", (req: Request, res: Response) => {
    const newProdutoName = req.body.name
    const newProdutoPrice = req.body.price

    const newProduto: produto = {
        id: Date.now(),
        name: newProdutoName,
        price: newProdutoPrice
    }

    produtos.push(newProduto)

    res.send({ produtos })
})

// < ----- EXERCICIO 4 ----->

app.get("/listarProdutos", (req: Request, res: Response) => {
    for (const produto of produtos) {
        console.log(produto)
    }
    res.send({ produtos })
})

// < ----- EXERCICIO 5 ----->

app.put("/editarPreco/:id", (req: Request, res: Response) => {
    const productId = Number(req.params.id)
    const newProductPrice = req.body.price

    produtos.map((produto: produto) => {
        if (produto.id === productId){
            return produto.price = newProductPrice
        }
    })

    res.send({ produtos })
})

// < ----- EXERCICIO 6 ----->

app.delete("/deletarProduto/:id", (req: Request, res: Response) => {
    
    const produtoIndex: number = produtos.findIndex((produto: produto) => {
        return produto.id === Number(req.params.id)
    })

    produtos.splice(produtoIndex,1)

    res.send({ produtos })
})

// < ----- EXERCICIO 7 ----->

app.post("/criarProdutoComValidacao", (req: Request, res: Response) => {
 try {    
    const newProdutoName = req.body.name
    const newProdutoPrice = req.body.price

    if (!newProdutoName || !newProdutoPrice){
        res.statusCode = 422
        throw new Error("Nome do Produto e/ou Preço não informados.")
    }

    if (typeof newProdutoName != "string"){
        res.statusCode = 422
        throw new Error("Nome informado não é do tipo String")
    }

    if (typeof newProdutoPrice != "number"){
        res.statusCode = 422
        throw new Error("Preço informado não é do tipo Number")
    }

    if (newProdutoPrice <= 0){
        res.statusCode = 422
        throw new Error("Preço digitado é 0 ou um valor negativo.")
    }

    const newProduto: produto = {
        id: Date.now(),
        name: newProdutoName,
        price: newProdutoPrice
    }

    produtos.push(newProduto)

    res.send({ produtos })

 } catch (err: any) {
    if(res.statusCode === 200){
        res.status(500)
        .send("Erro inexperado")
      } else {
      res.send(err.message)
      }
    }
})

// < ----- EXERCICIO 8 ----->

app.put("/editarPrecoComValidacao/:id", (req: Request, res: Response) => {
    try {
    const productId = Number(req.params.id)
    const newProductPrice = req.body.price

    if (!newProductPrice){
        res.statusCode = 422
        throw new Error("Preço não foi digitado")
    }

    if (typeof newProductPrice != "number"){
        res.statusCode = 422
        throw new Error("Preço digitado não é do tipo Number")
    }

    if (newProductPrice <= 0){
        res.statusCode = 422
        throw new Error("Preço digitado é negativo ou menor que zero")
    }

    if (typeof productId === "undefined" || "null"){
        res.statusCode = 401
        throw new Error("ID do produto não informado")
    }

    if(productId <= 0){
        res.statusCode = 404
        throw new Error("Não foi possível encontrar um produto com o ID informado.")
    }

    produtos.map((produto: produto) => {
        if (produto.id === productId){
            return produto.price = newProductPrice
        }
    })

    res.send({ produtos })

    } catch (err: any) {
    if(res.statusCode === 200){
        res.status(500)
        .send("Erro inexperado")
      } else {
      res.send(err.message)
      }
    }
})

// < ----- EXERCICIO 9 ----->

app.delete("/deletarProdutoComValidacao/:id", (req: Request, res: Response) => {
    try{

    if (!(typeof req.params.id === "undefined" || "null")){
        res.statusCode = 401
        throw new Error("ID do produto não informado")
    }
    
    const produtoIndex: number = produtos.findIndex((produto: produto) => {
        return produto.id === Number(req.params.id)
    })

    if (!produtoIndex) {
        res.status(404).send("Não foi possível encontrar um produto com o ID informado.")
    }

    produtos.splice(produtoIndex,1)

    res.send({ produtos })
    } catch (err: any) {
        if(res.statusCode === 200){
           res.status(500)
          .send("Erro inexperado")
        } else {
          res.send(err.message)
        }
    }
})