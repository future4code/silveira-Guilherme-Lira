type filmes = {
    nome: string,
    ano: number,
    genero: GENERO,
    pontuacao: string
}

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function filmeList(nome: string, ano: number, genero: GENERO, pontuacao?: string):filmes{
    return {nome, ano, genero, pontuacao}
}

console.log(filmeList("Harry", 1999, GENERO.ACAO)) // { nome: 'Harry', ano: 1999, genero: 'ação', pontuacao: undefined }
console.log(filmeList("Harry", 1999, GENERO.ACAO, "RottenTomato")) // { nome: 'Harry', ano: 1999, genero: 'ação', pontuacao: 'RottenTomato' }
