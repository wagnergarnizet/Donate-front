import React, { Component } from 'react';

export default class Estoque extends Component{
    constructor(props){
        super(props);

        this.state = {
            estoque: [],
            produtos: [],
            campanhas: [],
            id: "",
            movimentacao: "",
            quantidade: "",
            observacao: "",
            produtoId: "",
            campanhaId: "",
            tipo: ""
        };

        this.token = localStorage.getItem('token');
    }

    componentDidMount(){
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if((user != "" && token != "") && (user != null && token != null)){
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            };
            fetch('/Estoque', requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        estoque: data
                    });
                });
                
            fetch('/Campanha', requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        campanhas: data
                    });
                });

            fetch('/Produto', requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        produtos: data
                    });
                });
        }else{
            alert('Você não está logado!');
            window.location.href = "/admin/login";
        }
    }

    openEditRegister(id = ""){
        if(id !== ""){
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            };
            fetch('/Estoque/' + id, requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        produtoId: data.produtoId,
                        campanhaId: data.campanhaId,
                        quantidade: data.quantidade,
                        movimentacao: data.tipo,
                        id: data.id,
                    });
                });
        }

        var newOpen = document.querySelector(".new");
        newOpen.classList.add("active");
        document.querySelector(".overlay").classList.add("active");
    }
    
    checkIfBoxesOpen(props){
        var actives = document.querySelectorAll(".active");
        for(var i = 0; i < actives.length; i++){
            actives[i].classList.remove("active");
        }
    }

    onSubmitEstoque(e) {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            },
            body: JSON.stringify({
                "produtoId": this.state.produtoId,
                "campanhaId": this.state.campanhaId,
                "qtde": this.state.quantidade,
                "tipo": parseInt(this.state.movimentacao),
                "observacao": this.state.observacao
            })
        };
        fetch('/Estoque', requestOptions)
            .then(response => {
                if(response.ok){
                    response.text().then(data => {
                        alert("Estoque Salvo!");
                        this.checkIfBoxesOpen();
                    });
                }else{
                    console.log(response);
                }
            })
            .catch(er => console.log(er));
    }

    getProducts(campanha){
        this.setState({campanhaId: campanha});

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        if(campanha == ""){
            fetch('/Produto', requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        produtos: data
                    });
                });
        }else{
            fetch('/Produto_Campanha', requestOptions)
                .then(response => response.json())
                .then(data => {
                    var prods = [];
                    for(var i = 0; i < data.length; i++){
                        if(data[i].campanhaId == campanha){
                            fetch('/Produto/' + data[i].produtoId, requestOptions)
                                .then(response => response.json())
                                .then(prod => {
                                    prods.push(prod);
                                });
                        }
                    }
    
                    this.setState({
                        produtos: prods
                    });
                });
        }
    }

    render(){
        return (
            <section className='content' id="estoque">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='bg-white'>
                                <div className='row'>
                                    <div className='col-md-9'>
                                        <h1>Estoque</h1>
                                        <div className='legendas'>
                                            <p>Legenda:</p>
                                            <p><span className='status green'></span> Estoque OK</p>
                                            <p><span className='status yellow'></span> Estoque baixo</p>
                                            <p><span className='status red'></span> Estoque crítico</p>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <button className='btn-new' onClick={ () => { this.openEditRegister() } }>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.325 15H10.825V10.85H15V9.35H10.825V5H9.325V9.35H5V10.85H9.325V15ZM10 20C8.58333 20 7.26667 19.7458 6.05 19.2375C4.83333 18.7292 3.775 18.025 2.875 17.125C1.975 16.225 1.27083 15.1667 0.7625 13.95C0.254167 12.7333 0 11.4167 0 10C0 8.6 0.254167 7.29167 0.7625 6.075C1.27083 4.85833 1.975 3.8 2.875 2.9C3.775 2 4.83333 1.29167 6.05 0.775C7.26667 0.258333 8.58333 0 10 0C11.4 0 12.7083 0.258333 13.925 0.775C15.1417 1.29167 16.2 2 17.1 2.9C18 3.8 18.7083 4.85833 19.225 6.075C19.7417 7.29167 20 8.6 20 10C20 11.4167 19.7417 12.7333 19.225 13.95C18.7083 15.1667 18 16.225 17.1 17.125C16.2 18.025 15.1417 18.7292 13.925 19.2375C12.7083 19.7458 11.4 20 10 20ZM10 18.5C12.3333 18.5 14.3333 17.6667 16 16C17.6667 14.3333 18.5 12.3333 18.5 10C18.5 7.66667 17.6667 5.66667 16 4C14.3333 2.33333 12.3333 1.5 10 1.5C7.66667 1.5 5.66667 2.33333 4 4C2.33333 5.66667 1.5 7.66667 1.5 10C1.5 12.3333 2.33333 14.3333 4 16C5.66667 17.6667 7.66667 18.5 10 18.5Z" fill="white"/></svg>
                                            Adicionar Movimentação
                                        </button>
                                    </div>
                                </div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Nome da campanha</th>
                                            <th>Nome do produto</th>
                                            <th>Quantidade</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { this.state.estoque.map((e) => {
                                            return(
                                                <tr key={e.Id}>
                                                    <td scope="row">
                                                        <span className='status green'></span>
                                                    </td>
                                                    <td>{ e.Campanha }</td>
                                                    <td>{ e.Produto }</td>
                                                    <td>{ e.Quantidade }</td>
                                                    <td>
                                                        <button className='btnEdit' onClick={ () => {this.openEditRegister(e.Id)}}>
                                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 15.2496V18.9996H3.75L14.81 7.93957L11.06 4.18957L0 15.2496ZM17.71 5.03957C18.1 4.64957 18.1 4.01957 17.71 3.62957L15.37 1.28957C14.98 0.89957 14.35 0.89957 13.96 1.28957L12.13 3.11957L15.88 6.86957L17.71 5.03957Z" fill="#444444"/></svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        }) }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="newMov" className='new'>
                    <h2>Editar Movimentação</h2>
                    <span className='line'></span>
                    <form>
                        <div className='form-group'>
                            <label htmlFor="campanha">Campanha</label>
                            <select name='campanha' className='form-control' onChange={(e) => this.getProducts(e.target.value)} defaultValue={this.state.campanhaId}>
                                <option value="">Nenhuma campanha</option>
                                { this.state.campanhas.map((c) => {
                                    return(
                                        <option value={c.Id} key={c.Id}>{c.Nome}</option>
                                    );
                                }) }
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="produto">Produto</label>
                            <select name='produto' className='form-control' onChange={(e) => this.setState({produtoId: e.target.value})} value={this.state.produtoId}>
                                <option value="" disabled>Selecione o produto</option>
                                { this.state.produtos.map((p) => {
                                    return(
                                        <option value={p.Id} key={p.Id}>{p.Nome}</option>
                                    );
                                }) }
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="tipo">Tipo de Movimentação</label>
                            <select name='tipo' className='form-control' onChange={(e) => this.setState({movimentacao: e.target.value})} value={this.state.movimentacao}>
                                <option value="" disabled>Selecione a Movimentação</option>
                                <option value="1">Entrada</option>
                                <option value="2">Saída</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="quantidade">Quantidade</label>
                            <input type="number" nome="quantidade" id='quantidade' className='form-control' onChange={(e) => this.setState({quantidade: e.target.value})} defaultValue={this.state.quantidade} required/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="obs">Observações</label>
                            <textarea name="obs" id='obs' className='form-control' onChange={(e) => this.setState({observacao: e.target.value})} defaultValue={this.state.observacao} required></textarea>
                        </div>
                        <button type="submit" className='btn-submit' onClick={ (e) => {this.onSubmitEstoque(e) }}>Salvar</button>
                        <button type="button" className='btn-cancel' onClick={ () => {this.checkIfBoxesOpen() }}>Cancelar</button>
                    </form>
                </div>
                <div className='overlay' onClick={ () => {this.checkIfBoxesOpen() }}></div>
            </section>
        );
    }
}