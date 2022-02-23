// - QUESTÕES INTERPRETAÇÃO DE CÓDIGO --

// QUESTÃO 1
// O código está somando a variável "valor" o valor de i que vai começar de 0 e vai até o número 4; ou seja, vamor começa com 0, ai vai ser somado zero, depois 1, depois 2, até 4,
// dando um total para valor no final do laço de valor = 10;

// QUESTÃO 2
// A. Será impresso no console todos os números maiores do que 18.
// B. uma forma é passando uma variavel para pegar o index também e utilizar a função ".entries()" como mostrado no exemplo abaixo. 

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let [index,numero] of lista.entries()) {
//   if (numero > 18) {
// 		console.log(numero,index)
// 	}
// }

// QUESTÃO 3
// O código vai pedir para o usuário digitar um número, ai ele vai imprimir linhas baseado no número informado cada uma tendo uns "*" baseado em qual linha está,
// ou seja, na primeira linha vai ter um "*" , na segunda vai ter dois e assim até chegar ao número digitado.

// - QUESTÕES DE ESCRITA DE CÓDIGO --

// QUESTÃO 1

const numPets = Number(prompt("Quantos bichinhos de estimação você tem?"))
const array = []

if (numPets > 0){
  for (i=0; i<numPets; i++){
    array[i] = prompt("Digite o nome do seu pet")
  }} else {
  console.log("Que pena! Você pode adotar um pet!")}

  console.log(array)

// QUESTÃO 2

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function imprime(array){
console.log(array)
}

function impDiv(array){
  let newarray = []
  for (i=0; i<array.length; i++){
    newarray[i] = (array[i])/10
  }
  console.log(newarray)
}

function arrayPar(array){
  let newarray = []
  let j = 0
  for (i=0; i<array.length; i++)
  if (array[i]%2==0){
    newarray[j] = array[i]
    j++
  }
  console.log(newarray)
}

function impString(array){
  let newarray = []
  for (i=0; i<array.length; i++){
    newarray[i] = `O elemento do índex ${i} é: ${array[i]}`
}
console.log(newarray)
}

function imprExt(array){
  let maior = 0
  let menor = 10000
  for (i=0; i<array.length; i++){
    if (maior < array[i]){
      maior = array[i]
    }
    if (menor > array[i]){
      menor = array[i]
    }
} console.log(`O maior número é ${maior} e o menor é ${menor}`)
}

imprime(array)
impDiv(array)
arrayPar(array)
impString(array)
imprExt(array)

// DESAFIO 1

const numero = Number(prompt("Jogador 1. Digite o número"))
console.log("Vamos jogar!!")

let chute;

for (i=0; numero !== chute ; i++){

chute = Number(prompt())
console.log("O número chutado foi: ",chute)

if(chute < numero){
  console.log("Errrrrrrrou, é maior")

} else if(chute > numero){
  console.log("Errrrrrrrou, é menor")

} else if(chute === numero) {
  console.log("Acertou!!")
  console.log(`O número de tentativas foi: ${i}`)
}}






