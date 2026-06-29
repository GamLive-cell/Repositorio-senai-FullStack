// Calcular Media 
function calcularMedia(nota1: number, nota2: number, nota3: number): number {
    return (nota1 + nota2 + nota3) / 3;
}

// Verificar situação atual 

function verificarSituacao(media: number): string {
    if (media >= 7) {
        return "Aprovado";
    } else if (media <= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

//  Exibir Boletim

function exibirBoletim(nome: string, media: number, situacao: string): void {
    console.log("Aluno: " + nome);
    console.log("Media: " + media);
    console.log("Situacao: " + situacao);
}

let media = calcularMedia(8, 6, 7);
let situacao = verificarSituacao(media);

exibirBoletim("Carlos", media, situacao);