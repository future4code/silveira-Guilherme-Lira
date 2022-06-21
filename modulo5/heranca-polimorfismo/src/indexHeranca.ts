class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public introduceYourself(): string {
        return `Olá, bom dia!`
    }
    public introduceYourself2(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }
}

/* EXERÍCIO 1
 A) Não será possível imprimir a senha pois ela está como "private", ou seja, só pode ser acessado diretamente na classe. 
 B) A mensagem só é exibida uma vez "Chamando o construtor da classe User"
const danilo = new User("1", "Danilo@gmail.com", "Danilo", "1234") */

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

/* EXERÍCIO 2
A e B) Cada frase foi impressa uma vez só, como a classe Customer é filha dao User, a frase do User também é impressa quando uma instância em Customer é criada.*/
const danilo = new Customer("1", "Danilo@gmail.com", "Danilo", "1234","Nubank") 

/* EXERÍCIO 3 
A) Não é possível imprimir a senha pois não existe um método (um getter) para exibir a senha e ela é uma informação privada.
console.log("Dados de Danilo")
console.log(danilo.getId())
console.log(danilo.getName())
console.log(danilo.getEmail())
console.log(danilo.getCreditCard())
console.log(danilo.purchaseTotal) */

/* EXERÍCIO 4 
console.log(danilo.introduceYourself())*/

/* EXERÍCIO 5 
console.log(danilo.introduceYourself2())*/