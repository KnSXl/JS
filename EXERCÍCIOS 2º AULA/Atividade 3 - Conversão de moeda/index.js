//Atividade 3: Conversão de moeda

let valor = Number(prompt("Digite o valor em REAIS para ser convertido para DOLAR: "))
let valordolar = 5.14
let taxacambio = 0.93

alert(`Valor convertido com a taxa de cambio é de: ${(valor / valordolar) * taxacambio}`)   //Conversor de reais em Dollar com a Taxa