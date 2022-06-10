function exibirMenu(){
    document.getElementById("conteudo-menu").style.display="flex";
}
function ocutarMenu(){
    document.getElementById("conteudo-menu").style.display="none";
}


// -------------------------------- <-------------> ------------------------------------------ //


// Função que salva os inputs no LocalStorage e converte pra string
function transacao(e) {

    var tipo = document.getElementById('nova-transacao').value;
    var nome = document.getElementById('nm-merca').value;
    var valor = document.getElementById('valor-input').value;

    var transacao =  JSON.parse(localStorage.getItem('transacao') || '[]');

        transacao.push(
            {
                tipo: tipo,
                nome: nome,
                valor: valor,
            }
        );

    localStorage.setItem('transacao', JSON.stringify(transacao));

};

// -------------------------------- <-------------> ------------------------------------------ //
// Função que irá desenhar tabela com os itens do localStorage.

var extrato = JSON.parse(localStorage.getItem('transacao'));
var tabela = document.querySelector("table.table tbody");
 
function desenhaTabela() {
    for (mercadoria in extrato){
       
        tabela.innerHTML +=
        
            `<tr>
                <td class="mais-menos" style = "text-align: center;">
                    ${extrato[mercadoria].tipo}
                </td>
                <td class="mercadoria">
                    ${extrato[mercadoria].nome}
                </td>
        
                <td class="valor-mercadoria">
                    ${extrato[mercadoria].valor}
                </td>    
            </tr>`
    
        }
        totalExtrato();
}

if(extrato != null) {
    desenhaTabela();
};

//Método para formatar números de acordo com a localidade
var formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  })

//Função para somar os valores do input (valor)
//Mostrar o seu total com o status [LUCRO] ou [PREJUÍZO]
function totalExtrato() {
    var total = 0;
    let compra = [];
    let compraTotal = 0;
    let venda = [];
    let vendaTotal = 0;

    for (i = 0; i < extrato.length; i++) {
        if (extrato[i].tipo === "-") {
            compra = extrato[i].valor.replace(/[R$,. ]/g, '');
            console.log(compra)
            compraTotal = Number.parseFloat(compra);
        }

        if (extrato[i].tipo === "+") {
            venda = extrato[i].valor.replace(/[R$,. ]/g, '');
            vendaTotal = Number.parseFloat(venda);
        }

    };
    
    total = vendaTotal - compraTotal;

    
    // if (total < 0 ){
    //     total.toFixed(1);
    // };
    console.log(total)
    // showTotal(total);
    if(extrato != null) {
    //   desenhaTabela();
        document.querySelector("table.table tbody").innerHTML +=
            `<tr class="total">
                <td></td>
                <td class="mercadoria" id="total">${'Total'}</td>
                <td class="valor-mercadoria"  id="total">${new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    maximumFractionDigits: 2,
                  }).format(total)} 
            </tr>
            <tr class="lucro">
                <td></td>
                <td></td>
                <td>${Math.sign(total) > 0 ? "[LUCRO]" : "[PREJUÍZO]"}</td>
            </tr>`
    };
};
    




// Função pra limpar os dados.

function limparDados() {
    localStorage.removeItem('transacao');
    location.reload();
};

if(extrato == null) {
    tabela.innerHTML += `
    <tr>
    <td> </td>
        <td style = "text-align: center;">
           ${'Nenhuma transação cadastrada !'}
        </td>
        <td> </td> 
    </tr>
    `
};


