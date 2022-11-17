import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imgLogo from './../../images/admin/logo.png';

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    function onSendLogin(e){
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": email,
                "senha": senha
            })
        };
        fetch('/Login', requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', data.user.email);
                navigate('/admin/campanhas');
            });
    }

    function OnInit(){
        var user = localStorage.getItem('user');
        useEffect(() => {
            if(user != "" || user != null || user != undefined){
                // alert("Você já está logado!");
                navigate('/admin/campanhas');
            }
        },[]);
    }

    return (
        <section id="login" className='Admin' onLoad={OnInit}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='bg-card'>
                            <img src={imgLogo} alt="Logo" className='img-fluid'/>
                            <form onSubmit={onSendLogin} method='POST'>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelpId" onChange={(e) => setEmail(e.target.value)} required/>
                                    <small id="emailHelpId" className="form-text text-muted">E-mail Incorreto!</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="senha">Senha</label>
                                    <input type="password" name="senha" id="senha" className="form-control" aria-describedby="senhaHelpId" onChange={(e) => setSenha(e.target.value)} required/>
                                    <small id="senhaHelpId" className="text-muted">Senha Incorreta!</small>
                                </div>
                                <Link to='/admin/forget-password' className='link-forget'>Esqueceu a senha?</Link>
                                <button type="submit" className="btn btn-success">Entrar</button>
                                <Link to='/admin/first-access' className='link-first-access'>Primeiro acesso?</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}