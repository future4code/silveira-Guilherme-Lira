function numberOperation(num1:number,num2:number):number[]{
    const sum:number = (num1+num2)
    const sub:number = (num1-num2)
    const mult:number = (num1*num2)
    const div:number = (num1/num2)

    return [sum,sub,mult,div]
}

console.log(numberOperation(10,5))