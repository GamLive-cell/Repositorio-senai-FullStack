let idade = 18;
let temCadastro = true;
let bloqueio = false;

if (bloqueio) {
    console.log("Acesso negado: Usuário Bloqueado.");
} else if (!temCadastro) {
    console.log("Acesso negado: Cadastro Necessário.");
} else if (idade < 18) {
 console.log("Acesso negado: Apenas maiores de Idade.");
} else {
    console.log("Acesso Liberado!!")
}