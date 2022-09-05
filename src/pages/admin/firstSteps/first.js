import React from "react";
import { Link } from 'react-router-dom';

const firstStep = () => {
    return (
        <div className="firstStep">
            <form action='' method='POST' id="first">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="form-group">
                            <label htmlFor="nome">Nome Completo</label>
                            <input type="text" className="form-control" name="nome" id="nome" aria-describedby="nomeHelpId" placeholder=""/>
                            <small id="nomeHelpId" className="form-text text-muted">Nome Incorreto!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="senha">Senha</label>
                            <input type="text" name="senha" id="senha" className="form-control" placeholder="" aria-describedby="senhaHelpId"/>
                            <small id="senhaHelpId" className="text-muted">Senha Incorreta!</small>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder=""/>
                            <small id="emailHelpId" className="form-text text-muted">E-mail Incorreto!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmacaoSenha">Confirmação de Senha</label>
                            <input type="text" name="confirmacaoSenha" id="confirmacaoSenha" className="form-control" placeholder="" aria-describedby="confirmacaoSenhaHelpId"/>
                            <small id="confirmacaoSenhaHelpId" className="text-muted">Confirmação de Senha Incorreta!</small>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">PRÓXIMO PASSO</button>
                <Link to='/admin/login' className='link-first-access'>Voltar ao Login</Link>
            </form>
        </div>
    );
};
export default firstStep;