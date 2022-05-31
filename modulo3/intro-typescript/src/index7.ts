function changeRNA(dna:string):string {
    var splitString:string[] = dna.split("");

    for (let i=0; i<splitString.length; i++){
        if(splitString[i] === 'A'){
        splitString[i] = 'U'
    }else if(splitString[i] === 'T'){
        splitString[i] = 'A'
    }else if(splitString[i] === 'C'){
        splitString[i] = 'G'
    }else if(splitString[i] === 'G'){
        splitString[i] = 'C'
}}

    var joinArray:string = splitString.join("");
    return joinArray
}

console.log(changeRNA("ATTGCTGCGCATTAACGACGCGTA")) // UAACGACGCGUAAUUGCUGCGCAU