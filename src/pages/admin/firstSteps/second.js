import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function FirstStep(){
    const [institucao, setInstituicao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [telefone, setTelefone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [logotipo, setLogotipo] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [numero, setNumero] = useState('');
    const [cep, setCep] = useState('');

    function onCepSearch(cepSearch){
        var cepFormat = cepSearch.replace(/\D/g, "");
        const cepFormatFinal = cepFormat.replace(/(\d{5})(\d{1,3})$/, "$1-$2");

        if (cepFormatFinal.length === 9) {
            var url = 'https://viacep.com.br/ws/' + cepFormatFinal + '/json/';

            fetch(url, {method: "GET"})
                .then(response => response.json())
                .then(data => {
                    setEndereco(data.logradouro);
                    setBairro(data.bairro);
                    setCidade(data.localidade);
                    setEstado(data.uf);
                })
                .catch(error => {
                    alert("CEP não encontrado.");
                });
        }

        setCep(cepFormatFinal);
    }

    function setTelefoneMask(phone){
        var v = phone;
        v = v.replace(/\D/g, '');
        v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
        v = v.replace(/(\d)(\d{4})$/, '$1-$2');
        setTelefone(v);
    }

    function setWhatsappMask(phone){
        var v = phone;
        v = v.replace(/\D/g, '');
        v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
        v = v.replace(/(\d)(\d{4})$/, '$1-$2');
        setWhatsapp(v);
    }

    function onSubmitSecondStep(e){
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "nome": institucao,
                "email": email,
                "cnpj": cnpj,
                "endereco": endereco + ", " + numero,
                "cep": cep,
                "cidade": cidade,
                "estado": estado,
                "bairro": bairro,
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
                            <input type="tel" name="telefone" id="telefone" className="form-control" aria-describedby="telefonehelpId" minLength="14" maxLength="15" value={telefone} onChange={(e) => setTelefoneMask(e.target.value)} pattern="(\([1-9]{2}\)\s9[0-9]{4}-[0-9]{4})|((\([1-9]{2}\)) (?!9)[0-9]{4}-[0-9]{4})" required/>
                            <small id="telefonehelpId" className="text-muted">Telefone Incorreto</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input type="tel" name="whatsapp" id="whatsapp" className="form-control" placeholder="" aria-describedby="whatsappHelpId" minLength="14" maxLength="15" value={whatsapp} onChange={(e) => setWhatsappMask(e.target.value)} pattern="(\([1-9]{2}\)\s9[0-9]{4}-[0-9]{4})|((\([1-9]{2}\)) (?!9)[0-9]{4}-[0-9]{4})" required/>
                            <small id="whatsappHelpId" className="text-muted">Whatsapp Incorreto!</small>
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
                            <input type="text" name="cep" id="cep" className="form-control" placeholder="" aria-describedby="cepHelpId" onChange={(e) => onCepSearch(e.target.value)} value={cep} pattern="^([0-9]{5}-[0-9]{3})*$" minLength="9" maxLength="9" required/>
                            <small id="cepHelpId" className="text-muted">CEP Incorreto!</small>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-8">
                                    <label htmlFor="endereco">Endereço</label>
                                    <input type="text" name="endereco" id="endereco" className="form-control" placeholder="" aria-describedby="enderecoHelpId" onChange={(e) => setEndereco(e.target.value)} value={endereco} required/>
                                    <small id="enderecoHelpId" className="text-muted">Endereço Incorreto!</small>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="numero">Número</label>
                                    <input type="text" name="numero" id="numero" className="form-control" placeholder="" aria-describedby="numeroHelpId" onChange={(e) => setNumero(e.target.value)} required/>
                                    <small id="numeroHelpId" className="text-muted">Número Incorreto!</small>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bairro">Bairro</label>
                            <input type="text" name="bairro" id="bairro" className="form-control" placeholder="" aria-describedby="bairroHelpId" onChange={(e) => setBairro(e.target.value)} value={bairro} required/>
                            <small id="bairroHelpId" className="text-muted">Bairro Incorreto!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cidade">Cidade</label>
                            <input type="text" name="cidade" id="cidade" className="form-control" placeholder="" aria-describedby="cidadeHelpId" onChange={(e) => setCidade(e.target.value)} value={cidade} required/>
                            <small id="cidadeHelpId" className="text-muted">Cidade Incorreto!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="estado">Estado</label>
                            <input type="text" name="estado" id="estado" className="form-control" placeholder="" aria-describedby="estadoHelpId" onChange={(e) => setEstado(e.target.value)} value={estado} required/>
                            <small id="estadoHelpId" className="text-muted">Estado Incorreto!</small>
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