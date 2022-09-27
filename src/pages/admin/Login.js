import * as React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from './../../images/admin/logo.png';

export default function Login(){
    return (
        <section id="login" className='Admin'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='bg-card'>
                            <img src={imgLogo} alt="Logo" className='img-fluid'/>
                            <form action='' method='POST'>
                                <div class="form-group">
                                    <label for="email">E-mail</label>
                                    <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder=""/>
                                    <small id="emailHelpId" class="form-text text-muted">E-mail Incorreto!</small>
                                </div>
                                <div class="form-group">
                                    <label for="senha">Senha</label>
                                    <input type="text" name="senha" id="senha" class="form-control" placeholder="" aria-describedby="senhaHelpId"/>
                                    <small id="senhaHelpId" class="text-muted">Senha Incorreta!</small>
                                </div>
                                <Link to='/admin/forget-password' className='link-forget'>Esqueceu a senha?</Link>
                                <button type="submit" class="btn btn-success">Entrar</button>
                                <Link to='/admin/first-access' className='link-first-access'>Primeiro acesso?</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}