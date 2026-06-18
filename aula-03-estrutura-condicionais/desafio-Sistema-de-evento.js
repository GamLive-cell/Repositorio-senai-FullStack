let idade = 16;
let temIngreso = true;
let  ehAlunoSenai = true;
let horaChegada = 19;
let vagasDisponiveis = 5;
let codigoIngreso = "PADRAO" // VIP, PADRAO, CONVIDADO

if (idade < 14) {
    console.log("Acesso negado: idade mínima não atendida.");
} else if (!temIngreso) {
  console.log("Acesso negado: Ingresso não apresentado.");  
} else if (vagasDisponiveis <= 0) {
    consolo.log("Acesso negado: Vagas esgotadas.");
} else if (horaChegada >= 20) {
    consolo.log("Acesso negado: Horário de chegada fora do permitido.");
} else {
console.log("Acesso Permitido: Bem-vindo ao EVENTO!");
}

switch (codigoIngreso) {
    case "VIP":
        console.log("Acesso à área Vip");
        break;

        case "PADRAO":
            console.log("Acesso à área padrão");
            break;

            case "CONVIDADO":
                console.log("Acesso à área de convidados");
                break;

                default: 
                console.log("Código de ingresso invalido.");
}


console.log("===== RESUMO =====");
console.log("Idade:", idade);
console.log("Tipo de Ingreso", temIngreso);