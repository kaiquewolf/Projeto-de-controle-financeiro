function exibirMenu(){
    document.getElementById("conteudo-menu").style.display="flex";
}
function ocutarMenu(){
    document.getElementById("conteudo-menu").style.display="none";
}

// -------------------------------- <-------------> ------------------------------------------ //

var extrato =  JSON.parse(localStorage.getItem('extrato') || '[]');

var tabela = document.querySelector("table.table tbody");


desenhaTabela();
// -------------------------------- <-------------> ------------------------------------------ //
// Função que irá desenhar tabela com os itens do localStorage.


 

function desenhaTabela() {

    linhasExistentes = [...document.querySelectorAll("table.table tbody .conteudo-dinamico")];
    linhasExistentes.forEach((elements) => {
        elements.remove()
    })

    if(extrato.length == 0) {
        tabela.innerHTML += `
        <tr class="conteudo-dinamico">
        <td> </td>
            <td style = "text-align: center;">
               ${'Nenhuma transação cadastrada !'}
            </td>
            <td> </td> 
        </tr>
        `
    };

    for (mercadoria in extrato){
       
        tabela.innerHTML +=
        
            `<tr class="conteudo-dinamico">
                <td class="mais-menos" style = "text-align: center;">
                    ${extrato[mercadoria].tipo}
                </td>
                <td class="mercadoria" style = "word-break:break-word; padding-right:40%">
                    ${extrato[mercadoria].nome}
                </td>
        
                <td class="valor-mercadoria">
                    ${extrato[mercadoria].valor}
                </td>    
            </tr>`
        }
        
        if (extrato.length > 0) {
        var total = 0;
        let compra = [];
        let compraTotal = 0;
        let venda = [];
        let vendaTotal = 0;
    
        for (i = 0; i < extrato.length; i++) {
            if (extrato[i].tipo === "-") {
                compra = extrato[i].valor.replace(/[R$,. ]/g, '');
                compraTotal += Number.parseFloat(compra);
            }
    
    
            if (extrato[i].tipo === "+") {
                venda = extrato[i].valor.replace(/[R$,. ]/g, '');
                vendaTotal += Number.parseFloat(venda);
            }
        };
        
        total = vendaTotal - compraTotal;
        
        total = total/100;
        
            document.querySelector("table.table tbody").innerHTML +=
                `<tr class="total conteudo-dinamico">
                    <td></td>
                    <td class="mercadoria" id="total">${'Total'}</td>
                    <td class="valor-mercadoria"  id="total">${total.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                </tr>
                <tr class="lucro conteudo-dinamico">
                    <td></td>
                    <td></td>
                    <td>${Math.sign(total) > 0 ? "[LUCRO]" : "[PREJUÍZO]"}</td>
                </tr>`
        };
        
}



function transacao(e) {
    e.preventDefault();

        extrato.push(
            {
                tipo: e.target.elements['nova-transacao'].value,
                nome: e.target.elements['nm-merca'].value,
                valor: e.target.elements['valor-input'].value,
            }
        );

    localStorage.setItem('extrato', JSON.stringify(extrato));
    desenhaTabela();
};


// Função pra limpar os dados.

function limparDados() {
    confirm("Tem certeza que deseja excluir todas as transações?")
    localStorage.removeItem('extrato');
    location.reload();
};

function cadastraTransacao() {
    document.getElementById("nova-transacao").focus();
}

// if(extrato == null) {
//     tabela.innerHTML += `
//     <tr>
//     <td> </td>
//         <td style = "text-align: center;">
//            ${'Nenhuma transação cadastrada !'}
//         </td>
//         <td> </td> 
//     </tr>
//     `
// };


