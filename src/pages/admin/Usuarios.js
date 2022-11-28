import React, {Component} from 'react';

export default class Usuarios extends Component{
    constructor(props){
        super(props);

        this.openUser = this.openUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.checkIfBoxesOpen = this.checkIfBoxesOpen.bind(this);

        this.state = {
            id: "",
            nome: "",
            email: "",
            senha: "",
            funcao: "",
            instituicaoId: "",
            ativo: true,
            instituicoes: [],
            usuarios: []
        };
    }

    componentDidMount(){
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if((user != "" && token != "") && (user != null && token != null)){
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            };
            fetch('/Usuario', requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        usuarios: data
                    });
                });
        }else{
            alert('Você não está logado!');
            window.location.href = "/admin/login";
        }
    }

    openUser(){
        document.querySelector(".new").classList.add("active");
        document.querySelector(".overlay").classList.add("active");
    }
    
    deleteUser(e){
        if(window.confirm("Deseja mesmo apagar esse usuário?")){
            var id = e.target.getAttribute("data-href");
            window.alert("Usuário excluído!");
        }
    }
    
    checkIfBoxesOpen(props){
        var actives = document.querySelectorAll(".active");
        for(var i = 0; i < actives.length; i++){
            actives[i].classList.remove("active");
        }
    }

    saveUser(e){
        e.preventDefault();
        var bodyRequisition = {
            "nome": this.state.nome,
            "email": this.state.email,
            "senha": this.state.senha,
            "funcao": this.state.funcao,
            "instituicaoId": this.state.instituicaoId,
            "ativo": 1
        };

        if(this.state.id !== ""){
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyRequisition)
            };
            fetch('/Usuario/' + this.state.id, requestOptions)
                .then(response => response.json())
                .then(data => {
                    alert("Usuário Salvo!");
                    this.checkIfBoxesOpen();
                });
        }else{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyRequisition)
            };
            fetch('/Usuario', requestOptions)
                .then(response => response.json())
                .then(data => {
                    alert("Usuário Salvo!");
                    this.checkIfBoxesOpen();
                });
        }
    }

    render() {
        return (
            <section className='content' id="usuarios">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='bg-white'>
                                <div className='row'>
                                    <div className='col-md-12 title-page'>
                                        <h1>Gerenciar Usuários</h1>
                                        <button className='btn-new' onClick={() => {this.openUser()}}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.325 15H10.825V10.85H15V9.35H10.825V5H9.325V9.35H5V10.85H9.325V15ZM10 20C8.58333 20 7.26667 19.7458 6.05 19.2375C4.83333 18.7292 3.775 18.025 2.875 17.125C1.975 16.225 1.27083 15.1667 0.7625 13.95C0.254167 12.7333 0 11.4167 0 10C0 8.6 0.254167 7.29167 0.7625 6.075C1.27083 4.85833 1.975 3.8 2.875 2.9C3.775 2 4.83333 1.29167 6.05 0.775C7.26667 0.258333 8.58333 0 10 0C11.4 0 12.7083 0.258333 13.925 0.775C15.1417 1.29167 16.2 2 17.1 2.9C18 3.8 18.7083 4.85833 19.225 6.075C19.7417 7.29167 20 8.6 20 10C20 11.4167 19.7417 12.7333 19.225 13.95C18.7083 15.1667 18 16.225 17.1 17.125C16.2 18.025 15.1417 18.7292 13.925 19.2375C12.7083 19.7458 11.4 20 10 20ZM10 18.5C12.3333 18.5 14.3333 17.6667 16 16C17.6667 14.3333 18.5 12.3333 18.5 10C18.5 7.66667 17.6667 5.66667 16 4C14.3333 2.33333 12.3333 1.5 10 1.5C7.66667 1.5 5.66667 2.33333 4 4C2.33333 5.66667 1.5 7.66667 1.5 10C1.5 12.3333 2.33333 14.3333 4 16C5.66667 17.6667 7.66667 18.5 10 18.5Z" fill="white"/></svg>
                                            ADICIONAR Usuário
                                        </button>
                                    </div>
                                </div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>E-mail</th>
                                            <th>Função</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    { this.state.usuarios.map((u) => {
                                        <tr key={u.id}>
                                            <td>{u.nome}</td>
                                            <td>{u.email}</td>
                                            <td>{u.funcao}</td>
                                            <td>
                                                <button className='btnEdit' onClick={() => {this.openUser(u.id)}}>
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.2496V18.9996H3.75L14.81 7.93957L11.06 4.18957L0 15.2496ZM17.71 5.03957C18.1 4.64957 18.1 4.01957 17.71 3.62957L15.37 1.28957C14.98 0.89957 14.35 0.89957 13.96 1.28957L12.13 3.11957L15.88 6.86957L17.71 5.03957Z" fill="#444444"/></svg>
                                                </button>
                                                <button className='btnDelete' onClick={() => {this.deleteUser(u.id)}} data-href="1">
                                                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z" fill="#201F20" fill-opacity="0.8"/></svg>
                                                </button>
                                            </td>
                                        </tr>
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="newMov" className='new'>
                    <h2>Adicionar usuário</h2>
                    <span className='line'></span>
                    <form>
                        <div className='form-group'>
                            <label htmlFor="nome">Nome do usuário *</label>
                            <input type="text" nome="nome" id='nome' className='form-control' defaultValue={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})} required/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email">E-mail *</label>
                            <input type="email" nome="email" id='email' className='form-control' defaultValue={this.state.email} onChange={(e) => this.setState({email: e.target.value})} required/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="senha">Senha *</label>
                            <input type="password" nome="senha" id='senha' className='form-control' defaultValue={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} required/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="funcao">Função *</label>
                            <input type="text" nome="funcao" id='funcao' className='form-control' defaultValue={this.state.funcao} onChange={(e) => this.setState({funcao: e.target.value})} required/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="instituicao">Instituição *</label>
                            <input type="text" nome="instituicao" id='instituicao' className='form-control' defaultValue={this.state.instituicaoId} onChange={(e) => this.setState({instituicaoId: e.target.value})} required/>
                        </div>
                        <button type="submit" className='btn-submit' onClick={() => {this.saveUser()}}>Salvar</button>
                        <button type="button" className='btn-cancel' onClick={() => {this.checkIfBoxesOpen()}}>Cancelar</button>
                    </form>
                </div>
                <div className='overlay' onClick={() => {this.checkIfBoxesOpen()}}></div>
            </section>
        );
    }
}