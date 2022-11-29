import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import LogoIgrAdventista from './../images/igreja-adventista.jpg';
import MapImg from './../images/map.png';
import ImgOleo from './../images/oleo.jpg';
import ImgFarinha from './../images/farinha.jpg';
import ImgAgua from './../images/agua_mineral.jpg';
import ImgArroz from './../images/arroz_branco.jpg';
import ImgFeijao from './../images/feijao.jpg';
import ImgMilho from './../images/milho.jpg';
import LogoAdra from './../images/adra-logo.jpg';
import { tab } from '@testing-library/user-event/dist/tab';
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

    var tabs = document.querySelectorAll("#campanha-conteudo ul li");

    var contentTabs = document.querySelectorAll("#campanha-conteudo .content-tab");

    tabs.forEach(function(tab){

        tab.classList.remove("active");

    });


    for(var i=0; i < contentTabs.length; i++){

        contentTabs[i].classList.add("disabled");

    }

    document.getElementById(id).classList.remove("disabled");

    props.target.classList.add("active");

}

export default function Campanha(){
    const { campanha } = useParams();
    const [dadosCampanha, setDadosCampanha] = useState({});
    const [dadosInstituicao, setDadosInstituicao] = useState({});

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`/Campanha/${campanha}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setDadosCampanha(data);
            });
        console.log("DadosCampanhaInstituicaoId",dadosCampanha); //VER depois
        fetch(`/Instituicao/${dadosCampanha.instituicaoId}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setDadosInstituicao(data);
            });
    }, []);

    return (
        <section id="campanha-conteudo">
            <section id="banner">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>{dadosCampanha.nome}</h1>
                            <p>Conheça nossas campanhas e saiba como ajudar os projetos sociais que estão na nossa plataforma, a sua ajuda será muito bem vinda!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="content-campanha">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <ul>
                                <li onClick={(changeTab)} className="tab active" data-href="objetivo"> Objetivo </li>
                                <li onClick={(changeTab)} className="tab" data-href="instituicao_responsavel"> Instituição </li>
                                <li onClick={(changeTab)} className="tab" data-href="doacoes"> Doações </li>
                            </ul>

                            <div id="objetivo" className="content-tab">
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Link to={"/campanha/" + dadosCampanha.id} className='barra-link'>
                                            <img src={dadosCampanha.logotipo} className="img-fluid rounded" alt={'Logo ' + dadosCampanha.nome}/>
                                        </Link>
                                    </div>
                                
                                    <div className='col-md-8'>
                                        <p>
                                            {dadosCampanha.descricao}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div id="instituicao_responsavel" className="content-tab disabled">
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="title-tab">
                                            <p>{dadosInstituicao.nome}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Link to={"/instituicao/" + dadosCampanha.instituicaoId} className='barra-link'>
                                            <img src={dadosInstituicao.logotipo} className="img-fluid rounded" alt={'Logo ' + dadosInstituicao.nome}/>
                                        </Link>
                                    </div>
                                
                                    <div className='col-md-8'>
                                        <p>
                                            {dadosInstituicao.descricao}
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-md-4'>
                                        <Link to={"/instituicao/" + dadosCampanha.instituicaoId} className='btn-carregar-mais'>Conhecer Instituição</Link>
                                    </div>
                                </div>

                            </div>

                            <div id="doacoes" className="content-tab disabled">
                                <div className="row space-img-pequena">

                                    <div className="col-md-1">
                                        <img src={ImgOleo} className="img-pequena" alt='Imagem Oleo'/>
                                    </div>

                                    <div className="col-md-5 title-img-pequena">
                                        <p>
                                            <b> Óleo </b>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-warning" role="progressbar" aria-label="oleo-progress-bar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p>
                                            60 /&nbsp;<b>100</b>&nbsp;unidades
                                        </p>
                                    </div>

                                    <div className="col-md-1">
                                        <img src={ImgArroz} className="img-pequena" alt='Imagem Arroz'/>
                                    </div>
                                    
                                    <div className="col-md-5 title-img-pequena">
                                        <p>
                                            <b> Arroz branco </b>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" aria-label="arroz-progress-bar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p>
                                            20 /&nbsp;<b>100</b>&nbsp;kg
                                        </p>
                                    </div>

                                </div>

                                <div className="row space-img-pequena">

                                    <div className="col-md-1">
                                        <img src={ImgFarinha} className="img-pequena" alt='Imagem farinha'/>
                                    </div>

                                    <div className="col-md-5 title-img-pequena">
                                        <p>
                                            <b> Farinha </b>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" aria-label="farinha-progress-bar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p>
                                            20 /&nbsp;<b>100</b>&nbsp;kg
                                        </p>
                                    </div>

                                    <div className="col-md-1">
                                        <img src={ImgFeijao} className="img-pequena" alt='Imagem Feijao'/>
                                    </div>
                                    
                                    <div className="col-md-5 title-img-pequena">
                                        <p>
                                            <b> Feijão </b>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" role="progressbar" aria-label="feijao-progress-bar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p>
                                            95 /&nbsp;<b>100</b>&nbsp;kg
                                        </p>
                                    </div>

                                </div>

                                <div className="row space-img-pequena">

                                    <div className="col-md-1">
                                        <img src={ImgAgua} className="img-pequena" alt='Imagem Agua'/>
                                    </div>

                                    <div className="col-md-5 title-img-pequena">
                                        <p>
                                            <b> Água Minetal </b>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" role="progressbar" aria-label="agua-progress-bar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p>
                                            95 /&nbsp;<b>100</b>&nbsp;litros
                                        </p>
                                    </div>

                                    <div className="col-md-1">
                                        <img src={ImgMilho} className="img-pequena" alt='Imagem Milho'/>
                                    </div>

                                    <div className="col-md-5 title-img-pequena">
                                        <p>
                                            <b> Milho </b>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-warning" role="progressbar" aria-label="milho-progress-bar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p>
                                            60 /&nbsp;<b>100</b>&nbsp;unidades
                                        </p>
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