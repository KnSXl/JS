//Atividade 4: Verificação de disponibilidade de produto em estoque

let produto = 10    //nº de produtos disponível
let produtoSolicitado = prompt("Quantos produtos você deseja? ")    //Receber o valor do úsuario

if (produtoSolicitado < produto) {
    alert(`Produto Solicitado está disponível`)     //Teste se tem o produto disponivel ou não
}
else{
    alert(`Produto solicitado está em falta/esgotado.
    
Nº de produtos disponivel: ${produto}`)
}