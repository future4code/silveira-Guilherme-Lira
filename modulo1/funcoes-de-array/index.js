// -- QUESTÕES DE INTERPRETAÇÃO --

// QUESTÃO 1
// Neste exemplo, estamos atribuindo a cada indice do array "novoArrayA" o array usuario completo, e exibindo também o primeiro indice de "usuarios",
// como a função "maps" roda para cada elemento, como nos temos 3 elementos ele vai rodar 3 vezes.

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// QUESTAO 2
// Neste caso, estamos fazendo o mapeamento do array "usuários" e colocando apenas a informação do nome em um novo array e exibindo ele no console.

// QUESTAO 3
// Agora, vamos mapear o array "Usuarios" e adicionar a um novo array todos os itens que não tem o apelido "Chijo", fazendo
// com que o nosso novo array tenha apenas os dois itens iniciais.

// -- QUESTÕES DE ESCRITA DE CÓDIGO --

// QUESTÃO 1
// A
const pets = [{ nome: "Lupin", raca: "Salsicha"}, { nome: "Polly", raca: "Lhasa Apso"}, { nome: "Madame", raca: "Poodle"}, 
{ nome: "Quentinho", raca: "Salsicha"}, { nome: "Fluffy", raca: "Poodle"}, { nome: "Caramelo", raca: "Vira-lata"},]

const arrayNomes = pets.map((item) => {
    return item.nome
})

console.log(arrayNomes)

// //B

const arraySals = pets.filter((item, index, array) => {
    return item.raca == "Salsicha"
})

console.log(arraySals)

// //C
const arrayPood = pets.filter((item, index, array) => {
    return item.raca == "Poodle"}).map((index) => {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${index.nome}!`)
})

// QUESTÃO 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 }, { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 }, { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 }, { nome: "Leite", categoria: "Bebidas", preco: 2.99 }, { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 }, { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 }, { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }]

    // A

    const produtosNomes = produtos.map((item) => {
        return item.nome
    })

    console.log(produtosNomes)

    // B

    const produtosDesc = produtos.map((item, array) => {
        item.preco = (item.preco) - ((5*item.preco)/100)
        console.log(item)
    })

    // C

    const produtosBeb = produtos.filter((item) => {
        return item.categoria == "Bebidas"
    })
    console.log(produtosBeb)

    // D

    const produtoype = produtos.map((item,index,array) => {
       if(item.nome.includes("Ypê")){
        const ype = item
        console.log(ype)
       } 
    })

    // E
    
    const produtoype = produtos.map((item,index,array) => {
        if(item.nome.includes("Ypê")){
         const ype = item
         console.log(`Compre ${item.nome} por ${item.preco}`)
        } 
     })

     // DESAFIO 1

     const pokemons = [
        { nome: "Bulbasaur", tipo: "grama" },
        { nome: "Bellsprout", tipo: "grama" },
        { nome: "Charmander", tipo: "fogo" },
        { nome: "Vulpix", tipo: "fogo" },
        { nome: "Squirtle", tipo: "água" },
        { nome: "Psyduck", tipo: "água" },
     ]

     const nomes = pokemons.sort(function(a,b) {
         const nameA = a.nome.toUpperCase();
         const nameB = b.nome.toUpperCase();
        if (nameA < nameB){
        return -1
    }
        if (nameA > nameB){
        return 1;
    }
    return 0;
});

console.log(nomes)
