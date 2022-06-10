function formatarMoeda(e) {

    e.preventDefault();
    console.log(e)

    if ((/[0-9]+/g).test(e.key) && e.target.value.length < 14) {
        e.target.value += e.key
    }
// <------------------------------->

    var meuInput = Number(e.target.value.replace(/[^0-9]+/g, ''));
    meuInput = (meuInput/100)
    console.log(meuInput)
    inputFormatado = meuInput.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    });

    e.target.value = inputFormatado
}

function validarCampo(e) {
    e.preventDefault();
    if ((/^[A-Za-áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/i).test(e.key) && e.target.value.length < 14) {
        e.target.value += e.key
    } else {
        alert('Este não é um nome válido!')
    }
}
