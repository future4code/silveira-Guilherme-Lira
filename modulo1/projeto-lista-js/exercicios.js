// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')
  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
let altura = Number(prompt("Digite o valor da altura"))
let largura = Number(prompt("Digite o valor da largura"))
let area = largura * altura
console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
let anoAtual = prompt("Digite o ano atual");
let anoNasc = prompt("Digite o ano de nascimento")
let idade = anoAtual - anoNasc;
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
var IMC = (peso)/(altura*altura);
return IMC.toFixed(1);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
let nome = prompt("Digite o seu nome");
let idade = prompt("Digite a sua idade");
let email = prompt("Digite o seu e-mail");
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
let cor1 = prompt("Digite o seu nome");
let cor2 = prompt("Digite o seu nome");
let cor3 = prompt("Digite o seu nome");
const cores = [cor1,cor2,cor3];
console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
string = string.toUpperCase();
return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let valor = custo/valorIngresso;
  return valor
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let tamanhoS1 = string1.length;
  let tamanhoS2 = string2.length;
  return tamanhoS1 == tamanhoS2;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  let prim = array[0];
  return prim;
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let tam = array.length;
  let ult = array[tam-1];
  return ult;
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let tam = array.length;
  let a = array[0];
  array[0] = array[tam-1];
  array[tam-1] = a;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  return string1 == string2;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = prompt("Qual o ano atual?");
  let anoNasc = prompt("Qual o seu ano de nascimento");
  let anoCarteira = prompt("Qual o ano em que sua carteira foi emitida?");

  let idade = (anoAtual-anoNasc);
  let RG = (anoAtual-anoCarteira);

  a1 = idade <= 20 && RG >= 5;
  a2 = 20 <= idade && idade < 50 && RG >= 10;
  a3 = 51 <= idade && RG >= 15;

  console.log(a1 || a2 || a3);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  a1 = ano%400==0;
  a2 = ano%4==0 && ano%100 !==0 || ano%400 ==0;
  return (a1 || a2);
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let idade = prompt("Qual a sua idade?")
  let ensino = prompt("Possui o ensino médio completo?");
  let disponibilidade = prompt("Possui disponibilidade de horário?");
  resultado = idade == "sim" && ensino == "sim" && disponibilidade == "sim";
  console.log(resultado);
}