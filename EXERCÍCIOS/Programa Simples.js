/*Faça um programa que receba o
nome, ano de nascimento de uma
pessoa e o ano atual e mostre:

● O nome da pessoa
● A idade dessa pessoa
● Um true ou false que diz se ela é
maior de idade
● Quantos anos ela terá em 2050*/

let nome = (prompt("Digite seu nome: "))
let idade = Number(prompt("Digite sua idade: "))

alert(`Seu nome: ${nome}`)
alert(`Sua idade: ${idade}`)
alert(`Você é maior de idade: ${idade>17}`)
alert(`Sua idade em 2050: ${idade+27}`)