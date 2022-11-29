import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import MapImg from './../images/map.png';
// import LogoAdra from './../images/adra-logo.jpg';
import { useState, useEffect } from 'react';

function focusInput(e){
    var label = document.querySelector('label[for=' + e.target.id + ']');
    label.style.top  = "-26px";
    label.style.left = "0px";
}

function blurInput(e){
    var label = document.querySelector('label[for=' + e.target.id + ']');
    if(e.target.value == ""){
        label.style.top = "10px";
        label.style.left = "15px";
    }
}

function changeTab(props){

    var id = props.target.getAttribute("data-href");

    var tabs = document.querySelectorAll("#instituicao-conteudo ul li");

    var contentTabs = document.querySelectorAll("#instituicao-conteudo .content-tab");

    tabs.forEach(function(tab){

        tab.classList.remove("active");

    });


    for(var i=0; i < contentTabs.length; i++){

        contentTabs[i].classList.add("disabled");

    }

    document.getElementById(id).classList.remove("disabled");

    props.target.classList.add("active");

}

export default function Instituicao(){
    const { instituicao } = useParams();
    const [dadosInstituicao, setDadosInstituicao] = useState({});
    const [campanhasInstituicao, setCampanhasInstituicao] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`/Instituicao/${instituicao}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setDadosInstituicao(data);
            });
        fetch("/Campanha", requestOptions)
            .then(response => response.json())
            .then(data => {
                const listaCampanhasInst = data.filter((campanha) => {
                    if (instituicao == campanha.instituicaoId)
                        return campanha;
                });
                setCampanhasInstituicao(listaCampanhasInst);
            });
    }, []);


    return (
        <section id="instituicao-conteudo">
            <section id="banner">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>{dadosInstituicao.nome}</h1>
                            <p>Conheça nossas campanhas e saiba como ajudar os projetos sociais que estão na nossa plataforma, a sua ajuda será muito bem vinda!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="content-instuicao">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <ul>
                                <li onClick={(changeTab)} className="tab active" data-href="sobre-nos"> Sobre nós </li>
                                <li onClick={(changeTab)} className="tab" data-href="localizacao"> Localização </li>
                                <li onClick={(changeTab)} className="tab" data-href="campanhas"> Campanhas </li>
                            </ul>

                            <div id="sobre-nos" className="content-tab">
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Link to={"/instituicao/" + instituicao} className='barra-link'>
                                            <img src={dadosInstituicao.logotipo} className="img-fluid rounded" alt={'Logo ' + dadosInstituicao.nome}/>
                                        </Link>
                                    </div>
                                
                                    <div className='col-md-8'>
                                        <p>
                                        {dadosInstituicao.descricao}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div id="localizacao" className="content-tab disabled">
                                <div className='row'>
                                    <div className='col-md-5'>
                                        <div className="title-tab">
                                            <p>Localização</p>
                                        </div>
                                        <div className="desc-location">
                                            <p>
                                                Rua: {dadosInstituicao.endereco}, {dadosInstituicao.bairro} <br></br>
                                                Cidade {dadosInstituicao.cidade} - {dadosInstituicao.estado} <br></br>
                                                CEP: {dadosInstituicao.cep} <br></br>
                                                <br></br>
                                                Telefone: {dadosInstituicao.telefone}<br></br>
                                                WhatsApp: {dadosInstituicao.celular}<br></br>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-7'>
                                        <Link to="#" className='barra-link'>
                                            <img src={MapImg} className="img-fluid rounded" alt='Mapa Img'/>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div id="campanhas" className="content-tab disabled">
                                <div className="row">
                                    <div className="title-tab">
                                        <p>Campanhas</p>
                                    </div>
                                    {campanhasInstituicao.map((campanha) => {
                                        return (
                                            <div className="col-md-4" key={campanha.id}>
                                                <div className="card-mini-campanhas">
                                                    <img src={campanha.logotipo} className="img-fluid" alt={'Logo ' + campanha.nome}/>
                                                    <Link to={"/campanha/" + campanha.id} className='barra-link'>
                                                        <p>{campanha.nome}</p>
                                                        <h3>Recursos assistenciais </h3>
                                                        <span className='icon'>
                                                            <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.780518 3.4775L14.2567 16.9999L0.780518 30.5224L3.39334 33.1442L19.4824 16.9999L3.39334 0.855713L0.780518 3.4775Z" fill="white"/></svg>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    }) }
                                </div>

                                <div className="row">
                                    <div className='col-md-2 offset-md-5'>
                                        <Link to="/campanhas" className='btn-carregar-mais'>Carregar Mais</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </section>
    );
}