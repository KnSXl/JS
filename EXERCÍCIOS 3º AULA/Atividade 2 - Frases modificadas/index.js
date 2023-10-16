//Digita uma frase
const frase = prompt("Digite uma frase: ")

//Trabsforma a frase em maiscula 
const novaFrase = frase.toLocaleUpperCase()

//Trocar carácteres selecionados
const novaFrase1 = frase.replace("o", "i")

//Imprime frase em MAIUSCULO
alert(novaFrase)

//Imprime a troca de caracteres selecionados 
alert(novaFrase1)

//Mostra a quantidade de caracteres
alert(frase.length)
