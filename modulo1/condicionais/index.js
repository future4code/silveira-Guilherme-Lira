// QUESTÕES DE INTERPRETAÇÃO DE TEXTO

// QUESTÃO 1
// A. O teste vê se o número digitado pelo usuário é um multiplo de 2. 
// B. Todos os números pares, já que são todos divisíveis por 2
// C. Para números ímpares.

// QUESTÃO 2
// A. O usuário vai digitar o nome de uma fruta e o sistema vai devolver o preço daquela fruta.
// B. "O preço da fruta maça é R$ 2.25"
// C. Se a gente tirar o break, o "switch" não vai saber exatamente onde parar e continuar seguindo no código,
// ou seja, vai ser impresso: O preço da fruta  Pêra  é  R$  5 (Já que no final a variável "preco" é alterada)

// QUESTÃO 3
// A. A primeira linha está pedindo para o usuário digitar um número e informando o programa que o que vai ser digitado é um número
// B. Se o usuário digitar "10" o programa vai exibir a mensagem "Esse número passou no teste", já se o usuário digitar -10 o código vai seguir para 
// a próxima linha que no caso é o da mensagem, mas como ela foi definida dentro do IF, a variável não existe fora dele e o sistema não consegue emitir ela.
// C. Se o usuário digitar um número maior do 0 o programa vai funcionar sem problema, caso contrário, ele não conseguirá exibir nada devido ao motivo acima. 

// QUESTÕES DE ESCRITA DE CÓDIGO

// QUESTÃO 1

const idade = Number(prompt("Digite a sua idade"))

if (idade >= 18){
    console.log("Você PODE dirigir")
} else {
    console.log("Você NÃO PODE dirigir")
}

// QUESTÃO 2

const turno = prompt("Digite o turno em que você estuda. (M V N)")

if (turno === "M"){
    console.log("Bom dia!")
} else if (turno === "V"){
    console.log("Boa tarde!")
} else if (turno === "N"){
    console.log("Boa noite!")
} else {
    console.log("Turno inválido!")
}

// QUESTÃO 3

const turno2 = prompt("Digite o turno em que você estuda. (M V N)")

switch (turno2){
    case 'M':
        console.log('Bom dia!')
        break
    case 'V':
        console.log('Boa tarde!')
        break
    case 'N':
        console.log('Boa noite!')
        break
    default:
        console.log('Turno digitado inválido!')
        break
}

// QUESTÃO 4

const genero = prompt("Qual o gênero do filme?")
const preco = Number(prompt("Qual o preço do ingresso?"))

if (genero == "fantasia" && preco < 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

// DESAFIO 1

const genero1 = prompt("Qual o gênero do filme?")
const preco1 = Number(prompt("Qual o preço do ingresso?"))

if (genero1 == "fantasia" && preco1 < 15){
    const lanche = prompt("Qual lanchinho você vai comprar? (pipoca, chocolate, doce)")
    console.log("Bom filme!")
    console.log(`Aproveite o seu ${lanche}`)
} else {
    console.log("Escolha outro filme :(")
}

// DESAFIO 2 

const nome = prompt("Qual o seu nome completo?")
const tipo = prompt("Qual o tipo de jogo? (IN ou DO)")
const etapa = prompt("Qual a etapa do jogo? (ST, DT ou FI)")
const categoria = Number(prompt("Qual a categoria? (1, 2, 3 ou 4)"))
const quantidade = Number(prompt("Quantos ingressos você quer?"))
var preco = 1;

function internacional(a){
    a = a/(4.10)
    return a;
}

function numIngressos(preco,Ingressos){
    preco = preco*Ingressos
    return preco
}

function semi(a){
    if(a == 1){
        preco = 1320,00
    } else if (a == 2){
        preco = 880,00
    } else if (a == 3) {
        preco = 550,00
    } else {
        preco = 220,00
    }
}

function decisao(a){
    if(a == 1){
        preco = 660,00
    } else if (a == 2){
        preco = 440,00
    } else if (a == 3) {
        preco = 330,00
    } else {
        preco = 170,00
    }
}

function final(a){
    if(a == 1){
        preco = 1980,00
    } else if (a == 2){
        preco = 1320,00
    } else if (a == 3) {
        preco = 880,00
    } else {
        preco = 330,00
    }
}

switch(etapa){
    case "ST": semi(categoria)
    break
    case "DT": decisao(categoria)
    break
    case "FI": final(categoria)
    break
}

if (tipo === "IN"){
    preco = internacional(preco)
}

const precoF = numIngressos(preco,quantidade)

console.log("--- Dados da compra ---")
console.log("Nome do cliente:", nome)
console.log("Tipo do jogo:", tipo)
console.log("Etapa do jogo:", etapa)
console.log("Categoria:", categoria)
console.log("Quantidade de Ingressos:", quantidade)
console.log("--- Valores ---")
console.log("Valor do ingresso: R$", preco)
console.log("Valor total: R$", precoF)
