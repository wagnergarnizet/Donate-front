import * as React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from './../../images/admin/logo.png';

export default function ForgetPass(){
    return (
        <section id="login" className='Admin'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='bg-card'>
                            <img src={imgLogo} alt="Logo" className='img-fluid'/>
                            <p>Digite o e-mail cadastrado para o envio da rededinição de senha.</p>
                            <form action='' method='POST'>
                                <div className="form-group">
                                    <label for="email">E-mail</label>
                                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder=""/>
                                    <small id="emailHelpId" className="form-text text-muted">E-mail Incorreto!</small>
                                </div>
                                <button type="submit" className="btn btn-success">Entrar</button>
                                <Link to='/admin/first-access' className='link-first-access'>Primeiro acesso?</Link>
                                <Link to='/admin/login' className='link-first-access'>Voltar ao Login</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}