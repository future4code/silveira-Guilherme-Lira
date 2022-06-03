export type Transaction = {
    value: number,
    date: Date,
    description: string
}

export type Cliente = {
    name: string, 
    cpf: string, 
    birth: Date,
    balance: number,
    bankStatement: Array<Transaction>
}

export let Clientes: Cliente[] = [
    {
        name: "Alice",
        cpf: "111-111-111-11",
        birth: new Date("1991-01-01"),
        balance: 100,
        bankStatement: [{
            value: 50,
            date: new Date("2999-01-01"),
            description: "Compras no ifood"
        }]
    },
    {
        name: "Bruno",
        cpf: "222-222-222-22",
        birth: new Date("1999-02-02"),
        balance: 1000,
        bankStatement: [
        {
            value: 50,
            date: new Date("2999-02-02"),
            description: "Compras no ifood"
        }
    ]}
    ]