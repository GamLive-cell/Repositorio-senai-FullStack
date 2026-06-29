function verificarMarioridade(idade: number): string {
    if (idade >=18) {
    return "Maior de idade";
    } else {
        return "Menor de idade";
    }
} 


console.log(verificarMarioridade(20));
console.log(verificarMarioridade(15));