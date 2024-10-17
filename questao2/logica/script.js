import salvar from "../persistencia/bd.js";
function validar(){
    let idade = document.getElementById("age").value;
    let nome = document.getElementById("name").value;
    if(idade>=18){
        salvar(nome, idade);
    }else{
        alert("Você deve ter mais de 18 anos para cadastrar-se!");
    }
}
document.getElementById("submitBtn").addEventListener("click", validar);