import React, { Component } from 'react';

fetch('https://dadosabertos.almg.gov.br/ws/prestacao_contas/contratos/pesquisa')
        .then(function(resp){
          return resp.text();
        }).then(function(data){
            let parser = new DOMParser(),
                xmlDoc = parser.parseFromString(data, 'text/xml');
                console.log(xmlDoc.getElementsByTagName('codTipoObjetoContrato')[1].childNodes[0]);
        });

const TabelaHead = () => {
    return (
        <thead>
            <tr>
                <th>Cód. do contrato.</th>
                <th>Ano do contrato.</th>
                <th>Tipo de contrato</th>
                <th>Nome do fornecedor</th>
                <th>Dotação orçamentária</th>
                <th>Objeto do contrato</th>
                <th>Número do processo licitatório</th>
                <th>Ano do processo licitatório.</th>
                <th>Modalidade do contrato.</th>
                <th>Número da modalidade de contrato.</th>
                <th>Ano da modalidade de contrato.</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
            </tr>
        </tbody>
    )

}

class Tabela extends Component {

    render() {
        return (
            <table className="centered highlight responsive-table">
                <TabelaHead />
                <TableBody />
            </table>
        )
    }
}

export default Tabela;