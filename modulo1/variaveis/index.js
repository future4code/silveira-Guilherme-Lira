/* 1. No problema número 1 o primeiro console.log(b) = 10; Já no segundo, como o valor de b foi alterado,
quando o código rodar novamente ele vai imprimir o valor atualizado de b, dando o seguinte resultado:
console.log (a,b) -> a = 10 e b = 5;

2. Para o segundo problema, se tivermos por exemplo, x = y, o valor de y será atribuido a variavel x. Sendo assim,
ao final da compilação do código teremos o seguinte resultado:
a = 10, b = 10 e c = 10;

3. Neste caso, o ideal é, como o exercicio sugere, utilizar o camelCase, como não tem resposta certa ou errada,
o nome que eu iria atrubui para cada variavel seria a seguinte:

p = horasTrabalhadasDia;
t = salarioDia; */

let nome;
let idade;

console.log(typeof nome)
console.log(typeof idade)

/* A resposta que recebemos foi que o tipo das variáveis é "undefined" isso aconteceu pois como nenhum valor ainda foi atribuido
para elas, o código não sabe exatamente qual o tipo da variável e como eu utilizei o "let" para declarar elas significa
que eu poderia colocar qualquer tipo de variável lá. */ 

nome = prompt("Digite seu nome");
idade = prompt("Digite a sua idade");

console.log(typeof nome)
console.log(typeof idade)

console.log("Olá", nome,", você tem", idade,"anos.")

/* No nosso último typeof os valores que nos obtivemos foram que ambos são Strings. */

/* Segunda Parte */

let respUm;
let respDois;
let respTres;

respUm = prompt("Você está usando roupa azul agora?");
respDois = prompt("Você está usando roupa vermelha agora?");
respTres = prompt("Você está usando roupa rosa agora?");

console.log("Você está usando roupa azul agora? - ", respUm)
console.log("Você está usando roupa vermelha agora? - ", respDois)
console.log("Você está usando roupa rosa agora? - ", respTres)

/* Terceira Parte */

let a = 2;
let b = 5;
let c;

c = a; // c = 10 e a = 10
a = b; // b = 25 e a = 25
b = c; // b = 10 e a = 10


console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)


/* Desafio */

const num1 = parseInt(prompt("Digite o número um?"));
const num2 = parseInt(prompt("Digite o número dois?"));

/* Pesquisei na net e ele dizia para usar essa função parseInt pare que eu pudesse usar os valores como number no Prompt já que usar a função
para trocar o tipo da variavel ia ser um pouco mais demorado, espero que não seja problema haha */

let soma = num1 + num2;

console.log("1. O primeiro número somado ao segundo número resulta em:",soma);

let mult = num1*num2;

console.log("2. O primeiro número multiplicado pelo segundo número resulta em",mult);