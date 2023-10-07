//Atividade 5: Cálculo de média ponderada

let nota1 = Number(prompt("Digite sua primeira nota? "))
let peso1 = Number(prompt("Qual o peso da primeira nota? "))       
notaA = nota1 * peso1

let nota2 = Number(prompt("Digite sua primeira nota? "))
let peso2 = Number(prompt("Qual o peso da primeira nota? "))    //Pede para o úsuario a Nota e o Peso da nota
notaB = nota2 * peso2

let nota3 = Number(prompt("Digite sua primeira nota? "))
let peso3 = Number(prompt("Qual o peso da primeira nota? "))
notaC = nota3 * peso3

let somaNotas = notaA + notaB + notaC       //faz a soma das notas
let somaPeso = peso1 + peso2 + peso3        //faz a soma dos pesos das notas

let media = somaNotas / somaPeso    //calculo da média ponderada
alert (media)

if (media < 6) {
    alert(`Você não alcançou a média!`)
}                                           //Teste se ficou na média ou não
else {
    alert(`Parabens, você alcançou a media!`)
}