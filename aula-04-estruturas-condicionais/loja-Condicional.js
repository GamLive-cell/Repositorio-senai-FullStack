let valorCompra = 120;
let temCupom = true;
let formaPagamento = "pix"; // pix, credito ou boleto


let valorOriginal = valorCompra;
let desconto = 0;
let frete =0;
let totalPagar = 0;

if (temCupom) {
    desconto = valorCompra * 0.10;
    valorCompra = valorCompra - desconto;
}


switch (formaPagamento) {

     case "pix":
        console.log("Pagamento via PIX");
        break;


        case "credito":
        console.log("Pagamento via Crédito");
        break;


case "boleto":
        console.log("Pagamento via Boleto");
        break;


        default:
            console.log("Forma de pagamento Inválida");
            break;
}

// calcular frete

if (valorCompra >= 100) {
    frete = 0;
} else {
    frete = 15;
}

//total 
totalPagar = valorCompra + frete;

console.log("Valor original: R$ " + valorOriginal);
console.log("Desconto: R$ " + desconto);
console.log("Frete: R$ " + frete);
console.log("Total a pagar: R$ " + totalPagar);