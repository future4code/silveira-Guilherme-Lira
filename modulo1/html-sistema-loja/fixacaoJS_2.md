```javascript
function calculaPrecoTotal(quantidade) {
  if (quantidade < 12){
    let preço = quantidade*(1.30)
    return preço
  } else {
    let preço = quantidade*(1)
    return preço
  }
}
```