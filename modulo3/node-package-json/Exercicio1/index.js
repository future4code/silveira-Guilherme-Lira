// EXERCÍCIO 1

// a) **Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// - Para isso nos podemos utilizar a propriedade "process.argv" que é uma propriedade nativa do node. 

// b)

const nome = process.argv[2]

const idade = Number(process.argv[3])

if (nome && idade){
    console.log("\x1b[34m",`Olá, ${nome}! Você tem ${idade} anos.`)
} else {
    console.log("\x1b[31m",'Esperava 2 parâmetros só recebi um.')
}

// c)

const soma = (idade + 7)

if (nome && idade){
    console.log("\x1b[34m",`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${soma} anos.`)
} else {
    console.log("\x1b[31m",'Esperava 2 parâmetros só recebi um.')
}