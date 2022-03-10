const comparaNumeros = (num1,num2) => {
    if (num1 == num2){
        return "Sucesso, os numeros são iguais."
    }
    else {
        return "Os números não são iguais"
    }
}

const a = Number(prompt("Escreva um número"))
const b = Number(prompt("Escreva um número"))

const result = comparaNumeros(a,b)
console.log(result)

////

const comparaNumeros2 = function (num1,num2){
    if(num1 > num2){
        return (`${num1} é maior do que ${num2}`)
    }else if(num1 < num2){
        return (`${num1} é menor do que ${num2}`)
    }else{
        return `números são iguais`
    }
}

const result2 = comparaNumeros2(a,b)
console.log(result2)

/////////////////////////


function mostraTipo(pokemon) {
    switch (pokemon){
        case "Bulbasauro":
            console.log("Planta e Venenoso")
            break;
        case "Charmander":
            console.log("Fogo")
            break;
        case "Squirtle":
            console.log("Água")
            break
        default:
            console.log("Pokemon não encontrado")
    }
}

const pokemon = prompt("Escolha um pokemon")
mostraTipo(pokemon);

////////////////

function podeSeInscrever(medioConcluido, idade, cursandoFaculdade){
    if(medioConcluido && idade>= 18 && !cursandoFaculdade){
        return "Você pode se inscrever"
    } else{
        return "Você não pode se inscrever"
    }
}

const medioConcluido = prompt("Concluiu? (sim/não)") === "sim"
const idade = Number(prompt("Digite a idade"))
const cursandoFaculdade = prompt("Faz faculdade? (sim/não)") === "sim"

const result3 = podeSeInscrever(medioConcluido,idade,cursandoFaculdade)
console.log(result3)