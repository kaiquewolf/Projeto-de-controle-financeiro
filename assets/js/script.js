function exibirMenu(){
    document.getElementById("conteudo-menu").style.display="flex";
}
function ocutarMenu(){
    document.getElementById("conteudo-menu").style.display="none";
}


// ---------------------- <--------> --------------------

var mercadorias = [
    {
        transacao: 'Venda',
        nome: 'Lorem ipsum dolor sit amet consectetur',
        valor: 'R$ 12.999,99',
    },
    {
        transacao: 'Compra',
        nome: 'Quis nostrud exercitation',
        valor: 	'R$ 99,99',
    },
    {
        transacao: 'Venda',
        nome: 'Lorem ipsum',
        valor: 'R$ 9,99',
    },
    {
        total: 'Total',
        valorTotal: 'R$ 12.909,99',
    },
    {
        LucroPrejuizo: [LUCRO],
    }
]

for (mercadoria in mercadorias) {
`<tr>
    <td class="mais-menos">
         ${ (mercadorias[mercadoria] ? 'Compra' : 'Venda') }
     </td>
    <td class="mercadoria">
         ${ mercadorias[mercadoria].nome }
    </td>

    <td class="valor-mercadoria"  >
        ${ mercadorias[mercadoria].valor}
    </td>
</tr>

<tr class="total">
    <td></td>
    <td class="mercadoria" id="total">
        ${ mercadorias[mercadoria].total}
    </td>
    <td class="valor-mercadoria"  id="total">
        ${ mercadorias[mercadoria].valorTotal}
    </td> 
</tr>
<tr class="lucro">
    <td></td>
    <td></td>
    <td>
        ${ mercadorias[mercadoria].LucroPrejuizo}
    </td>
</tr>`
}

