import * as React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from './../../images/admin/logo.png';

export default function FirstAccess(){
    return (
        <section id="firstAccess">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>
                        <div className='bg-card'>
                            <img src={imgLogo} alt="Logo" className='img-fluid'/>
                            <p>Preencha os dados abaixo para fazer o seu cadastro</p>
                            <div className='flex-center'>
                                <div className='group'>
                                    <span className='number'>1</span>
                                    <p>Dados do usuário</p>
                                </div>
                                <span className='trace'></span>
                                <div className='group disabled'>
                                    <span className='number'>2</span>
                                    <p>Dados da Instituição</p>
                                </div>
                                <span className='trace'></span>
                                <div className='group disabled'>
                                    <span className='number'>3</span>
                                    <p>Envio</p>
                                </div>
                            </div>
                            <form action='' method='POST'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div class="form-group">
                                            <label for="nome">Nome Completo</label>
                                            <input type="text" class="form-control" name="nome" id="nome" aria-describedby="nomeHelpId" placeholder=""/>
                                            <small id="nomeHelpId" class="form-text text-muted">Nome Incorreto!</small>
                                        </div>
                                        <div class="form-group">
                                            <label for="senha">Senha</label>
                                            <input type="text" name="senha" id="senha" class="form-control" placeholder="" aria-describedby="senhaHelpId"/>
                                            <small id="senhaHelpId" class="text-muted">Senha Incorreta!</small>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="form-group">
                                            <label for="email">E-mail</label>
                                            <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder=""/>
                                            <small id="emailHelpId" class="form-text text-muted">E-mail Incorreto!</small>
                                        </div>
                                        <div class="form-group">
                                            <label for="confirmacaoSenha">Confirmação de Senha</label>
                                            <input type="text" name="confirmacaoSenha" id="confirmacaoSenha" class="form-control" placeholder="" aria-describedby="confirmacaoSenhaHelpId"/>
                                            <small id="confirmacaoSenhaHelpId" class="text-muted">Confirmação de Senha Incorreta!</small>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-success">PRÓXIMO PASSO</button>
                                <Link to='/admin/login' className='link-first-access'>Voltar ao Login</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}