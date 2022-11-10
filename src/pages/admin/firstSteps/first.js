import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FirstStep(){
    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();
    const [senhaConfirmacao, setSenhaConfirmacao] = useState();
    const [email, setEmail] = useState();

    function onSubmitFirstStep(e){
        e.preventDefault();

        if(senha === senhaConfirmacao){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'nome': nome,
                    'email': email,
                    'senha': senha,
                    'ativo': true,
                    'funcao': 1
                })
            };
            fetch('/Usuario', requestOptions)
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('user', data.id);
                    document.querySelector('#btnSecondStep').click();
                });
        }else{
            alert("Senhas não conferem");
        }
    }

    return (
        <div className="firstStep">
            <form onSubmit={onSubmitFirstStep} id="first">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="form-group">
                            <label htmlFor="nome">Nome Completo</label>
                            <input type="text" className="form-control" name="nome" id="nome" aria-describedby="nomeHelpId" placeholder="" onChange={(e) => setNome(e.target.value)} required/>
                            <small id="nomeHelpId" className="form-text text-muted">Nome Incorreto!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" id="senha" className="form-control" placeholder="" aria-describedby="senhaHelpId" onChange={(e) => setSenha(e.target.value)} required/>
                            <small id="senhaHelpId" className="text-muted">Senha Incorreta!</small>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder="" onChange={(e) => setEmail(e.target.value)} required/>
                            <small id="emailHelpId" className="form-text text-muted">E-mail Incorreto!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmacaoSenha">Confirmação de Senha</label>
                            <input type="password" name="confirmacaoSenha" id="confirmacaoSenha" className={senha !== senhaConfirmacao ? "errorValidate form-control" : "form-control"} placeholder="" aria-describedby="confirmacaoSenhaHelpId" onChange={(e) => setSenhaConfirmacao(e.target.value)} required/>
                            <small id="confirmacaoSenhaHelpId" className="text-muted">Confirmação de Senha Incorreta!</small>
                        </div>
                    </div>
                </div>
                <button className="btn btn-success">PRÓXIMO PASSO</button>
                <Link to='/admin/login' className='link-first-access'>Voltar ao Login</Link>
            </form>
        </div>
    );
};