// Array de objetos 

let alunos = [
{ nome: "Alice", idade: 21, curso: "Full Stack" },
{ nome: "Bob", idade: 22, curso: "Full Stack" },
{ nome: "Sophia", idade: 19, curso: "Full Stack" },
];

console.log("================ Lista com For =================");

// for tradicional
 for (let i = 0; i < alunos.length; i++) {
    console.log(`nome: ${alunos[i].nome} | idade: ${alunos[i].idade} | curso: ${alunos[i].curso}`);
 } 
 

 // lista ussando forEach
 console.log("================ Lista com ForEach =================");
 alunos.forEach((aluno) => {
   console.log(`aluno: ${aluno.nome} | idade: ${aluno.idade} | curso: ${aluno.curso}`);
 });


 //Alterando a idade do segundo aluno
 alunos[1].idade = 24;


 // Aluno com a idade atualizada
 console.log("================ Lista Após Alteração =================");

   console.log(`${alunos[1].nome} agora tem ${alunos[1].idade} anos.`);
