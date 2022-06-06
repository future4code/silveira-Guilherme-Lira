function birthDay(nome: string, idade: string):string{
    const dates = idade.split('/')
    return `Olá me chamo ${nome}, nasci no dia ${dates[0]} do mês de ${dates[1]} do ano de ${dates[2]}`
}

const nome: string = "Danilo"
const data: string = "24/04/1993"

console.log(birthDay(nome,data)) // Olá me chamo Danilo, nasci no dia 24 do mês de 04 do ano de 1993