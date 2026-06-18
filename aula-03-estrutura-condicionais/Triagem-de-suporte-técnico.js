let prioridade = 2;
let sistemaForaDoAr = false;
let tempoEsperaMin = 35;
let categoria = "internet";

if (sistemaForaDoAr || prioridade === 3) {
    console.log("Classificação: CRÍtico");
} else if (tempoEsperaMin > 30  && prioridade === 2){
console.log("Classificação: ALTO"); 
 } else if (prioridade === 1) {
    console.log("Classificação: NORMAL");
 } else {
    console.log("Classificação: EM ANALISE"); 
 }

 switch (categoria) {
    case "login":
    console.log("Redefinir senha e validar usuário.");
    break;

    case "internet":
        console.log("Verificar cabo, WI-FI e roteador.");
        break;

        case "computador":
        console.log("Reiniciar máquina e verificar atualizações.");
        break;

        case "outro":
            console.log("Coletar mais informações.");
            break;

            default:
                console.log("Categoria Inválida.");
 }