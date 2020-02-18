import React, { Component } from 'react';

class Inputs extends Component {
    render(){
        return(
            <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s3">
                        <input placeholder="Código do contrato" type="number" className="validate" />
                    </div>


                    <div className="input-field col s3">
                        <label className="input-field" htmlFor="nome-fornecedor">Ano do contrato.</label>
                        <input type="date" />
                    </div>

                    <div className="input-field col s6">
                        <input placeholder="Nome do fornecedor" id="nome-contrato" type="text" class="validate" />
                        <label className="input-field" htmlFor="nome">Nome do fornecedor</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="10110112270120..." id="dotacao-orc" type="text" class="validate" />
                        <label className="input-field" htmlFor="nome">Dotação orçamentária.</label>
                    </div>

                    <div className="input-field col s6">
                        <input placeholder="Objeto do contrato.." id="onj-contrato" type="text" class="validate" />
                        <label className="input-field" htmlFor="nome">Objeto do contrato.</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s3">
                        <input placeholder="Código do contrato" type="number" className="validate" />
                        <label className="input-field" htmlFor="nome">Objeto do contrato.</label>
                    </div>

                    <div className="input-field col s3">
                        <input type="date" />
                    </div>

                    <div className="input-field col s3">
                        <input placeholder="Objeto do contrato.." id="onj-contrato" type="text" class="validate" />
                        <label className="input-field" htmlFor="nome">Objeto do contrato.</label>
                    </div>
                </div>


                <div className="row">
                    <div className="input-field col s3">
                        <input placeholder="Número do processo licitatório." type="number" className="validate" />
                        <label className="input-field" htmlFor="nome">Objeto do contrato.</label>
                    </div>

                    <div className="input-field col s3">
                        <input type="date" />
                    </div>

                    <div className="input-field col s6">
                        <input placeholder="Modalidade do contrato." id="onj-contrato" type="text" class="validate" />
                        <label className="input-field" htmlFor="nome">Modalidade do contrato.</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="10110112270120..." id="dotacao-orc" type="text" class="validate" />
                        <label className="input-field" htmlFor="nome">Dotação orçamentária.</label>
                    </div>

                    <div className="input-field col s6">
                        <input placeholder="10110112270120..." id="dotacao-orc" type="text" class="validate" />
                        <label className="input-field" htmlFor="nome">Dotação orçamentária.</label>
                    </div>
                </div>


            </form>
        </div>
        )
    }
}

export default Inputs;