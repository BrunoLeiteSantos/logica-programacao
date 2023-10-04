// Logica de Programação;
// Problema: obter tres notas de um aluno, calcular a média;
// exibir a média e exibir a situação do aluno: aprovado;
// em exame ou reprovado.

console.log("Inicio do programa");

//declaração das variaveis
const nota1= parseInt (prompt('Digite a nota 1'));
const nota2= parseInt (prompt('Digite a nota 2'));
const nota3= parseInt (prompt('Digite a nota 2'));

// calculo da média
const media= (nota1+nota2+nota3) /3;

console.log('A nota 1 é:', nota1);
console.log('A nota 2 é:', nota2);
console.log('A nota 3 é:', nota3);

console.log('A media do aluno é:' , media);

console.log('Fim do programa');