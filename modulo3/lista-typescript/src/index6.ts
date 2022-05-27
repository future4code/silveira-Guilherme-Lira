const dadosBanco = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

type cliente = {cliente: string, saldoTotal: number, debitos: number[]}

function emprestimo(lista: cliente[]){
    let debitoTotal:number
    let novoSaldo:number

    const novoBanco = lista.map((dinheiro) => {
        for (let i=0; i<dinheiro.debitos.length; i++){
            debitoTotal =+ dinheiro.debitos[i]
        }
        return novoSaldo = dinheiro.saldoTotal - debitoTotal
    })

    return novoBanco
}

console.log(emprestimo(dadosBanco))