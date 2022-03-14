```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let n=0;
    for (i=0; i<arrayDeNumeros.length; i++){
        if (arrayDeNumeros[i] === numeroEscolhido){n++}
    }
        if (n === 0){
            return "Número não encontrado"
        } else {
            return `O número ${numeroEscolhido} aparece ${n}x`
        }
}