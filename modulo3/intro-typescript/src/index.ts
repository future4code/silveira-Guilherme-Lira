function checaTriangulo(ladoA:number, ladoB:number, ladoC:number):string {
    if (ladoA !== ladoB && ladoB !== ladoC) {
      return "Escaleno";
    } else if (ladoA === ladoB && ladoB === ladoC) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

console.log(checaTriangulo(2,3,5))