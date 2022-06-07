function testaFormulario(e) {
        // e.preventDefault();
    var Valor = /[^0-9 . , R$]+/g;
    var Mercadoria = /[^A-z]+/g;
    var numValor = document.getElementById("valor-input").value
    var nome = document.getElementById("nm-merca").value


        if (Mercadoria.test(nome)) {

            alert('Este não é um nome válido!')

        };

    if (Valor.test(numValor)) {

        alert('Este Valor é inválido!')

    }
}

function testaCampo(t) {
    var Valor = /[^0-9 . , R$]+/g;
    var Mercadoria = /[^A-z]+/g;
    var numValor = document.getElementById("valor-input").value
    var nome = document.getElementById("nm-merca").value
    if (Mercadoria.test(nome)) {

        alert('Este não é um nome válido!')
        document.getElementById("nm-merca").focus();

    }


    if (Valor.test(numValor)) {
        alert('Este Valor é inválido!')
        document.getElementById("valor-input").focus();
    }
}

    // máscara no campo valor 

function formatarMoeda(e) {

    var elemento = document.getElementsByClassName("valor-input")
    var valor = document.getElementById("valor-input").value;


    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';

    valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {

             valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        }

    document.getElementById("valor-input").value = "R$ " + valor;

        if (valor.length <= 3) {

            document.getElementById("valor-input").value = "R$ 0" + valor;

        }

        if (valor.length <= 1) {

             document.getElementById("valor-input").value = "R$ 0,0" + valor;

         }
}
