function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number):boolean {

    const idade:number = (anoAtual - anoNascimento)
    const tempoCarteira:number = (anoAtual - anoEmissao)

    if (idade <= 20 && tempoCarteira >= 5 || idade > 20 && idade <= 50 && tempoCarteira >= 10 || idade > 50 && tempoCarteira >= 15){
        return true
    } else {
        return false
    }
}

console.log(checaRenovacaoRG(2022,1992,2017)) // Não precisa renovar
console.log(checaRenovacaoRG(2022,2002,2017)) // A carteira precisa ser renovada 