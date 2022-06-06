type aluno = {name: string, email: string, role: string}

const alunos =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function searchAdmin(pessoas: aluno[]):string[]{
    let emailList: string[]

    return pessoas.filter((lista) => {    
        return lista.role == "admin"
    })
    .map((pessoa) => {
       return pessoa.email
    })
}

console.log(searchAdmin(alunos)) // [ 'ademir@email.com', 'carina@email.com'