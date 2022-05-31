function reverse(text:string):string{
    var splitString:string[] = text.split(""); // transforma string em um array
 
    var reverseArray:string[] = splitString.reverse(); // reverte a ordem do array
 
    var joinArray:string = reverseArray.join(""); // transforma o array em uma string
    
    return `O texto original foi: ${text}, a versão invertida dele fica: ${joinArray}` 
}

console.log(reverse("abcd")) // O texto original foi: abcd, a versão invertida dele fica: dcba