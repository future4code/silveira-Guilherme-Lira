// Exercicio 3

const list = ["Tomar banho", "Passear com o cachorro"]

const task = process.argv[2]
list.push(task)

console.log("Tarefa adicionada com sucesso!")
console.log("tarefas:", list)