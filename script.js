function mediaAluno () {

// Logica de Programação;
// Problema: obter tres notas de um aluno, calcular a média;
// exibir a média e exibir a situação do aluno: aprovado;
// em exame ou reprovado.

console.log("Inicio do programa");

//declaração das variaveis
const nota1= parseInt (document.getElementById('nota1').value);
const nota2= parseInt (document.getElementById('nota2').value);
const nota3= parseInt (document.getElementById('nota3').value);

// calculo da média
const media= (nota1+nota2+nota3) /3;

console.log('A nota 1 é:', nota1);
console.log('A nota 2 é:', nota2);
console.log('A nota 3 é:', nota3);

document.getElementById('resultado').innerHTML = 'Aprovado=' + media;

if (media >=7){
    console.log ('APROVADO');
} else if (media < 7 && media >=5 ) {
    console.log ('EXAME');
}else{
    console.log ('REPROVADO');
}


console.log('Fim do programa');

}