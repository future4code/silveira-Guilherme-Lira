// Exercicio 2

const operation = process.argv[2]

const num1 = Number(process.argv[3])

const num2 = Number(process.argv[4])

switch(operation){
    case "add":
    console.log("A soma dos números digitados é:", (num1+num2));
    break;
    case "sub":
    console.log("A subtração dos números digitados é:", (num1-num2));
    break;
    case "mult":
    console.log("A multiplicação dos números digitados é:", (num1*num2));
    break;
    case "div":
    console.log("A divisão dos números digitados é:", (num1/num2));
    break;
}