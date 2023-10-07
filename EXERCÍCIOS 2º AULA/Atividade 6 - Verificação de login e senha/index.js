//Atividade 6: Verificação de login e senha

let loginok = "kauasilva2861@gmail.com"     //login certa
let senhaok = 286110                        //senha certa

let login = prompt("digite seu email: ") 
let senha = Number(prompt("digite sua senha: "))

if (login === loginok && senha === senhaok){
    alert("Login bem-sucedido")
} else {                                //Teste de login
    alert("erro!")
}