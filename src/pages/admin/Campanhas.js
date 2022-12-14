import React, { Component } from 'react';
import imgCampanha from '../../images/admin/campanhaAlimento.jpg';
import imgArroz from '../../images/admin/arroz.png';
import imgFeijao from '../../images/feijao.jpg';
import imgMilho from '../../images/milho.jpg';

export default class Campanhas extends Component {
    constructor(props){
        super(props);
        this.state = {
            campanhas: [],
            campanha: [],
            id: '',
            nome: '',
            descricao: '',
            dataInit: '',
            dataFim: '',
            imagem: '',
            produtos: [],
            produtosSelecionados: [],
            prodCampanhas: []
        };

        this.saveCampaign = this.saveCampaign.bind(this);
        this.seeProducts = this.seeProducts.bind(this);
        this.openNewCampaign = this.openNewCampaign.bind(this);
        this.getAllCampaigns = this.getAllCampaigns.bind(this);
        this.getAllProducts = this.getAllProducts.bind(this);

        this.user = localStorage.getItem('user');
        this.token = localStorage.getItem('token');
    }

    componentDidMount(){
        if((this.user !== "" && this.token !== "") && (this.user !== null && this.token !== null)){
            this.getAllCampaigns();
            this.getAllProducts();
        }else{
            alert('Você não está logado!');
            window.location.href = "/admin/login";
        }
    }

