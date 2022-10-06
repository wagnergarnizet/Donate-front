import React from "react";
import { Link } from 'react-router-dom';

const secondStep = () => {
    return (
        <div className="secondStep">
            <form action='' method='POST' id="second">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="form-group">
                            <label htmlFor="instituicao">Nome da Instituição</label>
                            <input type="text" className="form-control" name="institucao" id="institucao" aria-describedby="institucaoHelpId" placeholder=""/>
                            <small id="institucaoHelpId" className="form-text text-muted">Instituição Incorreta!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea className="form-control" name="descricao" id="descricao" rows="4"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" name="telefone" id="telefone" className="form-control" aria-describedby="telefonehelpId"/>
                            <small id="telefonehelpId" className="text-muted">Telefone Incorreto</small>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="form-group">
                            <label htmlFor="cnpj">CNPJ</label>
                            <input type="text" className="form-control" name="cnpj" id="cnpj" aria-describedby="cnpjHelpId" placeholder=""/>
                            <small id="cnpjHelpId" className="form-text text-muted">CNPJ Incorreto!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cep">CEP</label>
                            <input type="text" name="cep" id="cep" className="form-control" placeholder="" aria-describedby="cepHelpId"/>
                            <small id="cepHelpId" className="text-muted">CEP Incorreto!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="endereco">Endereço</label>
                            <input type="text" name="endereco" id="endereco" className="form-control" placeholder="" aria-describedby="enderecoHelpId"/>
                            <small id="enderecoHelpId" className="text-muted">Endereço Incorreto!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input type="tel" name="whatsapp" id="whatsapp" className="form-control" placeholder="" aria-describedby="whatsappHelpId"/>
                            <small id="whatsappHelpId" className="text-muted">Whatsapp Incorreto!</small>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className="form-group">
                            <label htmlFor="logo">Upload do Logotipo</label>
                            <input type="file" className="form-control" name="logo" id="logo" aria-describedby="logohelpId" placeholder="Logotipo"/>
                            <small id="logohelpId" className="form-text text-muted">Logo inválido</small>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">PRÓXIMO PASSO</button>
                <Link to='/admin/login' className='link-first-access'>Voltar ao Login</Link>
            </form>
        </div>
    );
};
export default secondStep;