type prato = {
    nome: string, custo: number, valorVenda: number, ingredientes: string[]
}

const pratos:prato[] = [
    {nome: "Raviolli", custo: 15, valorVenda: 29, ingredientes: ["massa","leite","ovos"]},
    {nome: "Spagetti", custo: 10, valorVenda: 25, ingredientes: ["massa","oleo","molho tomate"]},
    {nome: "Penne ao molho gorgonzola", custo: 25, valorVenda: 59, ingredientes: ["massa","gorgonzola","filé"]}
]

type comprador = {
    nomePrato: string, nomeCliente: string 
}

function addRecipe(prato) => {
    
}