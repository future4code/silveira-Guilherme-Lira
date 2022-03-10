const filme = {
    diretor:"Guel Arraes",
    titutlo:"O auto da compadecida",
    lancamento:2000,
    elenco:['Matheus', 'Selton', 'Marco', 'Denise', 'Fernada'],
    visto:true
}

filme.personagens = ['João', 'Chicó', 'Capitão', 'Dora', 'Nossa Senhora']
console.log(`O ator ${filme.elenco[0]} fez o personagem ${filme.personagens[0]}`);
filme.elenco[0] = "Xuxa"

consoleg.log(filme.diretor);

///

const pessoas = {
    nome: "Leandro Roberto",
    idade: 38,
    genero_musical: "MPB"
}

console.log(`O nome da pessoas é ${pessoas.nome}, ela tem ${pessoas.idade} e gosta muito de ${pessoas.genero_musical}.`);

/////

const paiDePet = {
    nome: "Caio Teixeira",
    pet: {
        nome: "Lupin",
        raca: {
            r1: "Salsicha",
            r2: "Pincher"
        },
        idade: 1
    }
}
console.log("Direto", paiDePet.pet.raca.r1)

//

const curso = { 
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
}

// curso -> objeto ; nome/linguagens -> chave ; Noturno/JS/CSS/HTML -> Valor

const primeiraLinguagem = curso.linguagens[0]
console.log (primeiraLinguagem)

//

const usuario = {
    nome: 'fulano',
    idade: 25,
    email: 'blabla'
}
console.log(usuario)

const novoUsuario = {... usuario} // função spread - Criando uma copia do objeto anterior
console.log(novoUsuario)

const novoUsuario2 = {... usuario, nome: "João", sobrenome: "Alves"}
console.log(novoUsuario2)

///

const minhaLista = [1,2,3]
const novaLista = [...minhaLista]
console.log(novaLista)

//

const pessoa1 = {
    nome: "Leandro Roberto",
    idade: 38,
    genero_musical: "MPB"
}

function criaNovaPessoa (objeto){
    const novaPessoa = {...objeto, comidasFavoritas:["Pizza", "Poke", "Churrasco"], 
    melhorAmigo:{
        nome: "Rogrigo", 
        idade: 40}
    }

    consoleg.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidasFavoritas[0]},${pessoa.comidasFavoritas[1]} e ${pessoa.comidasFavoritas[2]}.
    Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos`)
}
criarNovaPessoa(pessoa1)



