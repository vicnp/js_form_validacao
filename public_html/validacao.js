/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validar(){
    if(document.getElementById("nome").value===""){
        alert("O campo nome deve ser preenchido!");
    }else if(document.getElementById("endereco").value===""){
         alert("O campo endereço deve ser preenchido!");
    }else if(document.getElementById("email").value===""){
         alert("O campo e-mail deve ser preenchido!");
    }else if(document.getElementById("telefone").value===""){
         alert("O campo Telefone deve ser preenchido!");
    }else if(document.getElementById("comentario").value===""){
         alert("O campo Comentário deve ser preenchido!");
    }
    var genders = document.getElementsByName("genero");
    var selectedGender;
    for(var i = 0; i < genders.length; i++) {
        if(genders[i].checked)
           selectedGender = genders[i].value;
    }
    if(!selectedGender){
         alert("O campo Sexo deve ser preenchido!");
    }
}