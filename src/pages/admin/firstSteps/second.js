import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function FirstStep(){
    const [institucao, setInstituicao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [logotipo, setLogotipo] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cep, setCep] = useState('');

    function onSubmitSecondStep(e){
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "nome": institucao,
                "email": email,
                "cnpj": cnpj,
                "endereco": endereco,
                "cep": cep,
                "cidade": "string",
                "estado": "string",
                "bairro": "string",
                "logotipo": logotipo,
                "ativo": true,
                "descricao": descricao,
                "telefone": telefone,
                "celular": whatsapp,
                "usuarioId": localStorage.getItem('user')
            })
        };
        fetch('/Instituicao', requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('instituicao', data.id);

                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "nome": institucao,
                        "email": email,
                        "cnpj": cnpj,
                        "endereco": endereco,
                        "cep": cep,
                        "cidade": "string",
                        "estado": "string",
                        "bairro": "string",
                        "logotipo": logotipo,
                        "ativo": true,
                        "descricao": descricao,
                        "telefone": telefone,
                        "celular": whatsapp,
                        "usuarioId": localStorage.getItem('user')
                    })
                };
                fetch('/Usuario/' + localStorage.getItem('user'), requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        localStorage.setItem('instituicao', data.id);
                        
                        document.querySelector('#btnThirdStep').click();
                    });
                document.querySelector('#btnThirdStep').click();
            });
    }

    return (
        <div className="secondStep">
            <form onSubmit={onSubmitSecondStep} method='POST' id="second">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="form-group">
                            <label htmlFor="instituicao">Nome da Instituição</label>
                            <input type="text" className="form-control" name="institucao" id="institucao" aria-describedby="institucaoHelpId" placeholder="" onChange={(e) => setInstituicao(e.target.value)} required />
                            <small id="institucaoHelpId" className="form-text text-muted">Instituição Incorreta!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email da Instituição</label>
                            <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder="" onChange={(e) => setEmail(e.target.value)} required />
                            <small id="emailHelpId" className="form-text text-muted">Instituição Incorreta!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea className="form-control" name="descricao" id="descricao" rows="4" onChange={(e) => setDescricao(e.target.value)} required ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" name="telefone" id="telefone" className="form-control" aria-describedby="telefonehelpId" onChange={(e) => setTelefone(e.target.value)} required/>
                            <small id="telefonehelpId" className="text-muted">Telefone Incorreto</small>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="form-group">
                            <label htmlFor="cnpj">CNPJ</label>
                            <input type="text" className="form-control" name="cnpj" id="cnpj" aria-describedby="cnpjHelpId" placeholder="" onChange={(e) => setCnpj(e.target.value)} required/>
                            <small id="cnpjHelpId" className="form-text text-muted">CNPJ Incorreto!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cep">CEP</label>
                            <input type="text" name="cep" id="cep" className="form-control" placeholder="" aria-describedby="cepHelpId" onChange={(e) => setCep(e.target.value)} required/>
                            <small id="cepHelpId" className="text-muted">CEP Incorreto!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="endereco">Endereço</label>
                            <input type="text" name="endereco" id="endereco" className="form-control" placeholder="" aria-describedby="enderecoHelpId" onChange={(e) => setEndereco(e.target.value)} required/>
                            <small id="enderecoHelpId" className="text-muted">Endereço Incorreto!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input type="tel" name="whatsapp" id="whatsapp" className="form-control" placeholder="" aria-describedby="whatsappHelpId" onChange={(e) => setWhatsapp(e.target.value)} required/>
                            <small id="whatsappHelpId" className="text-muted">Whatsapp Incorreto!</small>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className="form-group">
                            <label htmlFor="logo">Upload do Logotipo</label>
                            <input type="file" className="form-control" name="logo" id="logo" aria-describedby="logohelpId" placeholder="Logotipo" onChange={(e) => setLogotipo(e.target.value)} required/>
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