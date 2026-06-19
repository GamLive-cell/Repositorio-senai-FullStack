## 1. O que é uma estrutura condicional em programação?
É uma forma de o programa tomar decisões. ex: se tiver dinheiro sobrando compro um lanche se não tiver não compro.

## 2. Qual é a diferença entre usar apenas if e usar if/else?
Com if, o código faz algo apenas quando a condição é verdadeira.
Com if/else, existe uma ação para quando a condição é verdadeira e outra para quando ela é falsa.

## 3.Quando usamos else if? Crie um exemplo com três possibilidades.
Usamos else if quando existem várias opções possíveis.

Exemplo:

let nota = 8;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

## 4. O que significa uma condição retornar true ou false?
Significa que o programa verificou uma condição e obteve uma resposta lógica.

true = verdadeiro.
false = falso.

## 5.Qual é a diferença entre == e === em JavaScript?
O == compara apenas os valores. Já o === compara os valores e também o tipo dos dados.

Exemplo: O número 5 e o texto "5" têm o mesmo valor, mas são tipos diferentes. Por isso, === considera que eles não são iguais.
## 6. Para que servem os operadores &&, || e !?
&& é usado quando todas as condições precisam ser verdadeiras.
|| é usado quando pelo menos uma condição precisa ser verdadeira.
! serve para inverter o resultado de uma condição.

## 7.O que é switch case? Em que situação ele pode ajudar?
É uma estrutura usada quando uma variável pode ter vários valores diferentes. Ela deixa o código mais organizado do que usar muitos if seguidos.

## 8. Por que é importante testar o mesmo programa com vários valores diferentes?
Porque um programa pode funcionar bem em uma situação e apresentar erros em outra.
