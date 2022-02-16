/* 
- QUESTÕES DE INTERPRETAÇÃO -

QUESTÃO 1.
a. Como o array foi criado mas nenhum valor atribuido, o programa vai retornar "undefined" já que ele não sabe qual o tipo do array.
b. O resultado vai sair "null" já que o array foi definido como "null".
c. A função "length" retorna a quantidade de elementos no array, como temos 11 elementos, ele vai retornar "11".
d. No array, o primeiro elemento fica na posição "0", sendo assim, estamos pedindo para o código exibir o primeiro elemento do array que no caso é o "3"
e. Agora, estamos redefinindo o valor do segundo elemento do array, ou seja, substituindo o "4" por "19", o resultado vai exibir o array inteiro com essa substituição.
f. Agora, estamos atribuindo o valor do elemento 6 (já que i=0) do array a variável de nome "valor" e exibindo ela, que no caso é o número 9.

QUESTÃO 2.
Na questão 2 estamos pedindo para o usuário digitar uma frase e no processo vamor trocar deixar todas as letras maisculas, além de trocar todas
as letras "A" da palavra para um "I" e no final vamos exibir o tamanho da frase digitada, sendo assim teremos o seguinte resultado:
"SUBI NUM ÔNIBUS EM MIRROCOS"
"27"
*/

/* QUESTÃO 1 */

let nomeDoUsuario = prompt("Digite o seu nome");
let emailDoUsuario = prompt("Digite o seu email");

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);

/* QUESTÃO 2 */

let arrayComida = ["Hamburguer"," Pizza"," Coxinha"," Pastel"," Sorvete"];

console.log(arrayComida);

console.log(`Essas são as minhas comidas preferidas: ${arrayComida.join('\r\n')}`);

let comida = prompt("Qual a sua comida preferida?");
arrayComida[1] = comida;
console.log(arrayComida);

/* QUESTÃO 3 */

let array = [0,0,0];
let listaDetarefas;
listaDetarefas = array; 

listaDetarefas[0] = prompt("Informe a primeira tarefa que você precisa fazer");
listaDetarefas[1] = prompt("Informe a primeira tarefa que você precisa fazer");
listaDetarefas[2] = prompt("Informe a primeira tarefa que você precisa fazer");

console.log(listaDetarefas);

let indiceTarefa = prompt("Por favor digite o índice da tarefa que deseja checar (de 0 a 2)");

let novaListaTarefas = listaDetarefas.splice(indiceTarefa,1);

console.log(listaDetarefas); 

/* DESAFIO 1 */

let Frase = prompt("Digite uma frase");
var myArray = Frase.split(' ');

console.log(myArray);

/* DESAFIO 2 */

arrayFruta = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

for (var i=0; i<5 ; i++){
    if (arrayFruta[i] == "Abacaxi"){
        console.log("O índice da palavra abacaxi é o:", i);
    }
}
console.log(arrayFruta.length); 

