import React, { Component } from 'react';


class Tabela extends Component {

    constructor() {
        super();
        this.state = {
          data: []
        }
      }
    
      componentDidMount() {
        fetch("https://blockchain.info/ticker").
          then(response => response.json()).
          then(findresponse => {
            this.setState({
              data: [findresponse]
            });
          })
      }
    
      render() {
        return (
          <table>
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

        <tbody>
          <tr>
            {
              this.state.data.map((dynamicData, index) => {
                let keys = Object.keys(dynamicData);
                
                return keys.map(data => {
                  return (
                    <div key={index} >
                      <td>Currency: {data}</td>
                      <td>Currency: {dynamicData.key}</td>
                      <td>Currency: {dynamicData[data].buy}</td>
                    </div>
                  );
                });
              })
              
            }
            </tr>
            </tbody>
          </table>
        )
      }
}

export default Tabela;