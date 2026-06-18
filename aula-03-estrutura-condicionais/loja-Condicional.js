let valorCompra = 150;
let temCupom = true;
let isEstudante = false;
let formaPagamento = "pix";

let desconto = 0;
let frete = 0;
let valorFinal = valorCompra;

if (temCupom || isEstudante) {
    desconto += valorCompra * 0.10;
}

valorFinal -= desconto;

switch (formaPagamento) {
case "pix":
 desconto += valorFinal * 0.05;
valorFinal -= valorFinal *0.05;
brack;


case "boleto":
 desconto += valorFinal * 0.02;
valorFinal -= valorFinal * 0.02;
break;


 case "credito":
  break;

default:
 console.log("Forma de pagamento Inválida.");

  }

  if (valorFinal >= 200) {
     frete = 0;
  } else {
    frete = 20;

  }

  let totalPagar = valorFinal + frete;

  console.log("Valor original: R$", valorCompra);
  console.log("Desconto aplicado: R$", desc)
            