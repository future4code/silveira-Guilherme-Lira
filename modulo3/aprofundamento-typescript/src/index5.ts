type consulta = {
    nome: string, idade: number, dataDaConsulta: string}

const consultas : consulta[] =[
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" },
    { nome: "Aline", idade: 25, dataDaConsulta: "04/05/2011" }
]

function SortArray(nome1:consulta, nome2:consulta){
    if (nome1.nome < nome2.nome) {return -1;}
    if (nome1.nome > nome2.nome) {return 1;}
}

var organizedConsultas = consultas.sort(SortArray);
console.log(organizedConsultas);