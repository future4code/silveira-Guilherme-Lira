// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort(function(a,b){return a-b});
  return array;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
var newarray = [];
    for (i=0; i<array.length; i++){
        if (array[i]%2===0){
            newarray.push(array[i]);
        }
    }
    return newarray;
}
// var Pares = array.filter(x => x%2 ==0)
// return Pares;
// }

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    var Pares = array.filter(x => x%2==0);
    for (i=0;i<Pares.length;i++){
        Pares[i] = Pares[i]*Pares[i]
    }
    return Pares;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
let maior = 0;
  for (i=0; i<array.length; i++){
      if (maior < array[i]){
          maior = array[i];
      }
  }
  return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maiorNumero;
    let menorNumero;

    if (num1<num2){
        maiorNumero = num2;
        menorNumero = num1} 
    else {
        maiorNumero = num1; 
        menorNumero = num2}   

    maiorDivisivelPorMenor = (maiorNumero%menorNumero==0);
    diferenca = maiorNumero - menorNumero;

    var objeto = {maiorNumero, maiorDivisivelPorMenor, diferenca};

    return objeto;
}

// EXERCÍCIO 08
let n;
function retornaNPrimeirosPares(n) {
   let array = []
   for (i=0; i<n;i++){
    array.push(i*2);
    }
return array;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoA == ladoC){
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles"
    } else if (ladoA !== ladoB !== ladoC) { 
        return "Escaleno"}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11

// filme = {nome, ano, diretor, atores}
function retornaChamadaDeFilme(filme) {
let frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
return frase;
}

// EXERCÍCIO 12

// pessoa = {nome, idade, email, endereco}
function retornaPessoaAnonimizada(pessoa) {
let anoPessoa = {...pessoa, nome: "ANÔNIMO"}
return anoPessoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
const pessoasAut = pessoas.filter(function(user){
    return user.idade >= 15 && user.idade < 60 && user.altura > 1.5
})
return pessoasAut
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNAut = pessoas.filter(function(user){
        return user.altura < 1.5 || user.idade < 15 || user.idade > 60
    })
    return pessoasNAut
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}