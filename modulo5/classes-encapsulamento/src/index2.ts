//exemplos

//DECLARANDO CLASSES
class Pessoa {
    nome: string
    altura: number
    constructor(novoNome: string, novaAltura: number){
        this.nome = novoNome
        this.altura = novaAltura
    }
    // MÉTODO OU COMPORTAMENTO
    codar(){ 
        console.log(this.nome + "Codei em POO! Uhu!")
    }
}

const erica = new Pessoa("Erica Inacia", 1.70)
console.log(`${erica.nome} tem ${erica.altura} de altura`)

//instância da classe ou um objeto

//tipagem com classe
const helen: Pessoa = {
    nome: "Helen Carolini",
    altura: 1.80,
    codar: () => {console.log("Helen também sabe codar POO! Uhu!")}
}


//EXERCICIO 1 =============================================
//Transforme o type estudante em uma classe Estudante:

type pessoal = {
    nome: string,
    idade: number
}

class Pessoal {
    nome: string
    idade: number
    constructor(novoNome: string, novaIdade: number){
        this.nome = novoNome
        this.idade = novaIdade
    }
}

const indio:Pessoal = {nome: "", idade: 20}



//EXERCICIO 2 =============================================
class Estudante {
    //1 - Torne as propriedades da classe Estudantes privadas. 
   private nome: string
   private matricula: number

    constructor(novoNome: string, novaMatricula: number){
        this.nome = novoNome
        this.matricula = novaMatricula
    }

    //2 - Adicione os getters para pegar o nome ou matrícula do estudante  e setters para alterar a matrícula do estudante.
    public pegarNome(): void{
        console.log(this.nome)
    }
    public pegarMatricula(): void{
        console.log(this.matricula)
    }
    public alterarMatricula(novaMatricula:number): void{
        this.matricula = novaMatricula
    }
}

//3 - Crie uma instância da classe Estudante
const maria = new Estudante("Maria Eduarda", 252598)
// maria.nome -> Não funciona pois nome é private, precisamos criar um método para pegar esse valor.

//4 - imprima o nome e matrícula do estudante criado.
maria.pegarNome()
maria.alterarMatricula(525252)
maria.pegarMatricula()
