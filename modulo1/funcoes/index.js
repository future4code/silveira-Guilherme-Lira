
// EXERCÍCIOS DE INTERPRETAÇÃO
/* 
QUESTÃO 1.
a. No console vai ser impresso dois valores, 10 e 50, visto que a função utilizada recebe um valor e multiplica ele por 5.
b. No caso, se você removesse os "console.log", a função rodaria normalmente mas o resultado não poderei ser visto no console, 
ficaria visível apenas na saida do VSC devido a função return que "retornaria" o resultado da função.

QUESTÃO 2.
a. A função vai receber um texto escrito pelo usuário, vai deixar ele todo em letras minúsculas e vai checar se a palavra "cenoura" foi escrita.
Se a palavra cenoura estiver escrita na mensagem, ele vai retornar um booleano "true" caso contrário "false".
i. TRUE
ii. TRUE
iii. TRUE
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//QUESTÃO 1 
//a
function sobreMim1(){
    return console.log("Eu sou Guilherme, tenho 29 anos, moro em Natal e sou estudante.");
}

sobreMim1();

//b
let nome = prompt("Digite o seu nome");
var idade = prompt("Digite a sua idade");
let endereco = prompt("Digite a cidade onde você mora");
let profissao = prompt("Digite a sua profissão");

function sobreMim(nome, idade, endereco, profissao){
    return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e sou " + profissao + ".";
}

console.log(sobreMim(nome,idade,endereco,profissao));

//QUESTÃO 2
//a
function soma(a,b){
    return a+b;
}
console.log(soma(2,3));

//b
function maiorigual(a,b){
    console.log(a>=b);
}
maiorigual(2,3); // false
maiorigual(3,3); // true
maiorigual(4,3); // true

//c
function par(num1){
    console.log(num1%2==0);
}
par(2); // true
par(3); //false

//d
const text1 = "Estou aprendendo a Programar"
function frase(text1){
    console.log(text1.toLowerCase()); // estou aprendendo a programar
    console.log(text1.length); //28
}
frase(text1);

//QUESTÃO 3

const primeiroNum = parseInt(prompt("Digite o primeiro número"));
const segundoNum = parseInt(prompt("Digite o segundo número"));

function somaNum(a,b){
    return parseInt(a+b);
}

function subNum(a,b){
    return a-b;
}

function multNum(a,b){
    return a*b;
}

function divNum(a,b){
    return a/b;
}

console.log("Os números inseridos foram:", primeiroNum, "e", segundoNum);
console.log("Soma:", somaNum(primeiroNum,segundoNum));
console.log("Diferença:", subNum(primeiroNum,segundoNum));
console.log("Multiplicação:", multNum(primeiroNum,segundoNum));
console.log("Divisão:", divNum(primeiroNum,segundoNum));

//DESAFIO 1
//a
let parametroFunc = (a) => console.log(a);
parametro = prompt("Digite um parâmetro");
parametroFunc(parametro);

//b
let parametro2Func = (a,b) => a+b;

x = parseInt(prompt("Digite o primeiro parametro"));
y = parseInt(prompt("Digite o segundo parametro"));
z = parametro2Func(x,y)
parametroFunc(z);

//DESAFIO 2

function pitagoras(catA,catB){
    return Math.sqrt(Math.pow(catA, 2) + Math.pow(catB, 2));
}

console.log(pitagoras(4,3));

