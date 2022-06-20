// CÓDIGO DO EXERCÍCIO 1

type TransactionT = {
    description: string,
    value: number,
    date: string
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: TransactionT[] = [];

    constructor(cpf: string, name: string, age: number){
        this.cpf = cpf
        this.name = name
        this.age = age
    }    
    public getCpf(): void {
    console.log(this.cpf)
    }
    public getName(): void {
        console.log(this.name)
    }
    public getAge(): void {
    console.log(this.age)
    }
    public getBalance(): void {
    console.log(this.balance)
    }
    public getTransactions(): void {
    console.log(this.transactions)
    }
    public pushTransactions(newTransaction): void {
    this.transactions.push(newTransaction)
    }
    public getAll(): void {
        console.log(this.cpf, this.name, this.age, this.balance, this.transactions)   
    }
}

// a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
// O construtor executa ações que devem ser executadas ao se criar uma instância de classe, declaramos ela com a função constructor(){
// E chamamos ela utilizando o "this."

// b) "Chamando o construtor da classe UserAccount" só foi chamada uma vez.

const murilo = new UserAccount("12345678910", "Murilo", 15)

// c) Utilizando os setters e getters 

// Exercício 2

class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(newDescription: string, newValue: number, newDate: string) {
        this.description = newDescription
        this.value = newValue
        this.date = newDate
    }
    public getDescription(): void {
        console.log(this.description)
    }
    public getValue(): void {
        console.log(this.value)
    }
    public getDate(): void {
        console.log(this.date)
    }
}

const transactionTest = new Transaction("só testando", 100, "20/06/2022")

murilo.pushTransactions(transactionTest)
console.log(murilo.getTransactions())

// EXERCICIO 3

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

    public pushTransactions(newUser): void {
    this.accounts.push(newUser)
    }
    public getAccounts(): void {
    console.log(this.accounts)
    }
}
