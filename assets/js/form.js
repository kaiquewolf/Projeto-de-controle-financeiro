function testaFormulario(e){
    // e.preventDefault();

    var Mercadoria = /[^A-z ]+/g
    var Valor = /[^0-1]/g
    var nome = document.getElementById("nm-merca");
    if(Mercadoria.test(nome)){
        alert('Este não é um nome válido!')
    } 

    if (Valor.test(Valor)){
        alert('Valor inválido!')
    }



}