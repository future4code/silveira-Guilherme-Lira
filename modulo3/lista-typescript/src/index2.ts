function findType(texto:any){
    return typeof texto
}

console.log(findType("texto")) // string
console.log(findType(14)) // nummber
console.log(findType(true)) // boolean