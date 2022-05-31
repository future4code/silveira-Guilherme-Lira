function checaAnoBissexto(ano:number):string {
    const cond1:boolean = ano % 400 === 0
    const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)

    if (cond1 || cond2){
        return 'O ano é Bissexto'
    } else {
        return 'O ano é não Bissexto'
    }
}

console.log(checaAnoBissexto(2024)) //O ano é Bissexto
console.log(checaAnoBissexto(2023)) //O ano é não Bissexto