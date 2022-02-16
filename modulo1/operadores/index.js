/*
QUESTÃO 1.
a. let resultado = bool1 && bool2 -> true com false da false, já que para dar true com & precisamos que os dois sejam true.
console.log("a. ", resultado)

b. resultado = bool1 && bool2 && bool3 -> False já que temos operador & com um operador que é false.
console.log("b. ", resultado) 

c. resultado = !resultado && (bool1 || bool2) -> Nesse caso nós temos true & true então nosso resultado é true.
console.log("c. ", resultado)

d. console.log("d. ", typeof resultado) -> Neste caso, a variável resultado terá o valor de "true" que foi o resultado da questão anterior
e quando pedimos para saber o tipo dela, como o tipo é "true" o resultado dela será boolean, já que true e false são variáveis desse tipo.


QUESTÃO 2.
O problema é que no caso, a soma não vai funcionar pois o código vai reconhecer as duas variáveis como strings, dando o resultado final
uma colagem dos dois números que vão ser digitados.
Por exemplo, se primeiroNumero = 10 e segundoNumero = 30; a variável soma daria como resultado 1030 que é um resultado incorreto.


QUESTÃO 3.
Para solucionar o problema, será necessário fazer com que o código entenda que os valores que vão ser digitados são números e não strings. 
Para isso podemos usar a função "parseInt" para informar o programa que os números que vão ser digitados são do tipo INT.

const primeiroNumero = parseInt(prompt("Digite um numero!"))
const segundoNumero = parseInt(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
console.log(typeof primeiroNumero) // Result: number. 

*/

/* PROGRAMA 1 */

idade = parseInt(prompt("Digite a sua idade"));
idadeMigo = parseInt(prompt("Digite a idade do seu melhor amigo(a)"));

console.log("Sua idade é maior do que a do seu melhor amigo(a)?", idade>idadeMigo);

const idadeDif = idade - idadeMigo;

console.log("A diferença de idade entre você e seu melhor amigo(a) é:", idadeDif);

/* PROGRAMA 2 */

par = parseInt(prompt("Digite um número par"));

const result = (par%2);

console.log(result);

/* Colocando um número par o resultado que vamos obter será sempre "0" visto que não vai sobrar nada na divisão de um número par por 2;
Se você colocar um número impar, o resultado sempre será 1, pois sempre vai sobrar uma unidade dividindo um numero impar por 2*/

/* PROGRAMA 3 */

let idadeUser = parseInt(prompt("Digite a sua idade"));

const meses = console.log("A sua idade em meses é:", (idadeUser*12));
const dias = console.log("A sua idade em dias é:", (idadeUser*365));
const horas = console.log("A sua idade em horas é:", (idadeUser*(365*24)));

/* PROGRAMA 4 */

let a = parseInt(prompt("Digite o primeiro número"));10
let b = parseInt(prompt("Digite o segundo número"));

const maior = console.log("O primeiro número é maior do que o segundo?", a>b);
const igual = console.log("O primeiro número é igual ao segundo número?", a==b); 
const dividir = console.log("O primeiro numero é divisível pelo segundo?", a%b == 0);
const dividir2 = console.log("O segundo numero é divisível pelo primeiro?", b%a == 0); 

/* DESAFIO 1 */

console.log ("O valor de 77ºF em K é igual a:", ((77 - 32)*(5/9) + 273.15)), "Kelvin";
console.log ("O valor de 80ºC em ºF é igual a:", ((80)*(9/5) + 32)), "Celsius";
console.log ("O valor de 30ºC em ºF e K é igual a:", x = ((30)*(9/5) + 32), "Fahrenheit", ((x - 32)*(5/9) + 273.15), "Kelvin");

let celsiusUser = parseInt(prompt("Digite o valor em graus Celsius que você quer converter"));
console.log ("O valor digitado em ºF e K é igual a:", y = ((celsiusUser)*(9/5) + 32), "Fahrenheit", ((x - 32)*(5/9) + 273.15), "Kelvin");

/* DESAFIO 2 */

console.log("O valor a ser pago por uma consumação de 280 quilowatt-hora é de:", w = (280*0.05), "reais");
console.log("O valor a ser pago com 15% de desconto é igual a", (w-(w*0.15)), "reais");

/* DESAFIO 3 */

console.log("20lb equivalem a",(20*0.453592),"kg");
console.log("10.5oz equivalem a",(10.5*0.0283495),"kg");
console.log("100mi equivalem a",(100*1609.34),"m");
console.log("50ft equivalem a",(50*0.3048),"m");
console.log("103.56gal equivalem a",(103.56*3.78541),"l");
console.log("450 xic equivalem a",(450*0.24),"l");

let unidadeUser = parseInt(prompt("Digite o valor que você quer converter de libra para quilograma"));
console.log ("O valor digitado em libras para quilogramas fica:", (unidadeUser*0.453592),"kg");
