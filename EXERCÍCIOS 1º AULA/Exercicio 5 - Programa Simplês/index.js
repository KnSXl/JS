/*Faça um programa que receba o
nome, ano de nascimento de uma
pessoa e o ano atual e mostre:

● O nome da pessoa
● A idade dessa pessoa
● Um true ou false que diz se ela é maior de idade
● Quantos anos ela terá em 2050*/

let nome = prompt("Insira seu nome: ") //Perguntar o Nome
let anoNasc = Number(prompt("Insira seu ano de nascimento: ")) //Perguntar o ano de Nasc
let anoAtual = Number(prompt("Digite o ano atual: ")) //Perguntar o ano atual

alert(`Seu nome: ${nome}` ) //Resp. do nome 
alert(`Sua idade: ${anoAtual - anoNasc}`) //Resp. da Idade
alert(`Você é maior de idade: ${anoAtual - anoNasc > 17}`) //Resp. de Menor ou Maior de Idade
alert(`Sua idade em 2050: ${2050 - anoNasc}`) //Idade em 2050



//Outra Variação usando if e else

nome = (prompt("Qual seu nome? ")) //Perguntar o Nome
let anoNas = Number(prompt("Qual o seu ano de nascimento? ")) //Perguntar o ano de Nasc
let anoAtua = Number(prompt("Qual é o ano atual? ")) //Perguntar o ano atual

alert(`Olá, ${nome}`) //Resp. do nome 
alert(`Sua idade é: ${anoAtua - anoNas}`) //Resp. da Idade

if (anoAtua - anoNas > 17){ 
    alert("Você é maior de idade")  //Resp. de Menor ou Maior de Idade
}
else{
    alert("Você não é maior de idade")
}

alert(`Sua idade em 2050 será: ${2050 - anoNas}`) //Idade em 2050