function calcularDesconto(preco: number, percentual: number): number{
    return preco - (preco * percentual /100);
}

console.log(calcularDesconto(100, 10));
console.log(calcularDesconto(250, 20));
console.log(calcularDesconto(150, 15));