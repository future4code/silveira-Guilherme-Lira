type prato = {
    nome: string, custo: number, valorVenda: number, ingredientes: string[]
}

type cliente = {
    nomePrato: string, nomeCliente: string 
}

const pratos: prato[] = [
    {nome: "Raviolli", custo: 15, valorVenda: 29, ingredientes: ["massa","leite","ovos"]},
    {nome: "Spagetti", custo: 10, valorVenda: 25, ingredientes: ["massa","oleo","molho tomate"]},
    {nome: "Penne ao molho gorgonzola", custo: 25, valorVenda: 59, ingredientes: ["massa","gorgonzola","filé"]}
]

const clientes: cliente[] = [
    {nomePrato: "Raviolli", nomeCliente: "Danilo"},
    {nomePrato: "Penne ao molho gorgonzola", nomeCliente: "Gabi"}
]

const novoPrato: prato = {nome: "Carbonara", custo: 10, valorVenda: 25, ingredientes: ["massa","ovo","bacon"]}

const novoCliente: cliente = {nomePrato: "Spagetti", nomeCliente:"Pedro"}

// a)
function addRecipe(novoPrato: prato):prato[]{
    pratos.push(novoPrato)
    return pratos
}

// console.log(addRecipe(novoPrato))

// b)
function findValue(plate: prato[], nomeBusca:string){
    return plate.filter((post) => {
    return post.nome === nomeBusca
    })
}

// console.log(findValue(pratos,"Spagetti"))

// c)
function sellPlate(newCliente: cliente):cliente[]{
    clientes.push(newCliente)
    return clientes
}

// console.log(sellPlate(novoCliente))

// d) 
// function lucroVendas(produtos: prato[], compradores: string){
//     let lucro:number

//     produtos.map((prato) => {
//     if (prato.nome === compradores){
//         lucro = prato.custo - prato.valorVenda
//     }
//     return lucro
// })    
// }

// console.log(pratos)
// console.log(lucroVendas(pratos,"Raviolli"))