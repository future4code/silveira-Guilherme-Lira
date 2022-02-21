// QUESTÕES DE INTERPRETAÇÃO DE CÓDIGO

// QUESTÃO 1
// A. No código será impresso o nome "Matheus Nachtergaele", "Virginia Cavendish" e "Canal: Globo, horário: 14h"

// QUESTÃO 2
// A. Inicialmente todas as informações no objeto cachorro, depois, será impresso novamente o objeto cachorro mas o nome será trocado para "juba"
// e por último teremos o mesmo resultado que foi impresso anteriormente mas dessa vez trocando todos os "a" por "o". (Ou seja, o nome Juca vai vira juco)

// B. A sintase de três pontos (operador spread) faz uma cópia do objeto, assim podemos fazer alterações nele sem alterar o original.

// QUESTÃO 3
// A e B. Será impresso o valor de "Backender" no caso, false. E no próximo teremos undefined, já que ele quer o valor de uma variavel que não existe.


// QUESTÃO DE ESCRITA DE CÓDIGO

// QUESTÃO 1

const cachorro = {
    nome: "Nina",
    apelidos: ["Noca", "Bebe", "Ninha"]
}

function imprimir(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

imprimir(cachorro);

const cachorro1 = {...cachorro, apelidos: ["Nonoca", "Filhotinho", "Lindinha"]}

imprimir(cachorro1);

// QUESTÃO 2

const pessoa1 = {
    nome: "Fulano",
    idade: 30,
    profissao: "Atendente"
}

const pessoa2 = {
    nome: "Cicrano",
    idade: 28,
    profissao: "Advogado"
}

function leitura(objeto){
    resultado = [objeto.nome, objeto.nome.length, objeto.idade, objeto. profissao, objeto.profissao.length]
    console.log(resultado)
}

leitura(pessoa1)
leitura(pessoa2)

// QUESTÃO 3

const global = carrinho = []

const fruta1 = {
    nome: "Maça",
    disponibilidade: true
}

const fruta2 = {
    nome: "Laranja",
    disponibilidade: true
}

const fruta3 = {
    nome: "Limão",
    disponibilidade: true
}

function adicionar(fruta){
    global.push(fruta)
}

adicionar(fruta1)
adicionar(fruta2)
adicionar(fruta3)

console.log(global)

// DESAFIO 1

function criarUsuario(){
    nome = prompt("Qual o seu nome?"),
    idade = prompt("Qual sua idade?"),
    profissao = prompt("Qual sua profissao?")

    const usuario = {
        nome,
        idade,
        profissao
    }
    console.log(usuario)
}
criarUsuario()

// DESAFIO 2

const filme1 = {
    nome: "Blabla",
    ano: 1960
}

const filme2 = {
    nome: "Bleble",
    ano: 1980
}

function exibir(objeto1, objeto2){
    console.log("O primeiro filme foi lançado antes do segundo?", objeto1.ano < objeto2.ano)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", objeto1.ano == objeto2.ano)
}

exibir(filme1,filme2)

// DESAFIO 3

const global = carrinho = []

const fruta1 = {
    nome: "Maça",
    disponibilidade: true
}

const fruta2 = {
    nome: "Laranja",
    disponibilidade: true
}

const fruta3 = {
    nome: "Limão",
    disponibilidade: true
}

function adicionar(fruta){
    global.push(fruta)
}

function inverter(fruta){
    const inverte = {...fruta, disponibilidade: false}
    console.log(inverte);
}

inverter(fruta1)