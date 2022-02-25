/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

if (confirm("Quer iniciar uma nova rodada?")){

   const jogador1 = comprarCarta()
   const jogador2 = comprarCarta()
   const jogadorTotal = jogador1.valor + jogador2.valor;

   const comp1 = comprarCarta()
   const comp2 = comprarCarta()
   const compTotal = comp1.valor + comp2.valor

   console.log(`Usuário - cartas: ${jogador1.texto} ${jogador2.texto} - pontuação ${jogadorTotal}`)
   console.log(`Computador - cartas: ${comp1.texto} ${comp2.texto} - pontuação ${compTotal}`)

   if (jogadorTotal > compTotal){
      console.log("O usuário ganhou!")
   } else if (jogadorTotal < compTotal){
      console.log("O computador ganhou!")
   } else if (jogadorTotal == compTotal) {"Empate!"}

} else {
   console.log("O jogo acabou")
}
