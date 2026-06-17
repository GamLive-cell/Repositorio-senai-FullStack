let nome = "Mario";
let nota1 = 7;
let nota2 = 9;
let frequencia = 82;
let atividadeEntregues = true;
let estaBloqueado = false;

//media
let media = (nota1 + nota2) / 2;

//situação
let situacao;

if (estaBloqueado) {
    situacao = "Reprovado";
} else if (media >=6 && frequencia >= 60) {
    situacao = "Aprovado por destaque";
} else if (media >=6 && frequencia >= 75 && atividadeEntregues) {
    situacao = "Aprovado";
} else {
    situacao = "Reprovado";
}

// Exibição
console.log("Nome:", nome);
console.log("Media:", media);
console.log("Frequencia:", frequencia);
console.log("Atividades entregues:", atividadeEntregues);
console.log("Situação final:", situacao);