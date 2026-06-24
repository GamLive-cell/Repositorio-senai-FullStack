// Lista de Arrays

let alunos = ["Gabriel", "Pedro", "Gabriela", "Mariana", "Geovana"]
let notas = [6, 8.4, 9, 7.7, 5]
let frequencia = [60, 80, 75, 55, 90]

for (let i = 0; i < alunos.length; i++) {
    console.log("Posição:", i, alunos[i], ' Notas:', notas[i], "Frequencia:", frequencia[i],);

}
console.log("================================")
// notas da turma

let somaNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i]
}

let media = somaNotas / notas.length
console.log("Média da Turma:", media.toFixed(2));
console.log("================================")


//Situação dos alunos.

for (let i = 0; i < alunos.length; i++) {

    if (notas[i] >= 7 && frequencia[i] >= 75) {
        console.log(alunos[i], "- Aprovado");
    } else if (notas[i] >= 5 && notas[i] < 7 && frequencia[i] >= 75) {
        console.log(alunos[i], "- Recuperação");
    } else {
        console.log(alunos[i], "- Reprovado");
    }

}
console.log("================================")
// if botino (SWITCH CASE)

let opcao = 3 // 1, 2, 3 e 4. 

switch (opcao) {
    case 1:
        console.log("=== LISTA DE ALUNOS ===");

        for (let i = 0; i < alunos.length; i++) {
            console.log(
                "Posição:", i,
                "| Nome:", alunos[i],
                "| Nota:", notas[i],
                "| Frequência:", frequencia[i] + "%"
            );
        }
        break;

    case 2:
        console.log("=== MÉDIA DA TURMA ===");

        let somaNotas = 0;

        for (let i = 0; i < notas.length; i++) {
            somaNotas += notas[i];
        }

        let media = somaNotas / notas.length;
        console.log("Média da turma:", media.toFixed(2));
        break;

    case 3:
        console.log("=== SITUAÇÃO DOS ALUNOS ===");

        for (let i = 0; i < alunos.length; i++) {
            if (notas[i] >= 7 && frequencia[i] >= 75) {
                console.log(alunos[i], "- Aprovado");
            } else if (notas[i] >= 5 && frequencia[i] >= 75) {
                console.log(alunos[i], "- Recuperação");
            } else {
                console.log(alunos[i], "- Reprovado");
            }
        }
        break;

    case 4:
        console.log("=== RESUMO TOTAL DA TURMA ===");

        // Lista de alunos
        for (let i = 0; i < alunos.length; i++) {
            console.log(
                "Nome:", alunos[i],
                "| Nota:", notas[i],
                "| Frequência:", frequencia[i] + "%"
            );
        }

        // Média da turma
        let soma = 0;

        for (let i = 0; i < notas.length; i++) {
            soma += notas[i];
        }

        let mediaTurma = soma / notas.length;

        console.log("\nMédia da turma:", mediaTurma.toFixed(2));

        // Situação dos alunos
        console.log("\nSituação:");

        for (let i = 0; i < alunos.length; i++) {
            if (notas[i] >= 7 && frequencia[i] >= 75) {
                console.log(alunos[i], "- Aprovado");
            } else if (notas[i] >= 5 && frequencia[i] >= 75) {
                console.log(alunos[i], "- Recuperação");
            } else {
                console.log(alunos[i], "- Reprovado");
            }
        }
        break;

    default:
        console.log("Opção inválida");
}