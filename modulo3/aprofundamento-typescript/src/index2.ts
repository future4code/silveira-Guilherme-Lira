// Exercício 2
// A) A entrada desta função é um array de números, e a sua saída é um objeto("estatisticas") que retorna o maior e menor número e a média deles.

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados:number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type amostra = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => {
        maior: number,
        menor: number,
        media: number
    }
}