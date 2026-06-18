let idade = 17;
let temCadastro = true;
let temResponsavel = true;
let bloqueio = false;

if (bloqueio) {
    console.log("Acesso negado: usuário bloqueado.");
} else if (idade >= 18 && temCadastro) {
    console.log("Acesso Liberado.");
} else if (idade < 18 && temCadastro && temResponsavel) {
    console.log("Acesso liberado com responsável.");
} else if (!temCadastro) {
    console.log("Acesso negado: usuário não cadastrado.");
} else {
    console.log("Acesso negado.");
}
   