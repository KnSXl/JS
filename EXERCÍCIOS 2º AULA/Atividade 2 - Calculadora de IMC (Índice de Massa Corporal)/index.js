//Atividade 2: Calculadora de IMC (Índice de Massa Corporal)

//imc = peso / (altura * altura)

let peso = Number(prompt("Digite seu peso: "))  //Informar peso
let altura = Number(prompt("Digite sua altura:" ))  //Informar altura
let IMC = (peso / (altura * altura))    //Calculo do IMC

alert(`${peso}`)   
alert(`${altura}`)

if (IMC <= 17.0){
    alert(`${IMC}, Você está com magreza leve`)
}

else if (IMC > 18.5 && IMC <= 24.99){
    alert(`${IMC}, Você está saudável`)         //Resultado do IMC
}

else if(IMC > 25.0){
    alert(`${IMC}, Você está com sobrepeso`)
}