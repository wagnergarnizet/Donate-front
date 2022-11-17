import React, { Component, useState } from 'react';
import CampanhaInverno from '../../images/admin/campanhaInverno.jpg';
import backCampaign from '../../images/admin/backCampaign.png';
import imgArroz from '../../images/admin/arroz.png';
import imgFeijao from '../../images/feijao.jpg';
import imgMilho from '../../images/milho.jpg';

export default class ListaDeNotas extends Component {
    constructor(props){
        super(props);
        this.state = ({
            campanhas: [],
            campanha: [],
            prods: [],
            nome: '',
            descricao: '',
            dataInit: '',
            dataFim: '',
            produtos: []
        });
    }

    componentDidMount(){
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/Campanha', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    campanhas: data
                });
            });
    }

    openNewCampaign = function(){
        var newCampaign = document.querySelector(".new");
        newCampaign.classList.add("active");
        document.querySelector(".overlay").classList.add("active");
    }

    checkIfBoxesOpen = function(){
        var actives = document.querySelectorAll(".active");
        for(var i = 0; i < actives.length; i++){
            actives[i].classList.remove("active");
        }
    }

    seeProducts = function(id){
        // document.querySelector("#productsCampaign").classList.add("active");
    }

    saveCampaign = function(e){
        e.preventDefault();

        console.log(this.state);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "nome": this.state.nome,
                "descricao": this.state.descricao,
                "dataInicio": this.state.dataInit,
                "dataFim": this.state.dataFim,
                "instituicaoId": 1,
                "ativo": true,
            })
        };
        fetch('/Campanha', requestOptions)
            .then(response => response.json())
            .then(data => {
                alert("Campanha Criada!");
            });
    }

    render(){
        return (
            <section className='content' id="campanhas">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 title-page'>
                            <h1>Gerenciar Campanhas</h1>
                            <button className='btn-new' onClick={this.openNewCampaign}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.325 15H10.825V10.85H15V9.35H10.825V5H9.325V9.35H5V10.85H9.325V15ZM10 20C8.58333 20 7.26667 19.7458 6.05 19.2375C4.83333 18.7292 3.775 18.025 2.875 17.125C1.975 16.225 1.27083 15.1667 0.7625 13.95C0.254167 12.7333 0 11.4167 0 10C0 8.6 0.254167 7.29167 0.7625 6.075C1.27083 4.85833 1.975 3.8 2.875 2.9C3.775 2 4.83333 1.29167 6.05 0.775C7.26667 0.258333 8.58333 0 10 0C11.4 0 12.7083 0.258333 13.925 0.775C15.1417 1.29167 16.2 2 17.1 2.9C18 3.8 18.7083 4.85833 19.225 6.075C19.7417 7.29167 20 8.6 20 10C20 11.4167 19.7417 12.7333 19.225 13.95C18.7083 15.1667 18 16.225 17.1 17.125C16.2 18.025 15.1417 18.7292 13.925 19.2375C12.7083 19.7458 11.4 20 10 20ZM10 18.5C12.3333 18.5 14.3333 17.6667 16 16C17.6667 14.3333 18.5 12.3333 18.5 10C18.5 7.66667 17.6667 5.66667 16 4C14.3333 2.33333 12.3333 1.5 10 1.5C7.66667 1.5 5.66667 2.33333 4 4C2.33333 5.66667 1.5 7.66667 1.5 10C1.5 12.3333 2.33333 14.3333 4 16C5.66667 17.6667 7.66667 18.5 10 18.5Z" fill="white"/></svg>
                                ADICIONAR Campanha
                            </button>
                        </div>
                    </div>
                    <div className='row'>
                        { this.state.campanhas.map((c) => {
                            return (
                                <div className='col-md-4' key={c.id}>
                                    <div className='card'>
                                        <div className='title'>
                                            <img src={c.logotipo} alt={c.nome} className='backCampanha img-fluid'/>
                                            <h2>{c.nome}</h2>
                                        </div>
                                        <div className='body'>
                                            <p className='date'>{c.dt_inicio} - {c.dt_fim}</p>
                                            <p className='description'>{c.descricao}</p>
                                        </div>
                                        <button className='see-more' onClick={this.seeProducts(c.id)}>
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 7.3748L0 1.3748L1.075 0.299805L6 5.2498L10.925 0.324804L12 1.3998L6 7.3748Z" fill="#444444"/></svg>
                                        </button>
                                    </div>
                                </div>
                            );
                        }) }
                    </div>
                    <div className="row">
                        <div className="col-md-12 relative">
                            <div id="productsCampaign">
                                <div className='banner'>
                                    <img src={backCampaign} alt="Banner " className='img-fluid imgBanner'/>
                                    <h2>Ajuda ao alimento dos alunos</h2>
                                </div>
                                <div className='subtitle'>
                                    <p className='data'>Junho/2022 - Agosto/2022</p>
                                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                                </div>
                                <div className='products'>
                                    <h2>Produtos</h2>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img src={imgArroz} className="img-pequena" alt='Imagem arroz'/>
                                                </div>
                                                <div className="col-md-9 title-img-pequena">
                                                    <p>Arroz</p>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-danger" role="progressbar" aria-label="arroz-progress-bar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p>
                                                        20 /&nbsp;<b>100</b>&nbsp;unidades
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img src={imgFeijao} className="img-pequena" alt='Imagem feijao'/>
                                                </div>
                                                <div className="col-md-9 title-img-pequena">
                                                    <p>Feijão</p>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-warning" role="progressbar" aria-label="feijao-progress-bar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p>
                                                        60 /&nbsp;<b>100</b>&nbsp;unidades
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img src={imgMilho} className="img-pequena" alt='Imagem milho'/>
                                                </div>
                                                <div className="col-md-9 title-img-pequena">
                                                    <p>Milho</p>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success" role="progressbar" aria-label="milho-progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p>
                                                        90 /&nbsp;<b>100</b>&nbsp;unidades
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className='see-less' onClick={this.checkIfBoxesOpen}>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0.625196L0 6.6252L1.075 7.7002L6 2.7502L10.925 7.6752L12 6.6002L6 0.625196Z" fill="#444444"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="newMov" className='new'>
                    <h2>Adicionar campanha</h2>
                    <span className='line'></span>
                    <form>
                        <div className='form-group'>
                            <label htmlFor="nome">Nome da campanha</label>
                            <input type="text" name="nome" id='nome' className='form-control' onChange={(e) => this.setState({nome: e.target.value})} required/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="descricao">Descrição</label>
                            <textarea nome="descricao" id='descricao' className='form-control' onChange={(e) => this.setState({descricao: e.target.value})} required></textarea>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="periodo">Período</label>
                            <input type="date" name="dataInit" id='dataInit' className='form-control' onChange={(e) => this.setState({dataInit: e.target.value})} required/>
                            <br/>
                            <input type="date" name="dataFim" id='dataFim' className='form-control' onChange={(e) => this.setState({dataFim: e.target.value})}required/>
                        </div>
                        <div className='form-group'>
                            <label>Produtos</label>
                            <div className='row'>
                                <div className='col-9'>
                                    <select name='produtos' multiple={true} defaultValue={this.state.produtos} onChange={(e) => this.setState({produtos: e.target.value})} className='form-control'>
                                        <option value="">Selecione o produto</option>
                                        <option value="arroz">Arroz</option>
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <button type='button' className='btn-more-product'>
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#3DBD8A"/><path d="M30.1216 24.488H25.2736V29.456H22.7296V24.488H17.8816V22.184H22.7296V17.216H25.2736V22.184H30.1216V24.488Z" fill="white"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className='btn-submit' onClick={this.saveCampaign}>Salvar</button>
                        <button type="button" className='btn-cancel' onClick={this.checkIfBoxesOpen}>Cancelar</button>
                    </form>
                </div>
                <div className='overlay' onClick={this.checkIfBoxesOpen}></div>
            </section>
        );
    }
}