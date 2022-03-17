```javascript
function calculaNota(ex, p1, p2) {
    let media = ((ex*1) + (p1*2) + (p2*3))/6;
    if (media>=9){
    return 'A';}
    else if (media<8.99 && media>=7.5){
    return 'B';}
    else if (media<7.499 && media>6){
    return 'C';}
    else if (media<5.99) {
    return 'D';}
}
```