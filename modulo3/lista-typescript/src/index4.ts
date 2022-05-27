enum SETOR {
    MARKETINNG = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "funanceiro"
}

const colaboradores = [
	{ nome: "Marcos", salário: 2500, setor: SETOR.MARKETINNG, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETOR.MARKETINNG, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETOR.MARKETINNG, presencial: true }
]

type colaborador = {nome: string, salário: number, setor: SETOR, presencial: boolean}

function notHomeOffice(funcionarios: colaborador[]):colaborador[]{
    return funcionarios.filter((funci) => {
        return funci.presencial == true
    })
}

console.log(notHomeOffice(colaboradores)) // 