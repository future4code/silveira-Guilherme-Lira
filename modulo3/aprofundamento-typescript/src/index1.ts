// Exercício 1
// a) Se tentarmos atribuir um número a essa variável, o programa não vai permitir pois, como definimos que ela vai receber uma string
// o código não permite que um número (ou uma variável que não seja string) seja atribuido a essa variável.
const minhaString:string = "1"

// b) 
let meuNumer: number | string  //(Podemos usar o | para dizer que ele pode receber mais de um tipo)

// d)
enum corFavorita {
    VIOLETA = "violeta",
    ANIL = "anil",
    AZUL = "azul",
    VERDE = "verde",
    AMARELO = "amarelo",
    LARANJA = "laranja",
    VERMELHO = "vermelho"
}

// c)
let pessoa: { nome: string, idade: number, corFavorita: string}

type pessoa = { nome: string, idade: number, corFavorita: string}

const pessoa1: pessoa = {nome: "Murilo", idade: 15, corFavorita: corFavorita.AZUL}
const pessoa2: pessoa = {nome: "Jana", idade: 18, corFavorita: corFavorita.LARANJA}
const pessoa3: pessoa = {nome: "Danilo", idade: 20, corFavorita: corFavorita.VERDE}