    getAllCampaigns(){
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            }
        };

        fetch('/Campanha', requestOptions)
            .then(response => response.json())
            .then(data => {
                for(var i = 0; i < data.length; i++){
                    data[i].Dt_inicio = new Date(data[i].Dt_inicio).toLocaleDateString('pt-br');
                    data[i].Dt_fim    = new Date(data[i].Dt_fim).toLocaleDateString('pt-br');
                }

                this.setState({
                    campanhas: data
                });
            });
    }

    getAllProducts(){
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            }
        };

        fetch('/Produto', requestOptions)
            .then(response => response.json())
            .then(data => {
                var prods = [];

                for(var i = 0; i < data.length; i++){
                    prods.push({
                        value: data[i].Id,
                        label: data[i].Nome,
                        imagem: data[i].Imagem,
                        quantidade: data[i].Qtde
                    });
                }

                this.setState({
                    produtos: prods
                });
            });
    }

    openNewCampaign(){
        var newCampaign = document.querySelector("#newMov.new");
        newCampaign.classList.add("active");
        document.querySelector(".overlay").classList.add("active");
    }

    checkIfBoxesOpen(){
        this.getAllCampaigns();
        var actives = document.querySelectorAll(".active");
        for(var i = 0; i < actives.length; i++){
            actives[i].classList.remove("active");
        }
    }

    closeProdAba(){
        this.getProdsFromCampaign();
        var actives = document.querySelector("#newProd.active");
        actives.classList.remove("active");
        document.querySelector(".overlay").classList.remove("active");
    }

    getProdsFromCampaign() {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            }
        };
        
        fetch('/Produto_Campanha', requestOptions)
            .then(response => response.json())
            .then(data => {
                var id = this.state.campanha.Id;
                var prod = [];

                for(var i = 0; i < data.length; i++){
                    if(data[i].CampanhaId === id){
                        for(var j = 0; j < this.state.produtos.length; j++){
                            if(this.state.produtos[j].value === data[i].ProdutoId){
                                prod.push(this.state.produtos[j]);
                            }
                        }
                    }
                }

                this.setState({
                    "prodCampanhas": prod
                });
            });
    }

    seeProducts(id){
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            }
        };
        fetch('/Campanha/' + id, requestOptions)
            .then(response => response.json())
            .then(data => {
                data.Dt_inicio = new Date(data.Dt_inicio).toLocaleDateString('pt-br');
                data.Dt_fim = new Date(data.Dt_fim).toLocaleDateString('pt-br');

                this.setState({
                    campanha: data
                });

                this.getProdsFromCampaign();
                document.querySelector("#productsCampaign").classList.add("active");
            });
    }

    saveProd(e){
        e.preventDefault();
        
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            },
            body: JSON.stringify({
                "produtoId": parseInt(this.state.produtoId),
                "campanhaId": parseInt(this.state.campanha.Id),
                "quantidade": parseInt(this.state.qtde)
            })
        };

        fetch('/Produto_Campanha', requestOptions)
            .then(response => response.text())
            .then(data => {
                alert("Produto Salvo!");
                this.closeProdAba();
            });
    }

    saveCampaign(e){
        e.preventDefault();

        // let form = new FormData();
        // form.append('file', document.querySelector("input[type=file]").files[0]);

        // const optReq = {
        //     method: "POST",
        //     // headers: {
        //     //     'Authorization': 'Bearer ' + this.token
        //     // },
        //     body: form
        // }

        // fetch('/api/v1/file/upload', optReq)
        //     .then((response) => response.json())
        //     .then((result) => {
        //         console.log('Success:', result);
        //     });

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            },
            body: JSON.stringify({
                "nome": this.state.nome,
                "descricao": this.state.descricao,
                "dt_inicio": this.state.dataInit,
                "dt_fim": this.state.dataFim,
                "instituicaoId": 1,
                "ativo": true,
                "logotipo": this.state.imagem
            })
        };
        fetch('/Campanha', requestOptions)
            .then(response => response.text())
            .then(data => {
                // console.log("Salvou campanha " + data.id);
                // for(var i = 0; i < this.state.produtosSelecionados.length; i++){
                //     console.log("Salvar prod " + i);

                //     const requestOptions = {
                //         method: 'POST',
                //         headers: { 
                //             'Content-Type': 'application/json',
                //             'Authorization': 'Bearer ' + this.token
                //         },
                //         body: JSON.stringify({
                //             "produtoId": this.state.produtosSelecionados[i],
                //             "campanhaId": data.id,
                //             "quantidade": 1
                //         })
                //     };

                //     fetch('/Produto_Campanha', requestOptions)
                //         .then(response => response.json())
                //         .then(data => {
                //             console.log("Salvou produto " + i);
                //         });
                // }

                alert("Campanha Salva!");
                this.checkIfBoxesOpen();
            });
    }

    handleChange = (value) => {
        let valueProd = this.state.produtosSelecionados;
        valueProd.push(value);
        this.setState({
            produtosSelecionados: valueProd
        });
    }

    openNewProds() {
        var newProd = document.querySelector("#newProd.new");
        newProd.classList.add("active");
        document.querySelector(".overlay").classList.add("active");
    }

    render(){
        return (
            <section className='content' id="campanhas">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 title-page'>
                            <h1>Gerenciar Campanhas</h1>
                            <button className='btn-new' onClick={ () => { this.openNewCampaign() } }>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.325 15H10.825V10.85H15V9.35H10.825V5H9.325V9.35H5V10.85H9.325V15ZM10 20C8.58333 20 7.26667 19.7458 6.05 19.2375C4.83333 18.7292 3.775 18.025 2.875 17.125C1.975 16.225 1.27083 15.1667 0.7625 13.95C0.254167 12.7333 0 11.4167 0 10C0 8.6 0.254167 7.29167 0.7625 6.075C1.27083 4.85833 1.975 3.8 2.875 2.9C3.775 2 4.83333 1.29167 6.05 0.775C7.26667 0.258333 8.58333 0 10 0C11.4 0 12.7083 0.258333 13.925 0.775C15.1417 1.29167 16.2 2 17.1 2.9C18 3.8 18.7083 4.85833 19.225 6.075C19.7417 7.29167 20 8.6 20 10C20 11.4167 19.7417 12.7333 19.225 13.95C18.7083 15.1667 18 16.225 17.1 17.125C16.2 18.025 15.1417 18.7292 13.925 19.2375C12.7083 19.7458 11.4 20 10 20ZM10 18.5C12.3333 18.5 14.3333 17.6667 16 16C17.6667 14.3333 18.5 12.3333 18.5 10C18.5 7.66667 17.6667 5.66667 16 4C14.3333 2.33333 12.3333 1.5 10 1.5C7.66667 1.5 5.66667 2.33333 4 4C2.33333 5.66667 1.5 7.66667 1.5 10C1.5 12.3333 2.33333 14.3333 4 16C5.66667 17.6667 7.66667 18.5 10 18.5Z" fill="white"/></svg>
                                Adicionar Campanha
                            </button>
                        </div>
                    </div>
                    <div className='row'>
                        { this.state.campanhas.map((c) => {
                            return (
                                <div className='col-md-4' key={ c.Id }>
                                    <div className='card'>
                                        <div className='title'>
                                            <img src={ imgCampanha } alt={ c.Nome } className='backCampanha img-fluid'/>
                                            <h2>{ c.Nome }</h2>
                                        </div>
                                        <div className='body'>
                                            <p className='date'>{ c.Dt_inicio } - { c.Dt_fim }</p>
                                            <p className='description'>{ c.Descricao }</p>
                                        </div>
                                        <button className='see-more' id={ c.Id } onClick={ () => { this.seeProducts(c.Id) } }>
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
                                    <img src={ imgCampanha } alt="Banner" className='img-fluid imgBanner'/>
                                    <h2>{ this.state.campanha.Nome }</h2>
                                </div>
                                <div className='subtitle'>
                                    <p className='data'>{ this.state.campanha.Dt_inicio } - { this.state.campanha.Dt_fim }</p>
                                    <h3>{ this.state.campanha.Descricao }</h3>
                                </div>
                                <div className='products'>
                                    <h2>Produtos</h2>
                                    <div className="row">
                                        { this.state.prodCampanhas.map((p) => {
                                            var classProgress = "";
                                            var percent = 50 / p.quantidade;
                                            
                                            if(percent < 0.3){
                                                classProgress = "progress-bar bg-danger";
                                            }else if(percent > 0.3 && percent < 0.7){
                                                classProgress = "progress-bar bg-warning";
                                            }else{
                                                classProgress = "progress-bar bg-success";
                                            }

                                            return (
                                                <div className="col-md-4" key={p.value}>
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <img src={imgArroz} className={p.label} alt='Imagem arroz'/>
                                                        </div>
                                                        <div className="col-md-9 title-img-pequena">
                                                            <p>{p.label}</p>
                                                            <div className="progress">
                                                                <div className={classProgress} role="progressbar" aria-label="arroz-progress-bar" aria-valuenow="50" aria-valuemin="0" aria-valuemax={p.quantidade}></div>
                                                            </div>
                                                            <p>
                                                                50 /&nbsp;<b>{p.quantidade}</b>&nbsp;unidades
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <button className='btn-new' onClick={ () => { this.openNewProds() } }>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.325 15H10.825V10.85H15V9.35H10.825V5H9.325V9.35H5V10.85H9.325V15ZM10 20C8.58333 20 7.26667 19.7458 6.05 19.2375C4.83333 18.7292 3.775 18.025 2.875 17.125C1.975 16.225 1.27083 15.1667 0.7625 13.95C0.254167 12.7333 0 11.4167 0 10C0 8.6 0.254167 7.29167 0.7625 6.075C1.27083 4.85833 1.975 3.8 2.875 2.9C3.775 2 4.83333 1.29167 6.05 0.775C7.26667 0.258333 8.58333 0 10 0C11.4 0 12.7083 0.258333 13.925 0.775C15.1417 1.29167 16.2 2 17.1 2.9C18 3.8 18.7083 4.85833 19.225 6.075C19.7417 7.29167 20 8.6 20 10C20 11.4167 19.7417 12.7333 19.225 13.95C18.7083 15.1667 18 16.225 17.1 17.125C16.2 18.025 15.1417 18.7292 13.925 19.2375C12.7083 19.7458 11.4 20 10 20ZM10 18.5C12.3333 18.5 14.3333 17.6667 16 16C17.6667 14.3333 18.5 12.3333 18.5 10C18.5 7.66667 17.6667 5.66667 16 4C14.3333 2.33333 12.3333 1.5 10 1.5C7.66667 1.5 5.66667 2.33333 4 4C2.33333 5.66667 1.5 7.66667 1.5 10C1.5 12.3333 2.33333 14.3333 4 16C5.66667 17.6667 7.66667 18.5 10 18.5Z" fill="white"/></svg>
                                                Adicionar Produto
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button className='see-less' onClick={() => { this.checkIfBoxesOpen() }}>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0.625196L0 6.6252L1.075 7.7002L6 2.7502L10.925 7.6752L12 6.6002L6 0.625196Z" fill="#444444"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="newMov" className='new'>
                    <h2>Adicionar campanha</h2>
                    <span className='line'></span>
                    <form onSubmit={ (e) => {this.saveCampaign(e)} } encType="multipart/form-data" method="POST">
                        <div className='form-group'>
                            <label htmlFor="nome">Nome da campanha</label>
                            <input type="text" name="nome" id='nome' className='form-control' onChange={(e) => this.setState({nome: e.target.value})} required/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="descricao">Descrição</label>
                            <textarea name="descricao" id='descricao' className='form-control' onChange={(e) => this.setState({descricao: e.target.value})} required></textarea>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="periodo">Período</label>
                            <input type="date" name="dataInit" id='dataInit' className='form-control' onChange={(e) => this.setState({dataInit: new Date(e.target.value).toJSON() })} required/>
                            <br/>
                            <input type="date" name="dataFim" id='dataFim' className='form-control' onChange={(e) => this.setState({dataFim: new Date(e.target.value).toJSON() })}required/>
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="imagem">Upload da Imagem da Campanha</label>
                            <input type="file" className="form-control" name="imagem" id="imagem" onChange={(e) => this.setState({imagem: e.target.value})} required/>
                        </div> */}
                        <button type="submit" className='btn-submit'>Salvar</button>
                        <button type="button" className='btn-cancel' onClick={ () => {this.checkIfBoxesOpen()} }>Cancelar</button>
                    </form>
                </div>
                <div id="newProd" className='new'>
                    <h2>Adicionar Produto</h2>
                    <span className='line'></span>
                    <form>
                        <div className='form-group'>
                            <label htmlFor="produto">Produto</label>
                            <select name='produto' className='form-control' onChange={(e) => this.setState({produtoId: e.target.value})} value={this.state.produtoId}>
                                <option value="" disabled>Selecione o produto</option>
                                { this.state.produtos.map((p) => {
                                    return(
                                        <option value={p.value} key={p.value}>{p.label}</option>
                                    );
                                }) }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="qtde">Quantidade</label>
                            <input type="number" className="form-control" name="qtde" id="qtde" onChange={(e) => this.setState({qtde: e.target.value})} required/>
                        </div>
                        <button type="submit" className='btn-submit' onClick={ (e) => {this.saveProd(e)} }>Salvar</button>
                        <button type="button" className='btn-cancel' onClick={ () => {this.closeProdAba()} }>Cancelar</button>
                    </form>
                </div>
                <div className='overlay' onClick={ () => {this.checkIfBoxesOpen()}}></div>
            </section>
        );
    }
}