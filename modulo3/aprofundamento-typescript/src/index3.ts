type post = {
    autor: string,
    texto: string
} 

const posts:post[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
]

//b) A função recebe dois parâmetros, primeiro é um post (um objeto que possui um autor e um texto) e segundo é uma string. 
// A sua saida vai ser o nome do autor informado e o texto dele.

function buscarPostsPorAutor(posts: post[], autorInformado: string) {
    return posts.filter((post) => {
        return post.autor === autorInformado
    })
}

console.log(buscarPostsPorAutor(posts,"Alvo Dumbledore"))