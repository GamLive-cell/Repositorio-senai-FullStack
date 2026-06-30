class aluno {
    nome: string;
    nota1: number;
    nota2: number;
    
    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

        calcularMedia(): number {
            return (this.nota1 + this.nota2) / 2;
        }

    verificarSituacao(): string {
        if (this.calcularMedia() >=6) {
            return "Aluno Aprovado!";
        } else {
            return "Aluno Reprovado!";
        }
  }

exibirInformacoes(): void {
    console.log("Nome:", this.nome);
    console.log("Media:", this.calcularMedia());
    console.log("Situação:", this.verificarSituacao());
    console.log("===========================");
}

}
//Criando Alunos

let aluno1 = new aluno("João", 8, 7);
let aluno2 = new aluno("Maria", 5, 6);
let aluno3 = new aluno("Pedro", 4, 3);

aluno1.exibirInformacoes();
aluno2.exibirInformacoes();
aluno3.exibirInformacoes();