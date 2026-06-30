let produto = {
nome: "Teclado",
preco: 70,
quantidade: 5,
calcularTotal: function() {
return this.preco * this.quantidade;
}
};
console.log(produto.calcularTotal());